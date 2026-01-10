import './Admin.css'
import StopWatch from './assets/stopwatch-outline.svg'
import MoneyIcon from './assets/MoneyIcon.svg'
import SpeedIcon from './assets/speedIcon.svg'
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
                            <span className="admin-page-metrics-title">Avg Tokans Consumed</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>
                    <div className="admin-page-metrics-box">
                        <img src={SpeedIcon} alt="Not Found" className="admin-page-metrics-image" />
                        <div className="admin-page-metrics-details-area">
                            <span className="admin-page-metrics-title">Avg Tokans Consumed</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>                  
                    <div className="admin-page-metrics-box">
                        <img src={MoneyIcon} alt="Not Found" className="admin-page-metrics-image" />
                        <div className="admin-page-metrics-details-area">
                            <span className="admin-page-metrics-title">Avg Tokans Consumed</span>
                            <span className="admin-page-metrics-value">2</span>
                        </div>
                    </div>
                </section>

                <section className="admin-page-prompt-details-section">
                    <h2 className="admin-page-prompt-details-heading">
                        Prompt Details
                    </h2>
                    <div className="admin-page-prompt-details-content-area">
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default Admin