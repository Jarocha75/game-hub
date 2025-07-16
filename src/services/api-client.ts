import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ee43c093255149deadc88c8e8f93d620",
  },
});
