import axios from "axios";
import {baseFilmURL} from "../configs/urls";

const axiosService = axios.create({baseURL:baseFilmURL});

export {
    axiosService
}
