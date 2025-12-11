export const API_BASE = "http://localhost:3000/api/ai";

export async function generatePost(prompt) {
    const response = await fetch(`${API_BASE}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        throw new Error("Failed to generate post");
    }

    return response.json();
}