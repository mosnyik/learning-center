import Image from 'next/image'
import Link from "next/link";

const Header = () => {
    return ( 
        <div>
             <Link href ={'/'}>
                    <Image src = '/logo.png' width={128} height={107} />
                    <h6 className='logo'> Nyikwagh Moses</h6>
                </Link>
        </div>
     );
}
 
export default Header;