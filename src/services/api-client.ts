import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89c3ace92ce54599b03b86f14829e94a",
  },
});
