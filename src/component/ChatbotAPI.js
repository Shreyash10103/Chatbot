import axios from "axios";

const API = {
  GetChatbotResponse: async () => {
    return await axios.get('http://18.223.164.31/');
  },
  PostUserMessage: async (message) => {
    return await axios.post('http://18.223.164.31/generate_response', { query: message });
  }
};

export default API;
