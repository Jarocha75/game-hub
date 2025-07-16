import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "43b5bed2fde44b54b6293554029ff035",
  },
});
