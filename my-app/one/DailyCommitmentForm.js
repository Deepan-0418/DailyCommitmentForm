import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './DailyCommitmentForm.css'; // Import the CSS file

const DailyCommitmentForm = () => {
  const [date, setDate] = useState('');
  const [vendorId, setVendorId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [commitment, setCommitment] = useState('');
  const [error, setError] = useState('');
  const [commitments, setCommitments] = useState([]); // State to hold all commitments

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!date || !vendorId || !projectId || !commitment) {
      setError('All fields are required.');
      return;
    }

    // Construct the data to be added
    const newCommitment = {
      date,
      vendorId,
      projectId,
      commitment,
    };

    // Add new commitment to the list
    setCommitments([...commitments, newCommitment]);

    // Clear the form
    setDate('');
    setVendorId('');
    setProjectId('');
    setCommitment('');
    setError('');

    // Generate and download the Excel report with all commitments
    generateExcelReport([...commitments, newCommitment]);
  };

  const generateExcelReport = (data) => {
    // Create a worksheet and workbook
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Commitment Report');

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, 'Daily_Commitment_Report.xlsx');
  };

  return (
    <div className="container">
      <h2>Daily Production Commitment</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Vendor ID:</label>
          <input
            type="text"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
          />
        </div>
        <div>
          <label>Project ID:</label>
          <input
            type="text"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </div>
        <div>
          <label>Commitment:</label>
          <input
            type="number"
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DailyCommitmentForm;
