import Link from "next/link";
import styles from '../styles/Home.module.css'


const Footer = () => {
    return (  
        <div className={styles.Footer}>
            <div>
            <h2>
                You can learn more if you subscribe
            </h2>
            <p> Join our mailing list for more information on our courses,
                tips for people seeking to join and study with us 
                </p>
            <form>

            </form>
            <button>
                Sumbmit
            </button>
            </div>
            <div>
                <div>S

                </div>
                <div>
                    <h2>PRODUCTS</h2>
                    <Link href='/'>
                    <p>DASHBOARD</p>
                    </Link>
                    <Link href = '/courses'>
                    <p>COURSES</p>
                    </Link>
                   
                </div>
                <div>
                    <h2>COMPANY</h2>
                    <Link href='/about'>
                    <p>ABOUT US</p>
                    </Link>
                    <Link href='/contact'>
                    <p>CONTACT US</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Footer;