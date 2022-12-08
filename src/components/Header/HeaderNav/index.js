import Logo from '../../../assets/img/logo.webp';
import { FiMenu, FiSearch } from 'react-icons/fi';
import './style.css';

function HeaderNav() {
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
                    <FiSearch className="hover:text-orange-400" />
                    <FiMenu className="lg:hidden hover:text-orange-400" />
                    <input
                        type="text"
                        placeholder="Bạn muốn đến đâu!"
                        className="text-base text-gray-900 absolute right-0 top-[70px] p-3 rounded-lg w-80"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;
