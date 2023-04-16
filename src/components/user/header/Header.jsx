import "./Header.css"
import { useSelector} from "react-redux"

const Header = () => {
const user = useSelector(state => state.user.user)
    return (
        <div className="header">
            {user && (<h1>Welcome back<br/>{user.firstName}!</h1>)}
            <button className="edit-button">Edit Name</button>
        </div>
    )
}
export default Header