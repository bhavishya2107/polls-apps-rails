import axios from "axios";

const create = (payload) => axios.post("/polls", payload);
const getAllPolls = () => axios.get("/polls");
const getSinglePoll = (id) => axios.get(`/polls/${id}`)

const pollsApi = {
  create,
  getAllPolls,
  getSinglePoll
};

export default pollsApi;
