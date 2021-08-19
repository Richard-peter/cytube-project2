import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCQ_EcTq_kAzNuvfGodB4I4RDHdlP26qeo",
  },
});

export default request;
// AIzaSyCQ_EcTq_kAzNuvfGodB4I4RDHdlP26qeo;
