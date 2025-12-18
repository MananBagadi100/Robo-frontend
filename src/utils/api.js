export const API_BASE = import.meta.env.VITE_API_BASE;
import axios from "axios";
export async function generatePost(prompt) {
    const response = await axios.post(`${API_BASE}/api/ai/generate`,{prompt})
    console.log('the open ai api response is ',response.data)
    return response
}