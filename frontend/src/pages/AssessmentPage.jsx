import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AssessmentFirstPopup from "./AssessmentFirstPopup";
import AssessmentPassedPopup from "./AssessmentPassedPopup";
import AssessmentFailedPopup from "./AssessmentFailedPopup";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ASSESSMENT_TIME = 60 * 60; // 60 minutes
const PASS_MARK = 25;

const AssessmentPage = () => {
  const { courseId, sectionId } = useParams();
  const { token } = useContext(AuthContext);

  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [timer, setTimer] = useState(ASSESSMENT_TIME);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showIntroPopup, setShowIntroPopup] = useState(true);

  const timerRef = useRef();
  const navigate = useNavigate();

  const questions = fetchedQuestions;
  const currentQuestion = questions[currentPage - 1];

  // Fetch questions from API
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

        if (Array.isArray(res.data.questions)) {
          const shuffled = [...res.data.questions].sort(() => 0.5 - Math.random());
          setFetchedQuestions(shuffled);
        } else {
          setError("Invalid response format.");
        }
      } catch (error) {
        setError("Failed to load assessment questions.");
      } finally {
        setLoading(false);
      }
    };

    if (token && !showIntroPopup) {
      fetchQuestions();
      setTimer(ASSESSMENT_TIME);
    }
  }, [token, courseId, sectionId, showIntroPopup]);

  // Timer countdown logic
  useEffect(() => {
    if (loading || result) return;
    if (timer <= 0) return handleSubmit(true);
    timerRef.current = setTimeout(() => setTimer(t => t - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [timer, loading, result]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60).toString().padStart(2, '0');
    const s = (t % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleOptionSelect = (option) => {
    setAnswers(prev => ({
      ...prev,
      [currentPage - 1]: option
    }));
  };

  const handleSubmit = async (timeUp = false) => {
    setSubmitting(true);
    try {
      const payload = {
        courseId,
        sectionId,
        answers: questions.map((q, idx) => ({
          questionId: q.id,
          answer: answers[idx] || ""
        }))
      };

      const res = await axios.post(
        'http://localhost:5000/api/progress/submit-assessment',
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setResult({
        passed: res.data.passed,
        score: res.data.score,
        wrongAnswers: res.data.wrongAnswers || [],
        timeUp: timeUp || res.data.timeUp
      });
    } catch (err) {
      setError('Failed to submit assessment.');
    } finally {
      setSubmitting(false);
    }
  };

  if (showIntroPopup) {
    return (
      <AssessmentFirstPopup
        maxAttempts={5}
        onButtonClick={() => setShowIntroPopup(false)}
      />
    );
  }

  if (loading) return <div className="text-white text-center mt-20 text-xl">Loading questions...</div>;
  if (error) return <div className="text-red-500 text-center mt-20 text-xl">{error}</div>;
  if (!currentQuestion) return <div className="text-white text-center mt-20 text-xl">Invalid question number.</div>;

  if (result) {
    return result.passed ? (
      <AssessmentPassedPopup
        timeUp={result.timeUp}
        score={result.score}
        total={questions.length}
        onUnlock={() => navigate('/courses')}
      />
    ) : (
      <AssessmentFailedPopup
        score={result.score}
        total={questions.length}
        wrongAnswers={result.wrongAnswers}
        onGoBack={() => navigate('/courses')}
        onRetake={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="text-white font-inter w-full">
      <AssessmentBubble
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={questions.length}
      />

      <div className="flex justify-between px-[6vw] mt-[5vh] text-xl font-semibold">
        <p>Question {currentPage} / {questions.length}</p>
        <p>Time Remaining: {formatTime(timer)}</p>
      </div>

      <div className="px-[6vw] mt-10">
        <h2 className="text-[1.25vw] font-semibold mb-6">{currentQuestion.question}</h2>
        <div className="grid grid-cols-2 gap-6">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = answers[currentPage - 1] === opt;
            const label = String.fromCharCode(65 + idx);
            return (
              <div
                key={opt}
                onClick={() => handleOptionSelect(opt)}
                className={`cursor-pointer border p-3 rounded-lg text-lg
                  ${isSelected ? 'bg-yellow-500 text-black' : 'border-white text-white'}`}
              >
                {label}) {opt}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          className="border px-6 py-2 rounded-full text-white"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(questions.length, prev + 1))}
          className="bg-yellow-500 text-black px-6 py-2 rounded-full"
        >
          Next
        </button>
        <button
          onClick={() => handleSubmit(false)}
          disabled={submitting || currentPage !== questions.length}
          className={`px-6 py-2 rounded-full ${currentPage === questions.length
            ? 'bg-green-600 text-white'
            : 'bg-gray-500 text-white cursor-not-allowed'}`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

// Inline bubble component
const AssessmentBubble = ({ currentPage, setCurrentPage, totalPages }) => {
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = isMobile ? 5 : 16;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let start = Math.max(1, currentPage - Math.floor(visibleCount / 2));
  let end = start + visibleCount - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - visibleCount + 1);
  }

  const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="w-full px-[6vw] mt-6 flex items-center gap-3 flex-wrap">
      <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-sm border 
            ${page === currentPage ? "bg-yellow-500 text-black" : "border-white text-white"}`}
        >
          {page}
        </button>
      ))}

      <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default AssessmentPage;
