import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ContextApi from "./ContextApi";

function JobDetails({jobApply}) {
  
  const {
    companyName,
    jobTitle,
    componyLogo,
    minPrice,
    maxPrice,
    salaryType,
    exprienceLevel,
    jobLocation,
    description,
    id,
  } = useParams();

  
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
        <div className="flex flex-col gap-3 border rounded  border-gray-200 py-10 px-4 lg:px-16">
          <h2 className="text-black font-bold"> Job Title : {jobTitle}</h2>
          <h3 className="text-black/50 font-bold">
            {" "}
            Compoany Name : {companyName}
          </h3>
          <h3 className="text-black/50 font-bold">
            {" "}
            Salary : {minPrice}k to {maxPrice}k
          </h3>
          <h3 className="text-black/50 font-bold">
            {" "}
            Salary Type : {salaryType}
          </h3>
          <h3 className="text-black/50 font-bold">
            {" "}
            Experience Level : {exprienceLevel}
          </h3>
          <h3 className="text-black/50 font-bold">
            {" "}
            Job Location : {jobLocation}
          </h3>
          <h3 className="text-black/50 font-bold">
            {" "}
            Description : {description}
          </h3>
        </div>
        <button className="block mt-12 bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" onClick={() => jobApply(id)}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
