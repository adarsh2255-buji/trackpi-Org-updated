import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/courseContext";

const SectionVideos = () => {
  const { id } = useParams();
  const { courses, loading } = useContext(CourseContext);
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  const allSections = courses.flatMap((course) => course.sections);
  // console.log("URL param ID:", id);
  // console.log(
  //   "All Sections:",
  //   allSections.map((sec) => sec._id)
  // );
  const matchedSection = allSections.find((section) => section._id == id);
  // const videoList = matchedSection.videos.map((video) => video.url);
  // console.log(videoList);

  if (!matchedSection) {
    return <p className="text-white">No section found</p>;
  }

  const { videos } = matchedSection;

  return (
    <div className="flex px-12 pt-[110px] gap-10">
      {/* Left Video List Panel */}
      <div className="w-[374px] h-[858px] flex flex-col gap-[30px]">
        {/* Header */}
        <div className="flex justify-between items-center w-[374px] h-[33px]">
          <h2 className="text-white text-[28px] font-bold font-['Roboto'] text-center leading-[100%]">
            {matchedSection.title}
          </h2>
          <span className="text-white text-[20px] font-semibold font-['Roboto'] text-center leading-[100%]">
            {selectedVideo
              ? `${videos.indexOf(selectedVideo) + 1} / ${videos.length}`
              : `0 / ${videos.length}`}
          </span>
        </div>

        {/* Videos List */}
        <div className="flex flex-col gap-[15px] overflow-y-auto h-[795px] pr-2">
          {videos.map((video, index) => (
            <div
              key={video._id}
              className="w-[374px] h-[120px] border border-gray-600 rounded-[15px] p-[15px] flex gap-[14px] cursor-pointer hover:bg-gray-800"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="w-[150px] h-[90px] rounded-[8px] bg-[#AEAEAE] flex items-center justify-center text-black text-sm font-bold">
                Thumbnail
              </div>

              {/* Text Content */}
              <div className="w-[180px] h-[71px] flex flex-col justify-between gap-[10px]">
                <h3 className="text-white text-[20px] font-semibold font-['Roboto'] leading-[100%]">
                  {video.title || `Video ${index + 1}`}
                </h3>
                <p className="text-white text-[16px] font-medium font-['Roboto'] leading-[100%]">
                  {video.description ||
                    "Introduction Video for the section of course"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Video Section */}
      <div className="flex-1 flex flex-col items-end pr-4">
        {/* Search Bar */}
        <div className="w-[369px] h-[44px] rounded-[15px] border border-[#676464] bg-[#8D8B8B1A] flex items-center px-[15px] gap-[15px] mb-4">
          <span className="text-[#B3B6B6] text-[20px]">Icon</span>
          <span className="text-[#B3B6B6] text-[16px] font-medium font-['Roboto'] leading-[100%]">
            Search...
          </span>
        </div>

        {/* Video Box */}
        <div className="w-[980px] h-[741px] rounded-[20px] flex flex-col justify-between p-[20px]">
          {/* Video Area */}
          <div className="w-full h-[650px] bg-[#3A3A3A] rounded-[20px] flex items-center justify-center relative">
            {selectedVideo ? (
              <video
                src={selectedVideo.url}
                controls
                className="w-full h-full rounded-[20px] object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-white">
                <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full border-4 border-white">
                  {/* play icon will be add later */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[60px] h-[60px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 8l6 4-6 4V8z"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Custom Duration Bar */}
            <div className="absolute bottom-0 w-full px-[20px] py-[5px]">
              {/* Progress Bar */}
              <div className="w-full h-[4px] bg-white rounded-full mb-5 relative">
                <div
                  className="absolute top-0 left-0 h-[4px] bg-orange-500 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="w-full flex justify-between items-center mb-2 text-white text-[16px] font-medium font-['Urbanist']">
                <div className="flex items-center gap-2">
                  {/* Replay Icon */}
                  <div className="w-[30px] h-[30px] flex items-center justify-center border-2 border-white rounded-full">
                    <span className="text-sm">Replay</span>
                  </div>
                  <span>00:40</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>02:00</span>
                  {/* Fullscreen Icon */}
                  <div className="w-[30px] h-[30px] flex items-center justify-center border-2 border-white rounded-full">
                    <span className="text-sm">FS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Description */}
          {selectedVideo && (
            <div className="mt-4 text-white">
              <h3 className="text-[22px] font-semibold font-['Roboto']">
                Introduction Video
              </h3>
              <p className="text-[16px] font-medium font-['Roboto'] text-[#DDDDDD]">
                Introduction Video for the section of course
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
