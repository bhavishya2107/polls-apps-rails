import React, { useEffect, useState } from "react";
import pollsApi from "apis/poll";

function Dashboard() {
  const [polls, setPolls] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getAllPolls();
  }, []);

  const getAllPolls = async () => {
    try {
      const all_polls = await pollsApi.getAllPolls();
      setPolls(all_polls);
      console.log(all_polls.data, "all the polls ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* {polls} */}
      <h1>Hello this is Dashboard</h1>
    </div>
  );
}

export default Dashboard;
