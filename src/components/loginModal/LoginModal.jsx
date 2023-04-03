import "./LoginModal.css"
// import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginModal = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
        const navigate = useNavigate()




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
            console.log(resJson)
            if (resJson.status === 200) {
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
                {/*PLACEHOLDER DUE TO STATIC SITE*/}
                {/*<Link to="/user" className="sign-in-button">Sign In</Link>*/}
                {/*SHOULD BE THE BUTTON BELOW*/}
                <button className="sign-in-button" type={"submit"}>Sign In</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>
        </section>
    )
}
export default LoginModal