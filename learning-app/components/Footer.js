import Link from "next/link";
import styles from '../styles/Home.module.css'


const Footer = () => {
    return (  
        <div>
            <div  className='flex flex-row bg-blue-600 h-24'>
                <h2>
                    You can learn more if you subscribe
                </h2>
                <p> Join our mailing list for more information on our courses,
                tips for people seeking to join and study with us 
                </p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                    <button>
                    Sumbmit
                </button>
                </div>
               
            </div>
            <div>  
                <div>
                </div> 
                <div className="basis-1/3">
                    <h2>PRODUCTS</h2>
                    <Link href='/'>
                    <p>DASHBOARD</p>
                    </Link>
                    <Link href = '/courses'>
                    <p>COURSES</p>
                    </Link>
                </div>
                <div className="basis-1/3">
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