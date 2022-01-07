import React from "react";

const InfoCard = ({ event }) => {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    links,
    launch_landing,
  } = event;
  console.log(event);
  return (
    <div className="p-5 rounded-md bg-white">
      <img
        className="bg-gray-100 rounded-sm"
        src={links.mission_patch_small}
        alt=""
      />
      <div>
        <h1>
          {mission_name}#{flight_number}
        </h1>
        <div>Mission Ids</div>
        <ul>
          {mission_id?.map((id) => (
            <li>{id}</li>
          ))}
        </ul>
      </div>
      <p>
        Launch Year: <span>{launch_year}</span>
      </p>
      <p>
        Successful Launch: <span>{launch_success ? "True" : "False"}</span>
      </p>
      <p>
        Successful Landing: <span>{launch_landing ? "True" : "False"}</span>
      </p>
    </div>
  );
};

export default InfoCard;
