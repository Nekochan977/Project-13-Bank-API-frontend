import "./Header.css"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react";
import {setToken, setUser} from "../../../app/userSlice";

const Header = () => {
    const user = useSelector(state => state.user.user)
    const token = useSelector((state)=>state.user.token)
    const [isEditMode, setIsEditMode] = useState(false)

    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [hasFirstName, setHasFirstName] = useState(false)
    const [hasLastName, setHasLastName] = useState(false)
    const dispatch = useDispatch()

    const changeName = (e) => {
        if(e.target.id === "firstname"){
            setUserFirstName(e.target.value)
            setHasFirstName(true)

        } else if (e.target.id === "lastname"){
            setUserLastName(e.target.value)
            setHasLastName(true)

        }
    }

    const saveName = async (e) =>{
        e.preventDefault()
        if(hasFirstName === true && hasLastName === true){
            try {
                let res = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        firstName: userFirstName,
                        lastName: userLastName,
                    }),
                })
                let resJson = await res.json()
                if(resJson.status === 200) {
                    dispatch(
                        setUser({
                            ...user,
                            firstName: userFirstName,
                            lastName: userLastName
                        }))
                    setIsEditMode(false)
                }
            } catch (err) {
                console.log(err);
            }
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
                <button className="edit-button" onClick={saveName}>Save Name</button>
                <button className="edit-button" onClick={() => setIsEditMode(!isEditMode)}>Cancel Edit Name</button>
            </div>
        )
    }

}
export default Header