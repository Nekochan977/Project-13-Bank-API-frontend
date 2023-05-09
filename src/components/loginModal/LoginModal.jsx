import "./LoginModal.css"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {setToken} from "../../app/userSlice"

/**
 * Login modal to connect on the user's interface
 * @global { email } email of the user
 * @global { password } password of the user
 * @global { message } error message if wrong/ missing input
 * @method { post } call api with input data
 * @dispatch { Token } register the token in the redux store
 * @navigate if response === "200" navigate to user's interface
 */

const LoginModal = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const token = useSelector((state)=>state.user.token)

    const dispatch = useDispatch()

    const navigate = useNavigate()
    useEffect(() => {
        if(token !== null) {
            navigate('/user')
        }
    })

    let handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
            let resJson = await res.json()

            if (resJson.status === 200) {
                const token = resJson.body.token
                dispatch(
                    setToken(token)
                )
                navigate("/user")
            } else {
                setMessage("Invalid email or password");
            }
        } catch (err) {

            console.log(err);
        }
    }


    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label
                    ><input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                >Remember me</label
                >
                </div>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                <button className="sign-in-button" type={"submit"}>Sign In</button>
            </form>
        </section>
    )
}
export default LoginModal