
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './index.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase.from('jobs').select('*');
      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <h1>JobMatch - Browse Jobs</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.description}</p>
            <p><strong>Degree:</strong> {job.degree_requirements}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
