import './Admin.css'
import StopWatch from './assets/stopwatch-outline.svg'
import MoneyIcon from './assets/MoneyIcon.svg'
import SpeedIcon from './assets/speedIcon.svg'
import PromptDetailsCard from './PromptDetailsCard'
const Admin = () => {
    return (
        <>
            <main className="admin-page-content-area">
                <header className="admin-page-heading-section">
                    <h1 className='admin-page-heading'>Admin Dashboard</h1>
                </header>
                <section className="admin-page-metrics-section">
                    <div className="admin-page-metrics-box">
                        <img src={StopWatch} alt="Not Found" className="admin-page-metrics-image" />
                        <div className="admin-page-metrics-details-area">
                            <span className="admin-page-metrics-title">Avg Tokens per Request</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>
                    <div className="admin-page-metrics-box">
                        <img src={SpeedIcon} alt="Not Found" className="admin-page-metrics-image" />
                        <div className="admin-page-metrics-details-area">
                            <span className="admin-page-metrics-title">Request Latency</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>                  
                    <div className="admin-page-metrics-box">
                        <img src={MoneyIcon} alt="Not Found" className="admin-page-metrics-image" />
                        <div className="admin-page-metrics-details-area">
                            <span className="admin-page-metrics-title">Total API Spent</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>
                </section>

                <section className="admin-page-prompt-details-section">
                    <h2 className="admin-page-prompt-details-heading">
                        Request History
                    </h2>

                    {/* For Mobile only */}
                    <ul className="admin-page-prompt-details-list-mobile">
                        <PromptDetailsCard />
                    </ul>

                    <div className="admin-prompt-details-table-wrapper">
                        <table className='admin-prompt-details-table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Prompt</th>
                                    <th>Status</th>
                                    <th>Tokens Consumed</th>
                                    <th>Request Latency</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><p className='table-prompt-column'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nulla consequuntur architecto repellat sunt optio commodi, reprehenderit quibusdam nihil mollitia fugit rem blanditiis, numquam perferendis odio velit facere, necessitatibus nemo?</p></td>
                                    <td>DONE</td>
                                    <td>3000</td>
                                    <td>27000</td>
                                    <td>2.7</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><p className='table-prompt-column'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, blanditiis reprehenderit quos, quam perferendis quod nobis fugit laboriosam officiis molestiae consequuntur maiores modi assumenda numquam architecto repellat error et qui?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsa, laboriosam optio enim eveniet ipsum nulla, officia incidunt veniam, ex eius. Quod eum sequi ab voluptatibus quaerat. Velit, commodi cum?</p></td>
                                    <td>PENDING</td>
                                    <td>2300</td>
                                    <td>24000</td>
                                    <td>1.5</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><p id='testing'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nulla consequuntur architecto repellat sunt optio commodi, reprehenderit quibusdam nihil mollitia fugit rem blanditiis, numquam perferendis odio velit facere, necessitatibus nemo?</p></td>
                                    <td>FAILED</td>
                                    <td>1000</td>
                                    <td>24000</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Admin