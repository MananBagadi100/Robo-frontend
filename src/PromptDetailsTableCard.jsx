import './PromptDetailsTableCard.css'
import { convertMicronsToINR, convertToSeconds } from './utils/formatters'
const PromptDetailsTableCard = ({item , micronsPerUsd}) => {
    return (
        <>
            {/* For Desktop */}
            <tr>
                <td>{item.id}</td>
                <td><p className='table-prompt-column'>{item.prompt}</p></td>
                <td className='table-prompt-column-done'>{item.status}</td>
                <td>{item.total_tokens_consumed}</td>
                <td>{convertToSeconds(item.latency_ms)} s</td>
                <td className='table-prompt-column-cost'>₹ {convertMicronsToINR(item.openai_cost_microns,micronsPerUsd)}</td>
            </tr>  
        </>
    )
}
export default PromptDetailsTableCard