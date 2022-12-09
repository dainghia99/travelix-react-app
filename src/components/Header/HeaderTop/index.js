import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function HeaderTop() {
    return (
        <div className="bg-primary h-10 md:flex items-center hidden">
            <div className="w-[90%] mx-auto flex items-center justify-between">
                <div className="flex items-center text-sm text-white gap-8">
                    <p className="cursor-pointer hover:text-orange-400">+84 965 355 416</p>
                    <div className="flex items-center gap-5 text-white">
                        <MdFacebook className="cursor-pointer hover:text-orange-400" />
                        <AiFillInstagram className="cursor-pointer hover:text-orange-400" />
                        <BsTwitter className="cursor-pointer hover:text-orange-400" />
                    </div>
                </div>
                <div before="" className="flex items-center text-white text-sm gap-5">
                    <Link to={'/login'}>
                        <p className="cursor-pointer hover:text-orange-400">Đăng Nhập</p>
                    </Link>
                    <div className="w-[1px] h-[20px] bg-slate-400"></div>
                    <Link to={'/register'}>
                        <p className="cursor-pointer hover:text-orange-400">Đăng Ký</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
