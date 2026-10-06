import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Jobs() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const jobs = [
    {
      company: "TCS",
      role: "Software Developer",
      location: "Chennai",
      salary: "₹6 LPA",
    },
    {
      company: "Infosys",
      role: "React Developer",
      location: "Bangalore",
      salary: "₹7 LPA",
    },
    {
      company: "Wipro",
      role: "Frontend Developer",
      location: "Hyderabad",
      salary: "₹6.5 LPA",
    },
    {
      company: "Accenture",
      role: "Java Developer",
      location: "Chennai",
      salary: "₹7.5 LPA",
    },
    {
      company: "Cognizant",
      role: "UI Developer",
      location: "Pune",
      salary: "₹6 LPA",
    },
  ];

  let filteredJobs = jobs;

  if (search !== "") {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (location !== "All") {
    filteredJobs = filteredJobs.filter(
      (job) => job.location === location
    );
  }

  const handleApply = (job) => {
    alert(`Applied for ${job.role} at ${job.company}`);
    navigate("/applications");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main-content">

        <h1>Job Openings</h1>

        <p>Find the right placement opportunity for you.</p>

        <br />

        {/* Search */}
        <input
          type="text"
          placeholder="Search by company or role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Location */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
        </select>

        <br />
        <br />

        {/* Jobs */}
        {filteredJobs.map((job, index) => (
          <div className="section" key={index}>

            <h2>{job.company}</h2>

            <p>
              <strong>Position:</strong> {job.role}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>

            <br />

            <button onClick={() => handleApply(job)}>
              View & Apply
            </button>

          </div>
        ))}

        {/* No Jobs */}
        {filteredJobs.length === 0 && (
          <div className="section">
            <p>No jobs found.</p>
          </div>
        )}

      </main>

    </div>
  );
}

export default Jobs;