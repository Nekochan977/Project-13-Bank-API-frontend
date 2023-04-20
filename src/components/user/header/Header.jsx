import "./Header.css"
import { useSelector} from "react-redux"
import {useState} from "react";

const Header = () => {
    const user = useSelector(state => state.user.user)
    const [isEditMode, setIsEditMode] = useState(false)

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
                    />
                    <input
                        type="text"
                        id="lastname"
                        placeholder={user.lastName}
                    />
                </form>
                <button className="edit-button" onClick={() => setIsEditMode(!isEditMode)}>Edit Name</button>
            </div>
        )
    }

}
export default Header