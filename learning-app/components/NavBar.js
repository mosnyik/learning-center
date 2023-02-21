import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const NavBar = () =>{
    return(
        <div className='flex items-center justify-around flex-wrap p-6 bg-blue-700'>
            <div className='flex justify-evenly '>
                <a className='text-slate-50 hover:underline underline-offset-8 decoration-4 px-6' href='/'>Home</a>
                <a  className='text-slate-50 hover:underline underline-offset-8 decoration-4 px-6'href='/about'>About</a>
                <a className='text-slate-50 hover:underline underline-offset-8 decoration-4 px-6' href='/courses'>Courses</a>
                <a className='text-slate-50 hover:underline underline-offset-8 decoration-4 px-6' href='/support'>Support</a>
                <a className='text-slate-50 hover:underline underline-offset-8 decoration-4 px-6' href='/contact'>Contact</a>
            </div>
        </div>
    );
};

export default NavBar;




