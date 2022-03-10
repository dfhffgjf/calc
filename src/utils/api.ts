import axios from "axios";
import config from "@config";

const instance = axios.create({
    baseURL: config.api.url,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export default instance;