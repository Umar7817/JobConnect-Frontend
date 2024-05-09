import React, { useEffect, useState, useContext } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Jobs from "./Jobs";
import Sidebar from "./Sidebar";
import Newslatter from "./Newslatter";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./ContextApi";
import Navbar from "./Navbar";

function Dashbord() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

   // handle input changes
   const [query, setQuery] = useState("");
   const handleInput = (event) => {
     setQuery(event.target.value);
   };
 
   // fetching data from backend
   useEffect(() => {
     setIsLoading(true);
     fetch("https://jobconnect-server.onrender.com/job/get-all-jobs")
       .then((res) => res.json())
       .then((data) => {
         setJobs(data);
         setIsLoading(false);
       });
   }, []);

    // filter by job title
  const filterData = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filtering

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

   // button based filtering

   const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // calculate  the index

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  };

   // next page

   const nextPage = () => {
    if (currentPage < Math.ceil(filterData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // previours page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main funtion

  const filterdData = (jobs, selectedCategory, query) => {
    let filteredJobs = jobs;

    // filtering input items
    if (query) {
      filteredJobs = filterData;
    }

    // category filtering

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, exprienceLevel }) =>
          jobLocation.toLowerCase() == selectedCategory.toLowerCase() ||
          maxPrice == selectedCategory
      );
      
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs
    .filter(data => data.isApproved) // Filter out items where isApproved is false
    .map((data, i) => <Card key={i} data={data} />);
  ;
  };

  const result = filterdData(jobs, selectedCategory, query);
  return (
    <div>
        <div>
      
      <ToastContainer />
      <Navbar/>
      <Banner query={query} handleInput={handleInput} />
      

      {/* main Content */}
      <div className="bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* jobs */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>{" "}
              <p>No Data Found</p>
            </>
          )}

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={previousPage}>Previous</button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filterData.length / itemsPerPage)}
              </span>
              <button onClick={nextPage}>Next</button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <Newslatter />
        </div>
      </div>
    
  </div>
    </div>
  )
}

export default Dashbord