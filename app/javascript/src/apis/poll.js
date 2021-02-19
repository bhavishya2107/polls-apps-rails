import axios from "axios";

const create = (payload) => axios.post("/polls", payload);
const getAllPolls = () => axios.get("/polls");

const pollsApi = {
  create,
  getAllPolls
};

export default pollsApi;
