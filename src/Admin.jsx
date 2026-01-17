import './Admin.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import StopWatch from './assets/stopwatch-outline.svg'
import MoneyIcon from './assets/MoneyIcon.svg'
import SpeedIcon from './assets/speedIcon.svg'
import BackArrow from './assets/backArrowBtn.svg'
import PromptDetailsTableCard from './PromptDetailsTableCard'
import { useEffect, useState } from 'react'
import { fetchAdminDashboardDetails } from './utils/api'
import { Link } from 'react-router-dom';
import PromptDetailsMobile from './PromptDetailsMobile';
import { convertMicronsToINR, convertTokensUsedToWholeValue, convertToSeconds } from './utils/formatters';

const Admin = () => {
    const [errorState, setErrorState] = useState(false)
    const [dashboardMetrics , setDashboardMetrics] = useState(null)
    const [ micronsPerUsd , setMicronsPerUsd] = useState(null)  //for storing how many microns in 1 usd (for consistent conversion across systems)
    function handleClose () {
        setErrorState(false)    //resetting to normal
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAdminDashboardDetails()
                console.log('the response is ',response)
                console.log('the response array is ',response.data.rows)
                setDashboardMetrics(response.data)
                setMicronsPerUsd(response.data.currency.micronsPerUsd)
            }
            catch (error) {
                console.log('Error',error)
                setErrorState(true)
            }
        }
        fetchData()
    },[])

    if(dashboardMetrics) {
        if (!errorState) {
            return (
                <>
                    <main className="admin-page-content-area">
                        <div className="admin-page-go-to-home-wrapper">
                            <Link className='admin-page-go-back-link' to='/'>
                                <img src={BackArrow} alt="Not Found"/>
                                <div>Back to Homepage</div>
                            </Link>
                        </div>

                        <header className="admin-page-heading-section">
                            <h1 className='admin-page-heading'>Admin Dashboard</h1>
                        </header>

                        <section className="admin-page-metrics-section">
                            <div className="admin-page-metrics-box">
                                <img src={StopWatch} alt="Not Found" className="admin-page-metrics-image" />
                                <div className="admin-page-metrics-details-area">
                                    <span className="admin-page-metrics-title">Avg Tokens per Request</span>
                                    <span className="admin-page-metrics-value">{convertTokensUsedToWholeValue(dashboardMetrics.summary.avgTokens)}</span>
                                </div>
                            </div>
                            <div className="admin-page-metrics-box">
                                <img src={SpeedIcon} alt="Not Found" className="admin-page-metrics-image" />
                                <div className="admin-page-metrics-details-area">
                                    <span className="admin-page-metrics-title">Request Latency</span>
                                    <span className="admin-page-metrics-value">{convertToSeconds(dashboardMetrics.summary.avgLatency)} s</span>
                                </div>
                            </div>                  
                            <div className="admin-page-metrics-box">
                                <img src={MoneyIcon} alt="Not Found" className="admin-page-metrics-image" />
                                <div className="admin-page-metrics-details-area">
                                    <span className="admin-page-metrics-title">Total API Spent</span>
                                    <span className="admin-page-metrics-value">₹ {convertMicronsToINR(dashboardMetrics.summary.totalSpendMicrons,dashboardMetrics.currency.micronsPerUsd)}</span>
                                </div>
                            </div>
                        </section>

                        <section className="admin-page-prompt-details-section">
                            <h2 className="admin-page-prompt-details-heading">
                                Request History
                            </h2>

                            {/* For Mobile only */}
                            <ul className="admin-page-prompt-details-list-mobile">
                                {/* Component which renders cards on mobile only */}
                                {   
                                    dashboardMetrics !== null ? dashboardMetrics.rows.map((item) => (
                                        <PromptDetailsMobile key={item.id} item={item} micronsPerUsd={micronsPerUsd}/> 
                                    )) : 
                                        <div>Loading ...</div>
                                }
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
                                        {/* Component which renders for desktop only */}
                                        {   
                                            dashboardMetrics !== null ? dashboardMetrics.rows.map((item) => (
                                            <PromptDetailsTableCard key={item.id} item={item} micronsPerUsd={micronsPerUsd}/> 
                                            )) : 
                                                <tr>
                                                    <td colSpan="6" style={{textAlign: 'center'}}>Loading...</td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </>
            )
        }
        else {
            return (
                <>
                    <Dialog
                        open={errorState}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Backend Not Responding !"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Not able to fetch dashboard metrics from backend. 
                                Please try after some time
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Link to='/' onClick={handleClose} autoFocus className='admin-page-go-to-home-btn'>
                                Go to Homepage
                            </Link>
                        </DialogActions>
                    </Dialog>
                </>
            )
        }
    }
    else {
        return (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
        )
    }
        
}
export default Admin