import React from "react";

const InfoCard = ({ incident }) => {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    links,
    launch_landing,
  } = incident;
  return (
    <div className="p-5 rounded-md bg-white">
      <img
        className="bg-gray-100 rounded-sm mx-auto"
        src={links.mission_patch_small}
        alt=""
      />
      <div>
        <h1 className="font-bold text-xl text-indigo-600 my-5">
          {mission_name}
          <span className="ml-2">#{flight_number}</span>
        </h1>
        <div className="font-bold text-lg">Mission Ids:</div>
        <ul className="list-disc pl-8 py-1">
          {mission_id.length > 0 ? (
            mission_id?.map((id) => <li className="text-indigo-600">{id}</li>)
          ) : (
            <li className="text-indigo-600">None</li>
          )}
        </ul>
      </div>
      <p className="font-bold my-1">
        Launch Year:{" "}
        <span className="text-gray-500 font-normal">{launch_year}</span>
      </p>
      <p className="font-bold my-1">
        Successful Launch:{" "}
        <span className="text-gray-500 font-normal">
          {launch_success ? "True" : "False"}
        </span>
      </p>
      <p className="font-bold my-1">
        Successful Landing:{" "}
        <span className="text-gray-500 font-normal">
          {launch_landing ? "True" : "False"}
        </span>
      </p>
    </div>
  );
};

export default InfoCard;
