import React, {useState, useEffect} from "react";
import axios from "axios"
import { useUserFromAPI } from "./UserFromAPI";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";
import { SearchUser } from "./SearchUser";


export const Home = () => {
    const [tab, setTab] = useState('home')
    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)
    const [checkAuth, setCheckAuth] = useState(false)
    const [auth, setAuth] = useState(false)
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


    const switchTab = (tab) => {
        console.log(tab)
        switch (tab) {
            case 'home':
                return <UserList/>
            case 'adduser':
                    return <AddUser/>
            case 'search':
                    return <SearchUser userArray={userArray}/>
        }
    }

    return (
        <div>
            <h1 className={'dashboardTitle'}>{'User Dashboard'}</h1>
            {!auth ? <div>
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
                    <div className={'tabs'}>
                        <div onClick={() => setTab('home')}>
                            {'Home'}
                        </div>
                        <div onClick={() => setTab('adduser')}>
                            {'Add User'}
                        </div>
                        <div onClick={() => setTab('search')}>
                            {'Search'}
                        </div>
                    </div>
                    {switchTab(tab)}
                    {/* <UserList userArray={userArray}/> */}
                    {/* <SearchUser userArray={userArray}/> */}
                    {/* <AddUser userArray={userArray}/> */}
                </div>
                )
            }
            
        </div>
    )
}