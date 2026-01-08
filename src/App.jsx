import { useState } from "react";
import "./App.css";
import { generatePost , fetchGenerationStatus} from "./utils/api";
import * as motion from "motion/react-client"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";


function App() {
    // const [prompt, setPrompt] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [promptLengthError , setPromptLengthError] = useState(false)
    // const [result, setResult] = useState(null); //to store the result response (if api successful)
    // const [serverError , setServerError] = useState('') //state to store server error (if any)

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
                let response = await generatePost(prompt)     //runs once by default
                if (response.status === 200) {          //Successful api response
                    console.log('the received result is ',response.data)
                    setResult(response.data)
                    setLoading(false)
                    return 
                }
                //If a primary request or job creator req is processing
                if (response.status === 202) {  
                    //this function keeps trying until success (200) or if max time limit is exceeded
                    const pollGenerationStatus = async () => {
                        //first we check if the max time limit is exceeded or not
                        if (Date.now() - startTime >= MAX_WAIT_MS) {
                            setLoading(false)
                            setServerError("Taking too long (over 1 minute). Please try again.")
                            return          //stops execution 
                        }
                        // then we send api request to check if the primary req is done or still processing 
                        response = await fetchGenerationStatus(response.data.jobId)
                        //if request successful
                        if (response.status === 200) {
                            setResult(response.data)
                            setLoading(false)
                            return
                        }
                        //then we call this function again to check time limit and send req again
                        setTimeout(pollGenerationStatus,response.data.waitTime_in_ms)
                        return
                    }
                    pollGenerationStatus() //calling the function once
                }
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

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;