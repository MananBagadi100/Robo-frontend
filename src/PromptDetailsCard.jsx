import './PromptDetailsCard.css'
const PromptDetailsCard = () => {
    return (
        <>
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
            
            {/* For Desktop */}
            <tr className='prompt-row-card-desktop'>
                <td>12</td>
                <td className='best'>
                    <p className='prompt-clamp-desktop'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro qui veniam explicabo optio sit hic quasi officiis quam expedita iusto inventore culpa facilis in deleniti asperiores iure eligendi, accusantium libero?
                    </p>
                </td>
                <td>DONE</td>
                <td>3000</td>
                <td>27000</td>
                <td>2.7</td>
            </tr>
        </>
    )
}
export default PromptDetailsCard