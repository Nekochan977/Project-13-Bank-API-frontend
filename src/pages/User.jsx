import Header from "../components/user/header/Header"
import Account from "../components/user/account/Account"
// import {useDispatch, useSelector} from "react-redux"
// import {useEffect} from "react"
// import {setUser} from "../app/userSlice"
import {GetUser} from "../utils/api";

const User = () => {
GetUser()
    return (
        <main className="main bg-dark">
            <Header />
            <Account />
        </main>
    )
}
export default User
