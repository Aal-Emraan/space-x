import React from "react";

const LaunchAndLandFilter = (props) => {
  //   const { setLaunchSuccess, setLandSuccess } = props;
  const { handleLaunchSuccess, handleLandingSuccess } = props;
  console.log(props);

  return (
    <div>
      <div>
        <p className="border-b border-b-gray-400 mt-5 text-center font-semibold">
          Succesfull Launch
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <button
            onClick={() => handleLaunchSuccess("true")}
            className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
          >
            True
          </button>
          <button
            onClick={() => handleLaunchSuccess("false")}
            className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
          >
            False
          </button>
        </div>
      </div>
      <div>
        <p className="border-b border-b-gray-400 mt-5 text-center font-semibold">
          Succesfull Landing
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <button
            onClick={() => handleLandingSuccess("true")}
            className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
          >
            True
          </button>
          <button
            onClick={() => handleLandingSuccess("false")}
            className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchAndLandFilter;
