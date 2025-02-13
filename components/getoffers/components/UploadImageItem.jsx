import React from "react";

const UploadImageItem = ({ file, onDelete }) => {
  return (
    <div className={"rounded-sm overflow-hidden relative"}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"absolute right-4 top-4 z-20 cursor-pointer"}
        onClick={onDelete}
      >
        <rect width="32" height="32" rx="16" className={"fill-white"} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9961 8C14.7049 8 13.5585 8.82627 13.1501 10.0513L12.945 10.6666H11C10.4477 10.6666 10 11.1143 10 11.6666C10 12.2189 10.4477 12.6666 11 12.6666V23.1111C11 23.6633 11.4477 24.111 12 24.111H20.6672C21.2195 24.111 21.6672 23.6633 21.6672 23.111L21.6672 12.6666C22.2195 12.6666 22.6672 12.2189 22.6672 11.6666C22.6672 11.1143 22.2195 10.6666 21.6672 10.6666H19.7201L19.5149 10.0513C19.1066 8.82627 17.9602 8 16.6689 8H15.9961ZM17.6117 10.6666C17.4707 10.2677 17.0933 10 16.6689 10H15.9961C15.5718 10 15.1944 10.2677 15.0534 10.6666H17.6117ZM13 12.7777V22.1111H19.6672V12.7777H13Z"
          fill="#3B3E44"
        />
      </svg>

      <div
        className={"w-full h-full absolute top-0 left-0 bg-black/10 z-10"}
      ></div>
      <img
        width={200}
        height={150}
        className={"image-cover"}
        src={file.preview}
        alt={"Happy home"}
      />
    </div>
  );
};

export default UploadImageItem;
