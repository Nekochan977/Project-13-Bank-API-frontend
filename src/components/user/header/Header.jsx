import "./Header.css"
import { useSelector} from "react-redux"
import {useState} from "react";

const Header = () => {
    const user = useSelector(state => state.user.user)
    const token = useSelector((state)=>state.user.token)
    const [isEditMode, setIsEditMode] = useState(false)
    console.log(user)
    console.log(token)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [hasFirstName, setHasFirstName] = useState(false)
    const [hasLastName, setHasLastName] = useState(false)

    const changeName = (e) => {
        if(e.target.id === "firstname"){
            setFirstName(e.target.value)
            setHasFirstName(true)
            console.log(firstName)
        } else if (e.target.id === "lastname"){
            setLastName(e.target.value)
            setHasLastName(true)
            console.log(lastName)
        }
    }

    if(isEditMode === false) {
        return (
            <div className="header">

                {user && (<h1>Welcome back<br/>{user.firstName} {user.lastName}!</h1>)}
                <button className="edit-button" onClick={() => setIsEditMode(!isEditMode)}>Edit Name</button>
            </div>
        )
    } else {
        return (
            <div className="header">

                <form>
                    <label htmlFor="firstname"></label>
                    <input
                        type="text"
                        id="firstname"
                        placeholder={user.firstName}
                        onChange={changeName}
                    />
                    {hasFirstName === false ? <p>Veuillez entrer un prénom</p> : "" }
                    <input
                        type="text"
                        id="lastname"
                        placeholder={user.lastName}
                        onChange={changeName}
                    />
                    {hasLastName === false ? <p>Veuillez entrer un nom de famille</p> : "" }
                </form>
                <button className="edit-button" >Save Name</button>
                <button className="edit-button" onClick={() => setIsEditMode(!isEditMode)}>Edit Name</button>
            </div>
        )
    }

}
export default Header