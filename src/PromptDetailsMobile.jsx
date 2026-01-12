import './PromptDetailsMobile.css'
const PromptDetailsMobile = ({item}) => {
    return (
        <li className="prompt-card-wrapper-mobile">
            <article className="prompt-card-mobile">
                <header className='prompt-card-header-mobile'>
                    <p><strong>Prompt :</strong>{item.prompt}</p>
                    <span>{item.status}</span>
                </header>
                <section className='prompt-card-details-section-mobile'>
                    <p><strong>Tokens Consumed :</strong>{item.total_tokens_consumed}</p>
                    <p><strong>Request Latency :</strong>{item.latency_ms}</p>
                    <p><strong>Cost Incurred :</strong>{item.openai_cost_microns}</p>
                </section>
            </article>
        </li>
    )
}
export default PromptDetailsMobile