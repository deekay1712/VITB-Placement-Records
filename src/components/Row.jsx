import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupIcon from '@mui/icons-material/Group';

export default function Row({item}) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }
    
    return (
    <>
        <div className={styles.row}>
            <div className={styles.upper}>            
                <div className={styles.content}>
                    <div className={styles.column}>
                        <p className={styles.column}>{item.company_name}</p>
                    </div>
                    <div className={styles.column}>
                        <LocationOnIcon className={`${styles.icons} ${styles.locationIcon}`} />
                        <p className={styles.column}>{item.location}</p>
                    </div>
                    <div className={styles.column}>
                        <CurrencyRupeeIcon className={`${styles.icons} ${styles.rupeeIcon}`} />
                        <p className={styles.column}>{item.ctc}</p>
                    </div>
                    <div className={styles.column}>
                        <GroupIcon className={`${styles.icons} ${styles.groupIcon}`} />
                        <p className={styles.column}>{item.students_selected}</p>
                    </div>
                </div>
                <div className={styles.dropdown} onClick={toggleDetails}>
                    {showDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </div>
            </div>
            <div className={showDetails ? styles.details : `${styles.details} ${styles.hideDetails}`}>
                {
                    item.category &&
                    <>
                        <span className={styles.detailsBold}>Category: </span>
                        <span>{item.category}</span>
                    </>
                }

                {
                    item.stipend &&
                    <>
                        <br />
                        <br />
                        <span className={styles.detailsBold}>Stipend: </span>
                        <span>₹ {item.stipend}</span>
                    </>
                }
                
                {
                    (item.tenth_per || item.twelfth_per || item.ug_cgpa) &&
                    <>
                        <br />
                        <br />
                        <span className={styles.detailsBold}>Eligibility: </span>
                        <span>10th: {item.tenth_per}%, 12th: {item.twelfth_per}%, UG: {item.ug_cgpa} CGPA</span>
                    </>
                }
                {
                    item.comments &&
                    <>
                        <br />
                        <br />
                        <span className={styles.detailsBold}>Comments: </span>
                        <br />
                        <span>{item.comments}</span>
                    </>
                }
            </div>
        </div>
    </> 
    )
}
