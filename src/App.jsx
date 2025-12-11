import { useState } from "react";
import "./App.css";
import { generatePost } from "./utils/api";

function App() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setLoading(true);
        setResult(null);

        try {
            const data = await generatePost(prompt);
            setResult(data);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">AI Social Media Post Creator</h1>

            <div className="card">
                <textarea
                    className="prompt-input"
                    placeholder="Describe your idea..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    className="generate-btn"
                    onClick={handleGenerate}
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate"}
                </button>
            </div>

            {result && (
                <div className="result-card">
                    <h2 className="caption">{result.caption}</h2>

                    <div className="hashtags">
                        {result.hashtags.map((tag, i) => (
                            <span key={i} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <img
                        className="result-image"
                        src={`data:image/png;base64,${result.imageBase64}`}
                        alt="Generated"
                    />
                </div>
            )}
        </div>
    );
}

export default App;