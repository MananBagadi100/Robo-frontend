import { useState } from "react";
import "./App.css";
import { generatePost } from "./utils/api";
import * as motion from "motion/react-client"

function App() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [promptLengthError , setPromptLengthError] = useState(false)
    const [result, setResult] = useState(null); //to store the result response (if api successful)
    const [serverError , setServerError] = useState('') //state to store server error (if any)

    const handleGenerate = async () => {
        setServerError('')      //resetting the server error after every click 
        if (!prompt.trim()) return; //to remove whitespaces at either end

        if (prompt.length < 20) {
            setPromptLengthError(true)
            return     //do not send req if prompt has less than 20 charecters
        }
        setLoading(true)
        setResult(null)      //reset the result if re-prompting
        
        const startTime = Date.now() 
        const MAX_WAIT_MS = 60 * 1000 //max time limit 

        try {
                //this function keeps trying until success (200) or till max timeout
                async function handleResult() {
                    //stop sending requests if max time limit exceeded
                    if (Date.now() - startTime >= MAX_WAIT_MS) {
                        setLoading(false)
                        setServerError("Taking too long (over 1 minute). Please try again.")
                        return          //stops execution immediately
                    }
                    const response = await generatePost(prompt)
                    if (response.status === 200) {  //Successful api response
                        console.log('the received result is ',response.data)
                        setResult(response.data)
                        setLoading(false)
                        return 
                    }
                    if (response.status === 202) {  //If same prompt req (from another user/tab) is processing
                        setTimeout(handleResult,response.data.waitTime_in_ms)
                        return
                    }
                }
            handleResult()  //Calling the function once
        } 
        catch (error) {
            if (error.response) {
                setServerError(error.response.data.msg)
            }
            else {          //Some un expected problem occured (not backend error messages)
                setServerError('Something went wrong !')
            }
        }
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
    console.log('(frontend is printing this!) the server error is ',serverError)

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
                        {result.hashtags.map((tag) => (
                            <span key={tag} className="tag">
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