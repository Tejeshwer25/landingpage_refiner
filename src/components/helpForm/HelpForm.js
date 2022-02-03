import styles from './HelpForm.module.css';

const HelpForm = () => {
    return (
        <div className={styles.helpForm}>
            <header>
                <h5>Confused?</h5>
                <h5>We can help you</h5>
            </header>

            <form>
                <div>
                    <label>Full Name<span>*</span></label>
                    <input type="text" placeholder="Full Name"/>
                </div>

                <div>
                    <label>Email<span>*</span></label>
                    <input type="text" placeholder='Email'/>
                </div>

                <div>
                    <label>Mobile Number</label>
                    <input type="text" placeholder='Mobile Number'/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default HelpForm;