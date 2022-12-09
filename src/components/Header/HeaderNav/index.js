import Logo from '../../../assets/img/logo.webp';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { MdOutlineClear } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <div className="md:fixed bg-headerNav w-full h-28 transition-all duration-300 ease-in-out">
            <div className="w-[90%] h-full mx-auto flex justify-between items-center">
                <div className="flex items-center h-full">
                    <img src={Logo} alt="Logo" className="mr-3" />
                    <h1 className="text-3xl font-extrabold text-white">TRAVELIX</h1>
                </div>

                <ul className="items-center gap-6 hidden lg:flex">
                    <li className="text-white cursor-pointer text-lg group">
                        HOME
                        <div className="w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]"></div>
                    </li>
                    <li className="text-white cursor-pointer text-lg group">
                        ABOUT
                        <div className="w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]"></div>
                    </li>
                    <li className="text-white cursor-pointer text-lg group">
                        OFFERS
                        <div className="w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]"></div>
                    </li>
                    <li className="text-white cursor-pointer text-lg group">
                        NEWS
                        <div className="w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]"></div>
                    </li>
                    <li className="text-white cursor-pointer text-lg group">
                        CONTACT
                        <div className="w-full h-[3px] bg-transparent group-hover:bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]"></div>
                    </li>
                </ul>

                <div className="text-white text-3xl cursor-pointer relative flex gap-5">
                    <FiSearch className="hover:text-orange-400" onClick={() => setSearchOpen(!searchOpen)} />
                    <FiMenu className="lg:hidden hover:text-orange-400" onClick={() => setMenu(!menu)} />
                    {searchOpen && (
                        <input
                            type="text"
                            placeholder="Bạn muốn đến đâu!"
                            className="text-base text-gray-900 absolute right-0 top-[70px] p-3 rounded-lg w-80"
                        />
                    )}
                </div>
            </div>
            {/* Menu mobie */}
            {menu && (
                <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-[#b3afb721] lg:hidden justify-end flex">
                    <div className="w-96 h-full relative flex bg-gradient-to-r from-[#f99d1d] to-[#8e50fd]">
                        <ul className="pl-10 pt-10">
                            <Link to={'/register'}>
                                <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">ĐĂNG KÝ</li>
                            </Link>
                            <Link to={'/login'}>
                                <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">
                                    ĐĂNG NHẬP
                                </li>
                            </Link>
                            <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">HOME</li>
                            <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">ABOUT</li>
                            <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">OFFERS</li>
                            <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">NEWS</li>
                            <li className="text-lg text-white hover:text-[#8e50fd] cursor-pointer my-6">CONTACT</li>
                        </ul>
                        <MdOutlineClear
                            onClick={() => setMenu(!menu)}
                            className="text-4xl text-white hover:text-orange-400 cursor-pointer top-0 right-0 absolute"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderNav;
