import Logo from "../../assets/argentBankLogo.png"
import "./Navigation.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {HOME} from "../../routes";
import {LOGIN} from "../../routes";
import {setToken, setUser} from "../../app/userSlice";

const Navigation = () =>{
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    const logOut = (e) => {
        dispatch(setUser(null));
        dispatch(setToken(null))
    }

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
                    {
                        user ? (user &&
                                <Link className="main-nav-item" to={HOME} onClick={logOut}>
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                                </Link>
                            )
                            :
                            (
                                <Link className="main-nav-item" to={LOGIN}>
                                    <i className="fa fa-user-circle"></i>
                                    Sign In
                                </Link>
                            )
                    }
                </div>
            </nav>
        </header>

    )
}
export default Navigation