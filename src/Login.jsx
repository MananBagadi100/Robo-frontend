import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    return (
        <>  
            <main className="login-full-page-container">
                <section className="login-dialog-box">
                    <header className="login-dialog-box-header">
                        <h1 className="login-dialog-box-heading">Login</h1>
                    </header>

                    <div className="login-dialog-box-info-area">
                        <form className="login-dialog-box-form-area">
                            <div className="login-form-fields">
                                <label>Email</label>
                                <input type="text" defaultValue="email@example.com" autoComplete='email'/>
                            </div>

                            <div className="login-form-fields">
                                <label>Password</label>
                                <input type="password" defaultValue="password" autoComplete='current-password'/>
                            </div>

                            <div className="login-submit-btn-wrapper">
                                <Link className="login-submit-btn" to='/admin'>
                                    Login
                                </Link>
                            </div>

                            <p>Demo credentials already added for smooth checkin !</p>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Login