import './PromptDetailsCard.css'
const PromptDetailsTableCard = ({item}) => {
    return (
        <>
            {/* For Desktop */}
            <tr>
                <td>{item.id}</td>
                <td><p className='table-prompt-column'>{item.prompt}</p></td>
                <td>{item.status}</td>
                <td>{item.total_tokens_consumed}</td>
                <td>{item.latency_ms}</td>
                <td>{item.openai_cost_microns}</td>
            </tr>

            {/* For Mobile */}
            <li className="prompt-card-wrapper-mobile">
                <article className="prompt-card-mobile">
                    <header className='prompt-card-header-mobile'>
                        <p><strong>Prompt :</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere repellat sunt, maxime officia reiciendis dignissimos saepe similique voluptas aspernatur molestiae libero hic tempore veritatis, dicta accusantium suscipit maiores ex.</p>
                        <span>status</span>
                    </header>
                    <section className='prompt-card-details-section-mobile'>
                        <p><strong>Tokens Consumed :</strong> 300</p>
                        <p><strong>Request Latency :</strong> 25000</p>
                        <p><strong>Cost Incurred :</strong> 40 rupees</p>
                    </section>
                </article>
            </li>
            
        </>
    )
}
export default PromptDetailsTableCard