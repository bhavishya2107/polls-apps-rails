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
    <div className="container-md flex items-center justify-center ">
      <div className="text-2xl px-4 py-6 lg:px-8 bg-gray-50 sm:px-6">
        <h1 className="text-4xl text-center">Polls</h1>
        {polls.length ? (
          <ul className="list-decimal">
            {polls.map((poll) => {
              return (
                <Link key={poll.id} to={`/polls/show/${poll.id}`}>
                  <li className="block mt-4 border border-gray-500 hover:border-blue-500 rounded-lg py-2 px-6 text-lg">
                    {poll.question}
                  </li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <h1 className="text-2xl text-center mt-4">
            No Polls, Please <Link to="/create" className="text-blue-700 text-opacity-75">create</Link> a poll.
          </h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
