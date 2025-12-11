export const API_BASE = import.meta.env.VITE_API_BASE;
export async function generatePost(prompt) {
    const response = await fetch(`${API_BASE}/api/ai/generate`, {
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