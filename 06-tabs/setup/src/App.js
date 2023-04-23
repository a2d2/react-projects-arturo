import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  //current item
  const fecthJobs = async () => {
    const response = await fetch(url);
    const newJobs = response.json();
    setJobs(newJobs);
    setisLoading(false);
  };

  useEffect(() => {
    fecthJobs();
  }, []);
  console.log(jobs);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className='"Loading'></div>
      </section>
    );
  }
  return <h2>Tabs Starter</h2>;
}

export default App;
