import axios from "axios";

const BASE_URL = "https://internship-service.onrender.com/videos?page=";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);

  return data;
};
