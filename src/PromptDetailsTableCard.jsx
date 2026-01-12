import './PromptDetailsTableCard.css'
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
        </>
    )
}
export default PromptDetailsTableCard