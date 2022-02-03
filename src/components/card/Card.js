import styles from './Card.module.css';

import profileImage from '../../assets/profileImage.svg'
import locationIcon from '../../assets/locationIcon.svg';
import jobIcon from '../../assets/jobIcon.svg';

const Card = ({data}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <div>
                    <h2>{data.job_title}</h2>
                    <p>{data.company_name}</p>
                </div>

                <img src={profileImage} alt="" />
            </div>

            <div className={styles.card__body}>
                <div>
                    <p>
                        <img src={locationIcon} alt="" />
                        {data.location}
                    </p>

                    <p>
                        <img src={jobIcon} alt="" />
                        {data.experience}+ years experience
                    </p>
                </div>
                
                <p>
                    {data.job_description}...
                </p>
            </div>

            <div className={styles.card__footer}>
                <div>
                    <label>INOFFICE</label>
                    <label>{data.job_type}</label>
                </div>

                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card;