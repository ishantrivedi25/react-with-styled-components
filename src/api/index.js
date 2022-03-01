import axios from "axios";
import { setHeaderInfo, errorHandler, PromisifyError } from "../utils/helpers/api.helpers";

const BASE_URL = process.env.API_URL;

export const postAPICall = async (endpoint, data) => {
    try {
        const config = {
            headers: {
                ...(setHeaderInfo())
            }
        };

        return axios
            .post(BASE_URL + endpoint, config)
            .then((response) => response).catch(errorHandler);

    } catch (error) {
        return PromisifyError(error);
    }
}