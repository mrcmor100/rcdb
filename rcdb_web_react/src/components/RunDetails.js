// src/components/RunDetails.js
import React, { useState, useEffect } from 'react';
import { getRun } from '../services/api';
import { useParams } from 'react-router-dom';

function RunDetails() {
  const { id } = useParams();
  const [run, setRun] = useState(null);

  useEffect(() => {
    fetchRun();
  }, []);

  const fetchRun = async () => {
    const data = await getRun(id);
    setRun(data);
  };

  if (!run) return <div>Loading...</div>;

  return (
    <div>
      <h2>Run {run.number}</h2>
      {/* Display run details */}
    </div>
  );
}

export default RunDetails;
