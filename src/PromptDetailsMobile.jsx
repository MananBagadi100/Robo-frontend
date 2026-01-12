import './PromptDetailsMobile.css'
import { convertMicronsToINR, convertToSeconds } from './utils/formatters'
const PromptDetailsMobile = ({item , micronsPerUsd}) => {
    return (
        <li className="prompt-card-wrapper-mobile">
            <article className="prompt-card-mobile">
                <header className='prompt-card-header-mobile'>
                    <p><strong>Prompt :</strong>{item.prompt}</p>
                    <span>{item.status}</span>
                </header>
                <section className='prompt-card-details-section-mobile'>
                    <p><strong>Tokens Consumed :</strong>{item.total_tokens_consumed}</p>
                    <p><strong>Request Latency :</strong>{convertToSeconds(item.latency_ms)} s</p>
                    <p><strong>Cost Incurred : </strong>₹{convertMicronsToINR(item.openai_cost_microns,micronsPerUsd)}</p>
                </section>
            </article>
        </li>
    )
}
export default PromptDetailsMobile