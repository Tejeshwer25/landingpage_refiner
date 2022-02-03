import styles from './LoginModal.module.css';
import closeIcon from '../../assets/closeIcon.svg';

const LoginModal = ({setLoginOpen, loginOpen, setUserDetails, toastMessage}) => {
    const submitForm = (e) => {
        e.preventDefault();
        setLoginOpen(false);
        toastMessage("Signed In Successfully");
    }

    return (
        <>
        <div className={styles.loginModal} onClick={() => setLoginOpen(false)}></div>
            
            <div className={styles.innerLoginModal}>
                <header>
                    <h3>Login</h3>
                    <img src={closeIcon} alt="" onClick={() => setLoginOpen(false)}/>
                </header>

                <form onSubmit={submitForm}>
                    <div>
                        <label>Email<span>*</span></label>
                        <input type="text" placeholder='Email' onChange={(e) => setUserDetails(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Password<span>*</span></label>
                        <input type="password" placeholder="Password" required/>
                    </div>

                    <p>Forgot Password?</p>
                    <button type="submit">Submit</button>
                </form>

                <p>New to refiner? Register as a <span>student</span>/<span>Enterprise</span></p>
            </div>
        </>
    )
}

export default LoginModal;