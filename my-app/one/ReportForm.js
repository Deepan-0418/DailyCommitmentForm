import React, { useState } from 'react';
import './ReportForm.css';

function ReportForm() {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState('');
  
  const handleReportTypeChange = (e) => setReportType(e.target.value);
  const handleDateRangeChange = (e) => setDateRange(e.target.value);
  const handleGenerateReport = () => {
    // Add logic to generate report based on selected filters
    console.log(`Generating ${reportType} report from ${dateRange}`);
  };

  return (
    <div className="ReportForm">
      <h2>Generate Report</h2>
      <label>
        Report Type:
        <select value={reportType} onChange={handleReportTypeChange}>
          <option value="">Select Report Type</option>
          <option value="vendor">Vendor</option>
          <option value="project">Project</option>
          <option value="file-status">File Status</option>
        </select>
      </label>
      <label>
        Date Range:
        <input
          type="text"
          value={dateRange}
          onChange={handleDateRangeChange}
          placeholder="Enter date range"
        />
      </label>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
}

export default ReportForm;
