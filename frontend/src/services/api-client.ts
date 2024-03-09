import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0669a44675fa4663b6641edc9ede2072",
  },
});
