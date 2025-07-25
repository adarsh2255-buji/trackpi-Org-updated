import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AssessmentBubble from '../pages/AssessmentBubble'; 
import AssessmentPassedPopup from "../pages/AssessmentPassedPopup";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import AssessmentFailedPopup from "../pages/AssessmentFailedPopup";

const dummyQuestions = [
    // ... (same as before)
];
const ASSESSMENT_TIME = 60 * 60; // 60 minutes in seconds
const PASS_MARK = 25;

const Assessment = () => {
    const { courseId, sectionId } = useParams();
    const { token } = useContext(AuthContext)

    const [fetchedQuestions, setFetchedQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [timer, setTimer] = useState(ASSESSMENT_TIME);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const timerRef = useRef();
    const navigate = useNavigate();

    const questionsToUse = fetchedQuestions.length > 0 ? fetchedQuestions : dummyQuestions;
    const currentQuestion = questionsToUse[currentPage - 1];

    // Fetch questions from backend
    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            setError('');
            try {
                const res = await axios.post(
                'http://localhost:5000/api/progress/start-assessment',
                { courseId, sectionId },
                { headers: { Authorization: `Bearer ${token}` } }
                );
                const data = res.data

                if(Array.isArray(data.questions)){
                    const shuffled = [...data.questions].sort(() => 0.5 - Math.random());
                    setFetchedQuestions(shuffled);
                }
                else {
                    setError("Invalid response format.");
                }
            } catch (error) {
                console.error(error);
                setError("Failed to load assessment questions.");
            }finally {
                setLoading(false);
            }
        }
        if (token) fetchQuestions();
        setTimer(ASSESSMENT_TIME)
    }, [courseId, sectionId, token])

    // Timer countdown
    useEffect(() => {
        if (loading || result) return;
        if (timer <= 0) {
            handleSubmit(true); // auto-submit on time up
            return;
        }
        timerRef.current = setTimeout(() => setTimer(t => t - 1), 1000);
        return () => clearTimeout(timerRef.current);
    }, [timer, loading, result]);

    // Format timer as mm:ss
    const formatTime = (t) => {
        const m = Math.floor(t / 60).toString().padStart(2, '0');
        const s = (t % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    // handle option select
    const handleOptionSelect = (option) => {
        setAnswers(prev => ({
        ...prev,
        [currentPage - 1]: option
        }));
    };

    // handle submit
    const handleSubmit = async (timeUp = false) => {
        setSubmitting(true);
        try {
            const submissionPayload = {
                courseId,
                sectionId,
                answers: questionsToUse.map((q, idx) => ({
                    questionId: q.id,
                    answer: answers[idx] || ""
                }))
            };

            const res = await axios.post(
                'http://localhost:5000/api/progress/submit-assessment',
                submissionPayload,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setResult({
                passed: res.data.passed,
                score: res.data.score,
                wrongAnswers: res.data.wrongAnswers || [],
                timeUp: timeUp || res.data.timeUp
            });
        } catch (err) {
            console.error(err);
            setError('Failed to submit assessment.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="text-white text-center mt-20 text-xl">Loading questions...</div>;
    if (error) return <div className="text-red-500 text-center mt-20 text-xl">{error}</div>;
    if (!currentQuestion) return <div className="text-white text-center mt-20 text-xl">Invalid question number.</div>;

    const selectedOption = answers[currentPage - 1] || "";
    const allAnswered = Object.keys(answers).length === questionsToUse.length;

    // Result popup logic
    if(result) {
        if(result.passed){
            if(result.timeUp){
                // Time up but passed
                return (
                    <AssessmentPassedPopup timeUp={true} score={result.score} total={questionsToUse.length} onUnlock={() => navigate('/courses')} />
                );
            } else {
                // Passed normally
                return (
                    <AssessmentPassedPopup timeUp={false} score={result.score} total={questionsToUse.length} onUnlock={() => navigate('/courses')} />
                );
            }
        } else {
            return(
                <AssessmentFailedPopup 
                    score={result.score}
                    total={questionsToUse.length}
                    wrongAnswers={result.wrongAnswers}
                    onGoBack={() => navigate('/courses')}
                    onRetake={() => window.location.reload()}
                />
            );
        }
    }

    return (
      <>
 <div className='text-white font-inter '>
      <AssessmentBubble
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={questionsToUse.length}
        c
      />

      <div className="absolute w-[88.6vw] h-[3.89vh] top-[33.87vh] left-[6vw] flex justify-between">
        <div className="text-[1.25vw] font-semibold">Question {currentPage} / {questionsToUse.length}</div>
        <div className="text-[1.25vw] font-semibold">Time Remaining: {formatTime(timer)}</div>
      </div>

      <div className="absolute w-[88.6vw] left-[90px] top-[330px] flex flex-col gap-[50px]">
        <div className="text-[1.25vw] font-semibold">
          {currentPage}) {currentQuestion.question}
        </div>

        <div className="grid grid-cols-2 gap-y-[5vh] gap-x-[5vw]">
          {currentQuestion.options.map((option, idx) => {
            const optionLabel = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === option;
            return (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="flex items-center gap-[1.56vw] cursor-pointer text-[1.11vw]"
              >
                <button
                  className={`w-[1.5vw] h-[3.1vh] rounded-full border-[3px] transition-colors duration-200 ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-white bg-transparent'}`}
                ></button>
                <p>{optionLabel})&nbsp;&nbsp;{option}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-[83.51vh] left-[36.42vw] flex gap-[1.56vw]">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="border border-white px-20 py-2 rounded-full text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, questionsToUse.length))}
          className="bg-yellow-500 text-black px-20 py-2 rounded-full border border-white"
        >
          Next
        </button>
        <button
          onClick={() => handleSubmit(false)}
          disabled={submitting || currentPage !== questionsToUse.length}
           className={`ml-10 px-10 py-2 rounded-full border border-white transition-colors duration-200 ${
            currentPage === questionsToUse.length
              ? 'bg-green-600 text-white cursor-pointer'
              : 'bg-gray-500 text-white cursor-not-allowed'
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
   
    </>
    );
};

export default Assessment; 