import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import ContextApi from "./ContextApi";

// fullName, mobileNumber, jobProfile, noticePeriod, description, resumeLink
function UpdateProfie({makeProfile}) {
//   const { makeProfile } = useContext(ContextApi);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, SetMobileNumber] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [description, setDescription] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  return (
    <div>
      <Navbar />
      <div>
        <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4 ">
          <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
            {/* 1st row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Full Name</label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder="Enter Value here..."
                  className="create-job-input"
                  // onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Mobile Number</label>
                <input
                  onChange={(e) => SetMobileNumber(e.target.value)}
                  type="text"
                  placeholder="Enter Number here..."
                  className="create-job-input"
                  // onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>

            {/* 2nd row */}

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Profile</label>
                <input
                  onChange={(e) => setJobProfile(e.target.value)}
                  type="text"
                  placeholder="Enter Value here..."
                  className="create-job-input"
                  // onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Notice Period</label>
                <select
                  onChange={(e) => setNoticePeriod(e.target.value)}
                  className="create-job-input"
                >
                  <option value="Immdiate">Immdiate</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Month">2 Month</option>
                </select>
              </div>
            </div>

            {/* 3rd  */}

            <div className="lg:w-full w-full">
              <label className="block mb-2 text-lg">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter Value here..."
                className="create-job-input"
                // onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            {/* 4th */}
            <div className="lg:w-full w-full">
              <label className="block mb-2 text-lg">Resume Link</label>
              <input
                onChange={(e) => setResumeLink(e.target.value)}
                type="text"
                placeholder="Enter Value here..."
                className="create-job-input"
                // onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
           
    

            <button className="block mt-12 bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" onClick={() => makeProfile(fullName, mobileNumber, jobProfile, noticePeriod, description, resumeLink ) }>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfie;
