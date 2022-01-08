import React, { useEffect, useState } from "react";
import InfoCard from "../../InfoCard/InfoCard";
// import "./MainComponent.css";

const MainComponent = () => {
  const [allEvents, setAllEvents] = useState();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      // fetch("../../../fakeData/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  const [filtaredEvents, setFilteredEvents] = useState();

  // const [year, setYear] = useState();
  // const [launchSuccess, setLaunchSuccess] = useState();
  // const [landingSuccess, setLandingSuccess] = useState();

  const handleOnClick = (year) => {
    const yearFilter = allEvents?.filter((num) => num.launch_year == year);
    setFilteredEvents(yearFilter);
  };

  const handleLaunchSuccess = (success) => {
    // setLaunchSuccess(success);
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${success}`
    )
      .then((res) => res.json())
      .then((data) => setFilteredEvents(data));
  };

  const handleLandingSuccess = (success) => {
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${success}`
    )
      .then((res) => res.json())
      .then((data) => setFilteredEvents(data));
  };

  return (
    <main>
      <div
        id="main-div"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
      >
        <div className="md:col-span-1 bg-white p-10 rounded-lg self-start">
          <h1 className="text-2xl font-bold mb-2">Filters</h1>
          <p className="border-b font-semibold border-b-gray-300 text-center">
            Launch Year
          </p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <button
              onClick={() => handleOnClick("2006")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center "
            >
              2006
            </button>
            <button
              onClick={() => handleOnClick("2007")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2007
            </button>
            <button
              onClick={() => handleOnClick("2008")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2008
            </button>
            <button
              onClick={() => handleOnClick("2009")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2009
            </button>
            <button
              onClick={() => handleOnClick("2010")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2010
            </button>
            <button
              onClick={() => handleOnClick("2011")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2011
            </button>
            <button
              onClick={() => handleOnClick("2012")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2012
            </button>
            <button
              onClick={() => handleOnClick("2013")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2013
            </button>
            <button
              onClick={() => handleOnClick("2014")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2014
            </button>
            <button
              onClick={() => handleOnClick("2015")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2015
            </button>
            <button
              onClick={() => handleOnClick("2016")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2016
            </button>
            <button
              onClick={() => handleOnClick("2017")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2017
            </button>
            <button
              onClick={() => handleOnClick("2018")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2018
            </button>
            <button
              onClick={() => handleOnClick("2019")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2019
            </button>
            <button
              onClick={() => handleOnClick("2020")}
              className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
            >
              2020
            </button>
          </div>
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
        <div className="md:col-span-2 lg:col-span-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtaredEvents?.length > 0 ? (
              filtaredEvents?.map((incident) => (
                <InfoCard key={incident.flight_number} incident={incident} />
              ))
            ) : (
              <p className="min-h-screen flex justify-center items-center text-4xl bg-white col-span-4">
                <span>No Events</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
