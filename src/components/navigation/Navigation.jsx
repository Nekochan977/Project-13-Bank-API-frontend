import Logo from "../../assets/argentBankLogo.png"
import "./Navigation.css"
import {Link} from "react-router-dom";

const Navigation = () =>{
    return(
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <button className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </button>
                </div>
            </nav>
        </header>

    )
}
export default Navigation