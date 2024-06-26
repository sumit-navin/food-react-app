import React, { useState } from 'react'
import { MdShoppingBag, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({ type: actionType.SET_USER, user: providerData[0] });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }
    };
    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({ type: actionType.SET_USER, user: null });
    };
    const defaultClickFunction = () => {
        setIsMenu(false);
    }

    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>

            {/* Desktop */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} onClick={defaultClickFunction} className='flex items-center gap-2'>
                    <img src={Logo} className='w-8 object-cover' alt='logo'></img>
                    <p className='text-headingColor text-x1 font-bold'>Iris Food</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={'/'} onClick={defaultClickFunction}> Home</Link></li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={'/menu'} onClick={defaultClickFunction}>  Menu</Link></li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={'/aboutus'} onClick={defaultClickFunction}> About Us</Link></li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={'/service'} onClick={defaultClickFunction}>Service</Link></li>
                    </motion.ul>
                    <Link to='/cart' className='relative flex items-center justify-center' onClick={defaultClickFunction}>
                        <MdShoppingBag className='text-textColor text-2xl ml-8 cursor-pointer' />
                        <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white'>
                                3
                            </p>
                        </div>
                    </Link>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            alt='userprofile'
                            className='w-10 min-w-[40] h-10 h-min[40] drop-shadow-xl cursor-pointer rounded-full'
                            onClick={login} />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                    {
                                        user && user.email === "sumitnavin@gmail.com" && (
                                            <Link to={'/createItem'} onClick={defaultClickFunction}>
                                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd className='ml-auto' /></p>
                                            </Link>
                                        )
                                    }
                                    <p onClick={logout} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout className='ml-auto' /></p>
                                </motion.div>
                            )
                        }

                    </div>

                </div>
            </div>


            {/* Mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                <Link to='/cart' onClick={defaultClickFunction} className='relative flex items-center justify-center'>
                    <MdShoppingBag className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white'>
                            3
                        </p>
                    </div>
                </Link>
                <Link to={'/'} onClick={defaultClickFunction} className='flex items-center gap-2'>
                    <img src={Logo} className='w-8 object-cover' alt='logo'></img>
                    <p className='text-headingColor text-x1 font-bold'>Iris Food</p>
                </Link>

                <div className='relative'>

                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        alt='userprofile'
                        className='w-10 min-w-[40] h-10 h-min[40] drop-shadow-xl cursor-pointer rounded-full'
                        onClick={login} />

                    {
                        isMenu && (

                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                                <ul>
                                    <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                        <Link to={'/'} onClick={defaultClickFunction}> Home</Link>
                                    </li>
                                    <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                        <Link to={'/menu'} onClick={defaultClickFunction}> Menu</Link>
                                    </li>
                                    <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                        <Link to={'/aboutus'} onClick={defaultClickFunction}> About Us</Link>
                                    </li>
                                    <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                                        <Link to={'/service'} onClick={defaultClickFunction}>Service</Link>
                                    </li>
                                </ul>
                                {
                                    user && user.email === "sumitnavin@gmail.com" && (
                                        <Link to={'/createItem'} onClick={defaultClickFunction}>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd className='ml-auto' /></p>
                                        </Link>
                                    )
                                }
                                <p
                                    onClick={logout}
                                    className='m-2 p-2 rounded-md shadow-md px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base justify-center bg-gray-200'>
                                    Logout
                                    <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }

                </div>
            </div>
        </header>
    )
}

export default Header