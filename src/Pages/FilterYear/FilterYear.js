import React from "react";

const FilterYear = ({ handleOnClick }) => {
  return (
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
      <button
        onClick={() => handleOnClick("all")}
        className="bg-lime-300 focus:bg-lime-500 hover:bg-lime-400 font-semibold p-1 rounded text-center"
      >
        All
      </button>
    </div>
  );
};

export default FilterYear;
