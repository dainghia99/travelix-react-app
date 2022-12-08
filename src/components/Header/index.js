import './style.css';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';

function Header() {
    return (
        <div className="w-full h-722 mainbgimg">
            <HeaderTop />
            <HeaderNav />
        </div>
    );
}

export default Header;
