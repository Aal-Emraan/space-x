import React, { useEffect, useState } from "react";

const MainComponent = () => {
  const [allEvents, setAllEvents] = useState();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, []);

  console.log(allEvents);
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-1 bg-white p-10 rounded-lg">
          <h1>Filters</h1>
          <p className="border-b border-b-gray-400 text-center">Launch Year</p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <span className="bg-green-400 p-1 rounded text-center">2006</span>
            <span className="bg-green-400 p-1 rounded text-center">2007</span>
            <span className="bg-green-400 p-1 rounded text-center">2008</span>
            <span className="bg-green-400 p-1 rounded text-center">2009</span>
            <span className="bg-green-400 p-1 rounded text-center">2010</span>
            <span className="bg-green-400 p-1 rounded text-center">2011</span>
            <span className="bg-green-400 p-1 rounded text-center">2012</span>
            <span className="bg-green-400 p-1 rounded text-center">2013</span>
            <span className="bg-green-400 p-1 rounded text-center">2014</span>
            <span className="bg-green-400 p-1 rounded text-center">2015</span>
            <span className="bg-green-400 p-1 rounded text-center">2016</span>
            <span className="bg-green-400 p-1 rounded text-center">2017</span>
            <span className="bg-green-400 p-1 rounded text-center">2018</span>
            <span className="bg-green-400 p-1 rounded text-center">2019</span>
            <span className="bg-green-400 p-1 rounded text-center">2020</span>
          </div>
          <div>
            <p className="border-b border-b-gray-400 mt-5 text-center">
              Succesfull Launch
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <span className="bg-green-400 p-1 rounded text-center">True</span>
              <span className="bg-green-400 p-1 rounded text-center">
                False
              </span>
            </div>
          </div>
          <div>
            <p className="border-b border-b-gray-400 mt-5 text-center">
              Succesfull Landing
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <span className="bg-green-400 p-1 rounded text-center">True</span>
              <span className="bg-green-400 p-1 rounded text-center">
                False
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 bg-white p-10 rounded-lg"></div>
      </div>
    </main>
  );
};

export default MainComponent;
