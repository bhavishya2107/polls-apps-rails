import React, { useEffect, useState } from "react";
import pollsApi from "apis/poll";
import { useParams } from "react-router-dom";
import NavBar from "components/NavBar";

function Poll() {
  const [poll, setPoll] = useState({});
  const [options, setOptions] = useState([]);
  const { poll_id } = useParams();

  useEffect(() => {
    fetchCurrentPoll();
  }, []);

  const fetchCurrentPoll = async () => {
    try {
      const current_poll = await pollsApi.getSinglePoll(poll_id);
      setPoll(current_poll.data.poll);
      setOptions(current_poll.data.options)
      console.log(current_poll.data.poll);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar/>
      <h1 className="text-2xl text-center">{poll.question}</h1>

    </div>
  );
}

export default Poll;
