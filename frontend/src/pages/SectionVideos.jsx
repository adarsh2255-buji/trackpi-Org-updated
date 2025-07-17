// Refactored Video Section Component with Auth Header + Backend Sync
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CourseContext } from "../context/courseContext";
import { AuthContext } from "../context/authContext";
import VideoThumbnail from "../assets/videothumbnail.png";
import { FaPlay } from "react-icons/fa";
import axios from "axios";

const SectionVideos = () => {
  const { id: sectionId } = useParams();
  const { courses, loading } = useContext(CourseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [unlockedVideos, setUnlockedVideos] = useState([]);
  const [showNextPopup, setShowNextPopup] = useState(false);
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  useEffect(() => {
    if (loading || !courses?.length || !user?.token) return;

    const allSections = courses.flatMap(course =>
      course.sections.map(sec => ({ ...sec, courseId: course._id }))
    );
    const matched = allSections.find(section => section._id === sectionId);

    if (!matched?.videos?.length) return;

    const fetchProgress = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/progress/${matched.courseId}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        const { watchedVideos, lastWatched } = res.data;
        const unlockedIds = watchedVideos.map(id => id.toString());

        if (!unlockedIds.includes(matched.videos[0]._id)) {
          unlockedIds.push(matched.videos[0]._id);
        }

        setUnlockedVideos(unlockedIds);

        const last = lastWatched?.videoId;
        const selected = matched.videos.find(v => v._id === last) || matched.videos[0];
        setSelectedVideo(selected);
      } catch (err) {
        console.error("Failed to fetch progress", err);
        setUnlockedVideos([matched.videos[0]._id]);
        setSelectedVideo(matched.videos[0]);
      }
    };

    fetchProgress();
  }, [courses, loading, sectionId, user]);

  if (loading) return <p className="text-white">Loading...</p>;

  const allSections = courses.flatMap(course =>
    course.sections.map(sec => ({ ...sec, courseId: course._id }))
  );
  const matchedSection = allSections.find(section => section._id === sectionId);

  if (!matchedSection) return <p className="text-white">No section found</p>;

  const { videos, courseId } = matchedSection;

  const playNext = async () => {
    const currentIndex = videos.findIndex(v => v._id === selectedVideo._id);
    const nextVideo = videos[currentIndex + 1];

    try {
      await axios.post(
        "http://localhost:5000/api/progress/watch",
        {
          courseId,
          sectionId,
          videoId: selectedVideo._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (nextVideo) {
        setUnlockedVideos(prev => [...prev, nextVideo._id]);
        setSelectedVideo(nextVideo);
      } else {
        setShowAssessmentPopup(true);
      }
      setShowNextPopup(false);
    } catch (err) {
      console.error("Failed to update progress", err);
    }
  };

  const restartSection = () => {
    setSelectedVideo(videos[0]);
    setShowAssessmentPopup(false);
    setUnlockedVideos([videos[0]._id]);
  };

  // hanlde unlock assessment
  const handleUnlockAssessment = async () => {
    try {
      // Save all unlocked videos to backend
      await Promise.all(
        unlockedVideos.map(videoId =>
          axios.post(
            "http://localhost:5000/api/progress/watch",
            { courseId, sectionId, videoId },
            {
              headers: { Authorization: `Bearer ${user.token}` },
            }
          )
        )
      );
  
      // Navigate to assessment
      navigate(`/course-section/${courseId}`);
    } catch (error) {
      console.error("Failed to save progress for all videos", error);
    }
  };
  


  return (
    <div className="text-white px-4 sm:px-6 lg:px-12">
      {/* Search */}
      <div className="flex justify-center px-5 sm:justify-end mb-5">
        <div className="relative w-full sm:w-[368px]">
          <i className="fa fa-search text-[#B3B6B6] text-[18px] absolute left-3 top-1/2 transform -translate-y-1/2"></i>
          <input
            type="search"
            placeholder="Search..."
            className="rounded-[15px] w-full pl-10 py-1.5 text-3 font-medium bg-transparent text-white roboto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Video List */}
        <div className="w-full lg:w-[374px] flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex justify-between items-center">
            <h2 className="text-[28px] font-bold">Section Videos</h2>
            <span className="text-[20px] font-semibold">
              {videos.findIndex(v => v._id === selectedVideo?._id) + 1} / {videos.length}
            </span>
          </div>
          <div className="flex flex-col gap-4 pr-2">
            {videos.map((video, index) => (
              <div
                key={video._id || index}
                onClick={() => unlockedVideos.includes(video._id) && setSelectedVideo(video)}
                className={`cursor-pointer p-4 border rounded-lg flex gap-4 ${
                  unlockedVideos.includes(video._id) ? "hover:bg-gray-800" : "opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="w-[150px] h-[90px] rounded bg-[#AEAEAE] relative overflow-hidden">
                  <img src={VideoThumbnail} alt="Thumbnail" className="w-full h-full object-cover rounded" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[30px] h-[30px] text-white bg-opacity-60 rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-sm ml-[2px]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 order-1 lg:order-2 relative">
          <video
            src={selectedVideo?.url}
            controls
            className="rounded w-full"
            onEnded={() => {
              const currentIndex = videos.findIndex(v => v._id === selectedVideo._id);
              if (currentIndex === videos.length - 1) {
                setShowAssessmentPopup(true);
              } else {
                setShowNextPopup(true);
              }
            }}
          ></video>
          <h3 className="font-semibold text-lg mt-4">{selectedVideo?.title}</h3>
          <p className="text-sm">{selectedVideo?.desc}</p>

          {/* Popup: Next video */}
          {showNextPopup && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 p-6 rounded-lg text-center w-[90%] max-w-md">
              <p className="mb-4">Would you like to continue to the next video or watch this one once more?</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setShowNextPopup(false)} className="px-6 py-2 border rounded-full">
                  Play Again
                </button>
                <button onClick={playNext} className="px-6 py-2 border bg-[#FF9D00] text-white rounded-full">
                  Play Next
                </button>
              </div>
            </div>
          )}

          {/* Popup: Assessment */}
          {showAssessmentPopup && (
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 p-6 rounded-lg text-center w-[90%] max-w-md">
              <p className="mb-4">Ready to take the assessment or review the section?</p>
              <div className="flex justify-center gap-4">
                <button onClick={restartSection} className="px-6 py-2 border rounded-full">
                  Watch Again
                </button>
                <button
                  onClick={handleUnlockAssessment}
                  className="px-6 py-2 border bg-[#FF9D00] text-white rounded-full"
                >
                  Unlock Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
