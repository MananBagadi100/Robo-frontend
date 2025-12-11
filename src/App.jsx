import { useState } from "react";
import "./App.css";
import { generatePost } from "./utils/api";
import * as motion from "motion/react-client"
import { scale } from "motion";
import RegenerateIcon from './assets/add.png'

function App() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) return; //to remove whitespaces at starting and end

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
    //handle copy captions
    const handleCopyCaption = () => {
        if (!result) return;
        navigator.clipboard.writeText(result.caption);
        alert("Caption copied!");
    };
    // copy hashtags
    const handleCopyHashtags = () => {
        if (!result) return;
        navigator.clipboard.writeText(result.hashtags.join(" "));
        alert("Hashtags copied!");
    };
    //download image
    const handleDownload = () => {
        if (!result) return;
        const link = document.createElement("a");
        link.href = `data:image/png;base64,${result.imageBase64}`;
        link.download = "post.png";
        link.click();
    };
    return (
        <div className="app-container">
            <motion.h1 
                initial={{opacity:0,scale:0.8}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1}}
                className="app-title"
            >
                AI Social Media Post Creator
            </motion.h1>

            <motion.div 
                initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.8,delay:0.2}}
                viewport={{once:true}}
                className="card"
            >
                <div className="subheading-text-wrapper">
                  <span className="subheading-text">Create your next social media post with just One Click !</span>
                </div>
                <textarea
                    className="prompt-input"
                    placeholder="Describe your idea..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <div className="generate-btn-wrapper">
                  <motion.button
                      whileHover={{scale:1.1}}
                      whileTap={{scale:0.8}}
                      transition={{duration:0.2,ease:"easeOut"}}
                      className="generate-btn"
                      onClick={handleGenerate}
                      disabled={loading}
                  >
                      {loading ? "Generating..." : "Generate"}
                  </motion.button>
                </div>
            </motion.div>

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
                    <div className="actions">
                        <button className="action-btn" onClick={handleCopyCaption}>
                            Copy Caption
                        </button>

                        <button className="action-btn" onClick={handleCopyHashtags}>
                            Copy Hashtags
                        </button>

                        <button className="action-btn" onClick={handleDownload}>
                            Download Image
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;