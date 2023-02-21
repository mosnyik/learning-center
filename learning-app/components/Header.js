import Image from 'next/image'
import Link from "next/link";

const Header = () => {
    return ( 
        <div className='bg-slate-100'>
            <div className='flex flex-row bg-blue-700 px-40 py-2 align-baseline'>
            <div className=' flex flex-row items-center justify-center  '>
                <Link className='flex flex-shrink=0' href ={'/'}>
                    <img src = '/logo.png' loading="lazy" className='w-30 h-20 ' />
                </Link>
                <a className="flex-wrap px-4 justify-center text-3xl text-slate-50 hover:text-blue-200 hover:underline text-lg text-center " href="/">Learning <br/> Center
                </a>
            </div>
            <div className='grow h-24'>

            </div>
            <div className='flex flex-row justify-center'>
                <a className="flex-wrap py-6 px-4 justify-center text-3xl text-slate-50 hover:text-blue-200 hover:underline text-lg text-center " href="/">Sign In
                </a>  
                <Link href ={'/'}>
                    <img src = '/logo.png' loading="lazy" className='w-30 h-20' />
                </Link>
            </div>
           
        </div>
        <div className='bg-slate-100 h-0.5'>
            </div>
        </div>
     );
}
 
export default Header;