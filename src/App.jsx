import { useState } from "react";
import "./App.css";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import ContextApi from "../../recruiter/src/ContextApi"; // Corrected import path
import Login from "../../recruiter/src/Component/Login";
import Home from "../../recruiter/src/Component/Home";
import Register from "../../recruiter/src/Component/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashbord from "./component/Dashbord";
import JobDetails from "./component/JobDetails";
import UpdateProfie from "./component/UpdateProfie";

function App() {
  const nevigate = useNavigate();
  const [user, setUser] = useState("");
  const [showJobDetails, setShowJobDetails] = useState(false);

  const register = (name, email, password) => {
    if (!name || !email || !password) {
      return toast.error("Please Fill Details");
    }
    // Register function
    fetch("https://jobconnect-server.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Successfully created account! please Login");
          nevigate("/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const login = (email, password) => {
    if (!email || !password) {
      return toast.error("Please Fill Details");
    }
    // Login function
    fetch("https://jobconnect-server.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
            setUser(data);
          nevigate("/dashbord");
        }
        
      })
      .catch((err) => toast.error(err.message));
  };

  const makeProfile = (
    fullName,
    mobileNumber,
    jobProfile,
    noticePeriod,
    description,
    resumeLink
  ) => {
    if (!fullName || !mobileNumber || !jobProfile || !noticePeriod || !description || !resumeLink) {
      return toast.error("Please Fill Details");
    }

    fetch("https://jobconnect-server.onrender.com/job/update-profile", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization" : user.token
      },
      body: JSON.stringify({ fullName,
        mobileNumber,
        jobProfile,
        noticePeriod,
        description,
        resumeLink }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Updated Profile Successfully");
          nevigate("/dashbord");
        }

      })
      .catch((err) => toast.error(err.message));
  };

  const jobApply = (_id) => {
    if (!_id) {
      return toast.error("Please Login Again");
    }

    fetch(`https://jobconnect-server.onrender.com/job/apply-job/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error("applied already");
        } else {
          nevigate("/dashbord");
          toast.success("Applied Successfully")
        }
        
      })
      .catch((err) => toast.error(err.message));
  }

  return (
    <>
      <ContextApi.Provider value={{ login, register, user, }}>
        <ToastContainer />
        
        
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/job-details/:jobTitle/:companyName/:maxPrice/:minPrice/:salaryType/:exprienceLevel/:description/:id"
            element={<JobDetails jobApply={jobApply} />}
          />
          <Route path="/update-profile" element={<UpdateProfie makeProfile={makeProfile} />} />
        </Routes>
      </ContextApi.Provider>
    </>
  );
}

export default App;
