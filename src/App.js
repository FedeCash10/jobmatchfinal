import React, { useEffect, useState } from "react";
import supabase from "./supabaseClient";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase.from("jobmatch").select("*");
      if (error) {
        console.error("Error fetching jobs:", error.message);
      } else {
        setJobs(data);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>JobMatch</h1>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> at {job.company} — {job.location}
              <br />
              <small>{job.degree_requirements} | {job.experience}</small>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;