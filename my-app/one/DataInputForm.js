import React, { useState } from 'react';
import './DataInputForm.css';

function DataInputForm() {
  const [vendor, setVendor] = useState('');
  const [project, setProject] = useState('');
  const [commitment, setCommitment] = useState('');
  
  const handleVendorChange = (e) => setVendor(e.target.value);
  const handleProjectChange = (e) => setProject(e.target.value);
  const handleCommitmentChange = (e) => setCommitment(e.target.value);
  const handleSubmit = () => {
    // Add logic to submit data
    console.log(`Submitting commitment for ${vendor} on ${project}: ${commitment}`);
  };

  return (
    <div className="DataInputForm">
      <h2>Daily Production Commitments</h2>
      <label>
        Vendor:
        <input
          type="text"
          value={vendor}
          onChange={handleVendorChange}
          placeholder="Enter vendor name"
        />
      </label>
      <label>
        Project:
        <input
          type="text"
          value={project}
          onChange={handleProjectChange}
          placeholder="Enter project name"
        />
      </label>
      <label>
        Commitment:
        <input
          type="number"
          value={commitment}
          onChange={handleCommitmentChange}
          placeholder="Enter commitment amount"
        />
      </label>
      <button onClick={handleSubmit}>Submit Commitment</button>
    </div>
  );
}

export default DataInputForm;
