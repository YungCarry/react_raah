import axios from "axios"

const config = {baseURL: "http://faiskola.richardkorom.hu/api"}

const apiClient = axios.create(config)

export default apiClient;