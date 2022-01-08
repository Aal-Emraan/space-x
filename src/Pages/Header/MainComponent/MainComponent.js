import React, { useEffect, useState } from "react";
import FilterYear from "../../FilterYear/FilterYear";
import InfoCard from "../../InfoCard/InfoCard";
import LaunchAndLandFilter from "../../LaunchAndLandFilter/LaunchAndLandFilter";
import Loading from "../../Loading/Loading";
// import "./MainComponent.css";

const MainComponent = () => {
  const [allEvents, setAllEvents] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      // fetch("../../../fakeData/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
        setFilteredEvents(data);
        setLoading(false);
      });
  }, []);

  const [filtaredEvents, setFilteredEvents] = useState();

  const handleOnClick = (year) => {
    const yearFilter = allEvents?.filter((num) => num.launch_year == year);
    setFilteredEvents(yearFilter);
  };

  const handleLaunchSuccess = (launchSuccess) => {
    setLoading(true);
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredEvents(data);
        setLoading(false);
      });
  };

  const handleLandingSuccess = (landSuccess) => {
    setLoading(true);
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${landSuccess}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredEvents(data);
        setLoading(false);
      });
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
          <FilterYear handleOnClick={handleOnClick} />
          <LaunchAndLandFilter
            handleLaunchSuccess={handleLaunchSuccess}
            handleLandingSuccess={handleLandingSuccess}
          />
        </div>
        <div className="md:col-span-2 lg:col-span-4 rounded-lg">
          {loading ? (
            <Loading />
          ) : (
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
          )}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
