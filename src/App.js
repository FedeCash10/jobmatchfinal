import React, { useState } from 'react';
import './index.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query) return;
    setResults([
      { title: 'Security Analyst', company: 'CyberCorp', location: 'Remote' },
      { title: 'IT Compliance Associate', company: 'TrustStack', location: 'New York, NY' },
      { title: 'Jr. Cybersecurity Engineer', company: 'NetDefense', location: 'Austin, TX' }
    ]);
  };

  return (
    <div className="container">
      <h1>Job Matcher</h1>
      <input
        type="text"
        placeholder="Enter job or skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Find Jobs</button>
      <ul>
        {results.map((job, i) => (
          <li key={i}>
            <strong>{job.title}</strong><br />
            {job.company} – {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
