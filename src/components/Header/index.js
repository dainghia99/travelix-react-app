import './style.css';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderContent from './HeaderContent';

function Header() {
    return (
        <div className="w-full h-722 mainbgimg">
            <HeaderTop />
            <HeaderNav />
            <HeaderContent />
        </div>
    );
}

export default Header;
