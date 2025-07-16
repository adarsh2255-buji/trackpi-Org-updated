import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/courseContext";
import VideoThumbnail from "../assets/videothumbnail.png";
import { FaPlay, FaExpand } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const SectionVideos = () => {
  const { id } = useParams();
  const { courses, loading } = useContext(CourseContext);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  const allSections = courses.flatMap((course) => course.sections);
  const matchedSection = allSections.find((section) => section._id == id);

  if (!matchedSection) {
    return <p className="text-white">No section found</p>;
  }

  const { videos } = matchedSection;

  return (
    <div className="text-white flex flex-col lg:flex-row px-4 sm:px-6 lg:px-12 pt-0 gap-10">
      {/* Video List */}
      <div className="w-full lg:w-[374px] h-auto lg:h-[858px] flex flex-col gap-[30px] order-2 lg:order-none">
        {/* Header */}
        <div className="flex justify-between items-center w-full h-[33px]">
          <h2 className="text-[28px] font-bold font-['Roboto'] text-center leading-[100%]">
            Section Name
          </h2>
          <span className="text-[20px] font-semibold font-['Roboto'] leading-[100%]">
            2 / 10
          </span>
        </div>

        {/* Video List Items */}
        <div className="flex flex-col gap-[15px] pr-2">
          {videos.map((video, index) => (
            <div
              key={video._id || index}
              className="w-full lg:w-[374px] h-[120px] border border-gray-600 rounded-[15px] p-[15px] flex gap-[14px] hover:bg-gray-800"
            >
              {/* Thumbnail with Play Icon */}
              <div className="w-[150px] h-[90px] rounded-[8px] bg-[#AEAEAE] relative overflow-hidden">
                <img
                  src={VideoThumbnail}
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-[8px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[30px] h-[30px] text-white border bg-opacity-60 rounded-full flex items-center justify-center">
                    <FaPlay className="text-white text-[14px] ml-[2px]" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-[180px] h-[71px] flex flex-col justify-between gap-[10px]">
                <h3 className="text-[20px] font-semibold font-['Roboto'] leading-[100%]">
                  {video.title || "Untitled Video"}
                </h3>
                <p className="text-[16px] font-medium font-['Roboto'] leading-[100%]">
                  {video.description || "No description available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player */}
      <div className="w-full flex-1 flex flex-col items-end pr-0 lg:pr-4 order-1 lg:order-none">
        {/* Search bar */}
        <div className="w-full max-w-[350px] h-[44px] rounded-[15px] border border-[#676464] bg-[#8D8B8B1A] flex items-center px-[15px] gap-[15px] mb-3">
          <span className="text-[#B3B6B6] text-[20px]">
            <CiSearch />
          </span>
          <span className="text-[#B3B6B6] text-[16px] font-medium font-['Roboto']">
            Search...
          </span>
        </div>

        {/* Video Box */}
        <div className="rounded-xl px-0 py-0 flex flex-col gap-3 w-full max-w-[990px] mx-auto">
          <div className="w-full h-[330px] lg:h-[500px] bg-[#3A3A3A] rounded-[6.7px] relative flex flex-col justify-center items-center px-[20px] pt-[1px] pb-[15px] gap-[20px]">
            
            {/* Video Element */}
            <video
              src={videos[0]?.url}
              controls={false}
              muted
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover rounded-[6.7px]"
            />

            {/* Play Button Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-transparent text-white text-4xl cursor-pointer z-10"
              aria-label="Play"
            >
              <div className="w-[150px] h-[150px] flex items-center justify-center">
                <div className="w-[112.5px] h-[112.5px] border-[5px] border-white rounded-full flex items-center justify-center">
                  <FaPlay className="w-8 h-8 ml-1" />
                </div>
              </div>
            </button>

            {/* Timeline + Controls */}
            <div className="w-full flex flex-col gap-[5px] z-10 mt-auto">
              {/* Timeline */}
              <div className="w-full h-[29px] flex items-center gap-[10px]">
                <span className="w-[40px] text-[16px] font-medium font-['Urbanist'] text-white">
                  00:40
                </span>
                <div className="flex-1 h-[6px] bg-white rounded">
                  <div className="h-full w-[33%] bg-orange-500 rounded" />
                </div>
                <span className="w-[40px] text-[16px] font-medium font-['Urbanist'] text-white text-right">
                  02:00
                </span>
              </div>

              {/* Controls */}
              <div className="w-full flex justify-between items-center">
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <MdOutlineReplay className="w-[22.5px] h-[22.5px]" />
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <FaExpand className="w-[22.5px] h-[22.5px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-left w-full text-white px-2 ">
            <h3 className="text-[30px] font-semibold font-['Roboto'] leading-[100%]">
              {videos[0]?.title || "Introduction Video"}
            </h3>
            <p className="text-[22px] font-medium font-['Roboto'] leading-[100%] mt-2">
              {videos[0]?.description || "Introduction Video for the section of course"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
