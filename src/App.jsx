import { useState } from "react";
import "./App.css";
import { generatePost } from "./utils/api";
import * as motion from "motion/react-client"
import { scale } from "motion";
import RegenerateIcon from './assets/add.png'

function App() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [promptLengthError , setPromptLengthError] = useState(false)
    const [result, setResult] = useState(null); //to store the result response (if api successful)
    const [serverError , setServerError] = useState('') //state to store server error (if any)

    const handleGenerate = async () => {
        if (!prompt.trim()) return; //to remove whitespaces at starting and end

        if (prompt.length < 20) {
            setPromptLengthError(true)
            return     //do not send req if prompt has less than 20 charecters
        }
        setLoading(true);
        setResult(null);        //reset the result if re-prompting

        try {
            const response = await generatePost(prompt);
            if (response.status === 200) {       // If api successful
                setResult(response.data)
                console.log(response.data)
            }
        } 
        catch (error) {
            if (error.response) {
                setServerError(error.response.data.msg)
            }
            else {
                setServerError('Something went wrong !')
            }
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
    console.log('the server error is ',serverError)
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

                {promptLengthError ? 
                    <div className="prompt-error-msg">Prompt must have minimum 20 charecters</div> 
                    : '' }

                {serverError && (
                    <div className="server-error-msg">{serverError}</div>
                )}

                <div className="generate-btn-wrapper">
                  <motion.button
                      whileHover={{scale:1.1}}
                      whileTap={{scale:0.8}}
                      transition={{duration:0.1,ease:"easeOut"}}
                      className="generate-btn"
                      onClick={handleGenerate}
                      disabled={loading}
                  >
                      {loading ? "Generating..." : "Generate"}
                  </motion.button>
                </div>
            </motion.div>

            { /* Only rendered when backend gives response */}
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