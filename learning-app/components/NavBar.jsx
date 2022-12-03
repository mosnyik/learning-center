import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';
import Image from 'next/image';


const menu_items = [
    {text: 'Home' , href : '/'},
    {text: 'About Us' , href : '/about'},
    {text: 'Courses' , href : '/courses'},
    {text: 'Support' , href : '/support'},
    {text: 'Contact Us' , href : '/contact'},
];


const Navbar = () =>{
    const [activeNav, setActiveNav] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <header>
            <nav className='nav'>
               
                <div onClick={()=>setActiveNav(!activeNav)}
                className = {`nav_menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${activeNav ? 'active' : ''} nav_menu-list`}>
                    {menu_items.map((menu, idx)=>{
                        return (
                            <div className='nav_items'
                            onClick={
                            ()=>{
                                setActiveIndex(idx)
                                setActiveNav(false) 
                                 }
                            }
                        key = {menu.text}
                        > <NavItem active = {activeIndex === idx} {...menu} /> 
                        </div>
                        )
                    }
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
