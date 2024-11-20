// src/components/RunList.js
import React, { useState, useEffect } from 'react';
import { getRuns } from '../services/api';
import RunItem from './RunItem';

function RunList() {
  const [runs, setRuns] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchRuns();
  }, [filters]);

  const fetchRuns = async () => {
    const data = await getRuns(filters);
    setRuns(data);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Filters onChange={handleFilterChange} />
      <table>
        {/* Table headers */}
        <tbody>
          {runs.map(run => (
            <RunItem key={run.id} run={run} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RunList;
