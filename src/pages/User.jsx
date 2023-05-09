import Header from "../components/user/header/Header"
import Account from "../components/user/account/Account"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {setUser} from "../app/userSlice"
import {useNavigate} from "react-router-dom"

/**
 * Login modal to connect on the user's interface
 * @global { user } data of the user
 * @global { Token } token of user after connexion
 * @method { post } call api to retrieve the user's data after checking the token
 * @dispatch { setUser } register the user's data in the store
 * @navigate if token null, navigate to the login page
 */

const User = () => {
    const token = useSelector((state)=>state.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(token === null){
            navigate("/login")
        }

        fetch('http://localhost:3001/api/v1/user/profile', {
            method: "POST",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(async (resp) => {
            const user = await resp.json()
            dispatch(setUser(user.body))
        })
    })

    return (
        <main className="main bg-dark">
            <Header />
            <Account />
        </main>
    )
}
export default User
