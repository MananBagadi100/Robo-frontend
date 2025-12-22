export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log('the backend url is ',BACKEND_URL)
import axios from "axios";
export async function generatePost(prompt) {
    const response = await axios.post(`${BACKEND_URL}/api/ai/generate`,{prompt})
    console.log('the open ai api response is ',response.data)
    return response
}