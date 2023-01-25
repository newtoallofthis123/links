import profile from './static/profile-pic-full.png';
import './css/nav.css';
const Navbar = () => {
    return(
        <>
            <nav>
                <div className="nav">
                    <div>
                        <img src={profile} alt="" className="nav-img"/>
                    </div>
                    <div>
                        <h1 className="nav-title">NoobScience</h1>
                    </div>
                </div>
                <div>
                    <p className="nav-text">Hello! I am Ishan!</p>
                </div>
            </nav>
        </>
    );
}

export default Navbar;