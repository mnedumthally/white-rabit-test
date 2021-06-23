import React, {useState, useEffect} from "react";
import axios from "axios"
import { useUserFromAPI } from "./UserFromAPI";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";
import { SearchUser } from "./SearchUser";


export const Home = () => {
    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)
    const [checkAuth, setCheckAuth] = useState(false)
    const [auth, setAuth] = useState(false)
    const userArray = useUserFromAPI() 
    useEffect(() => {
        if(checkAuth) {
            const URL = `http://${window.location.host}/auth?username=${username}&password=${password}` 
            axios.get(URL).then((response) => {
                setAuth(response.data)
            }).catch(error => {
                setAuth(false)
            })
            setCheckAuth(false)
        }
    },[checkAuth])

    return (
        <div>
            {auth ? <div>
                <div>
                    <span>{'username'}</span>
                    <input onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <span>{'password'}</span>
                    <input type={'password'} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button onClick={(e) => setCheckAuth(true)}>
                    {'go'}
                </button>
            </div> 
            : (
                <div className={'options'}>
                    <UserList userArray={userArray}/>
                    <SearchUser/>
                    <AddUser/>
                </div>
                )
            }
            
        </div>
    )
}