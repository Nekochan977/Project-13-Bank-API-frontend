import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../app/userSlice";

export const GetUser = () => {
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
}

export const EditUserName = () => {
    const token = useSelector((state)=>state.user.token)
    const dispatch = useDispatch()

    useEffect(() => {

        fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {'Authorization': `Bearer ${token}`}
        }).then(async (resp) => {
            const user = await resp.json()
            dispatch(setUser(user.body))
        })
    })
}