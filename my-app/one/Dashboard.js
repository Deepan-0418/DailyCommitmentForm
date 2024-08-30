import React from 'react';
import './Dashboard.css'; // Make sure this CSS file exists

function Dashboard() {
  return (
    <div className="Dashboard">
      <nav className="Sidebar">
        <ul>
          <li><a href="#vendor-reports">Vendor Reports</a></li>
          <li><a href="#project-reports">Project Reports</a></li>
          <li><a href="#file-status-reports">File Status Reports</a></li>
          <li><a href="#data-input">Daily Production Commitments</a></li>
        </ul>
      </nav>
      <main className="Main-content">
        {/* Render content based on selected report */}
      </main>
    </div>
  );
}

export default Dashboard;
