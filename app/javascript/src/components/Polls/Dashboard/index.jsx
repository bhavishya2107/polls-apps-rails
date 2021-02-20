import React, { useEffect, useState } from "react";
import pollsApi from "apis/poll";
import { Link } from "react-router-dom";

function Dashboard() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getAllPolls();
  }, []);

  const getAllPolls = async () => {
    try {
      const all_polls = await pollsApi.getAllPolls();
      setPolls(all_polls.data.polls);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-md">
      <h1 className="text-4xl text-center">Polls</h1>
      <div className="text-2xl flex items-center justify-center px-4 py-6 lg:px-8 bg-gray-50 sm:px-6">
        <ul className="list-decimal">
          {polls.map((poll) => {
            return (
              <Link key={poll.id} to={`/polls/show/${poll.id}`}>
                <li>{poll.question}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
