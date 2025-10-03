import React from "react";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col items-center">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 border-solid mb-6"></div> */}
      <img
        src="/loading/loadinglogo.gif" // <-- Replace with your GIF path
        alt="Loading..."
        className="h-16 w-16 object-contain"
      />
    </div>
  </div>
);

export default Loader;