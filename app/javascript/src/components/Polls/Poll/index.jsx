import React, { useEffect, useState } from "react";
import pollsApi from "apis/poll";
import { useParams } from "react-router-dom";
import votesApi from "apis/vote";

function Poll() {
  const [poll, setPoll] = useState(null);
  const [options, setOptions] = useState([]);
  const { poll_id } = useParams();
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCurrentPoll();
  }, []);

  const fetchCurrentPoll = async () => {
    try {
      const current_poll = await pollsApi.getSinglePoll(poll_id);
      setPoll(current_poll.data.poll);
      setOptions(current_poll.data.options);
      console.log(current_poll.data.options);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };

  const handleVote = async (option_id) => {
    try {
      const vote = await votesApi.create({ vote: { poll_id, option_id } });
      fetchCurrentPoll();
      // console.log(vote.data);
      setMessage(vote.data.notice);
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center">
        <div className="w-full max-w-2xl border border-gray-300 rounded-md mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <p className="text-2xl font-bold">{poll && poll.question}</p>
            {options.map((option) => {
              return (
                <label
                  key={option.id}
                  className="block mt-4 border border-gray-300 hover:border-blue-500 rounded-lg py-2 px-6 text-lg"
                  onClick={() => handleVote(option.id)}
                >
                  {option.name}
                  <span className="px-12 text-purple-600">
                    Votes- {option.vote_count}
                  </span>
                </label>
              );
            })}
            {message ? (
              <p className="text-xl text-red-500 text-center mt-3">{message + " 🙌"}</p>
            ) : null}
            {errors ? (
              <p className="text-xl text-red-500 text-center mt-3">
                {errors[0] + " ☠️"}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
