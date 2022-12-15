import axios from "axios";
import { URL_API } from "../config";

const DataClient = axios.create({
    baseURL: URL_API
})

export default DataClient;