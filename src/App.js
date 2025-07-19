import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    const { data, error } = await supabase.from('jobs').select('*')
    if (error) {
      console.error('Error fetching jobs:', error)
    } else {
      setJobs(data)
    }
  }

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎯 Job Matches Just for You</h1>
      <p>Let’s get you into your next opportunity 🚀</p>
      <div style={{ marginTop: '2rem' }}>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Degree Required:</strong> {job.degree_required || 'None'}</p>
              <p><strong>Experience:</strong> {job.experience || 'No experience required'}</p>
            </div>
          ))
        ) : (
          <p>No jobs yet... hang tight!</p>
        )}
      </div>
    </div>
  )
}

export default App
