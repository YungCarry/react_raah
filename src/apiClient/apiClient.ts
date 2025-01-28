import axios from "axios"

const config = {baseURL: "https://faiskola.richardkorom.hu/api"}

const apiClient = axios.create(config)

export default apiClient;