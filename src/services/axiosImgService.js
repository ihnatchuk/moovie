import axios from "axios";

import {baseImgURL} from "../configs/urls";

const axiosImgService = axios.create({baseURL:baseImgURL});

export {
    axiosImgService
}