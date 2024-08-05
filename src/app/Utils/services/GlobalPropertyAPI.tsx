import axios from "axios";
import { CONSTANTS } from "../config/Constants";
import axiosRetry, { exponentialDelay } from "axios-retry";

const axiosInstance = axios.create({
    baseURL: CONSTANTS.API_BASE_URL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

axiosRetry(axiosInstance, {
    retries: 5,
    retryDelay: exponentialDelay
});

