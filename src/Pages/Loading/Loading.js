import React from "react";

const Loading = () => {
  return (
    <div class="bg-white min-h-screen shadow rounded-md p-4">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-gray-400 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-gray-400 rounded"></div>
          <div class="min-h-screen flex flex-col justify-between">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-400 rounded col-span-2"></div>
              <div class="h-2 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
