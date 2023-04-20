import Header from "../components/user/header/Header"
import Account from "../components/user/account/Account"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {setUser} from "../app/userSlice"

const User = () => {
    const token = useSelector((state)=>state.user.token)
    const dispatch = useDispatch()

    useEffect(() => {

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
