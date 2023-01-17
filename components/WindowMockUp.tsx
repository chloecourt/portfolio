import React from "react";

export const WindowMockUp = () => {
  return (
    <div className="max-w-2xl transition-colors ease-linear shadow-md">
      <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
        <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
        <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
        <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
      </div>
      {/* <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-96 rounded-b-lg"> */}
      <iframe
        className="border-t-0 w-full h-96 rounded-b-lg"
        src="http://boost-excel.s3-website-us-east-1.amazonaws.com/"
        width="650"
      />
      {/* </div> */}
    </div>
  );
};
