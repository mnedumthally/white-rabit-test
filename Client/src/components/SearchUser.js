import React, {useState, useEffect} from "react";
import { UserList } from "./UserList";


export const SearchUser = () => {
    //assuming that search includes both new and old users from the localstorage
    const [searchString, setSearchString] = useState('')
    const localuserArray = JSON.parse(localStorage.getItem('userArray'))
    const [userArray, setUserArray] = useState(localuserArray)
    console.log(userArray, localuserArray)
    useEffect(() => {
        if(searchString.trim() && localuserArray.length) {
            setUserArray(localuserArray.filter(user => {
                const regex = new RegExp(searchString)
                //assuming that you only search for first name, last name, username, email and phone
                return (
                    user.user && (user.user.name.first.match(regex) ||
                    user.user.name.last.match(regex) ||
                    user.user.username.match(regex) ||
                    user.user.email.match(regex))
                )
            }))
        } else {
            setSearchString('.*')
        }

    }, [searchString])

    return (
        <div className={'searchUserWrapper'}>
            <span>{'Search'}</span>
            <input onChange={(e) => setSearchString(e.target.value)}/>
            <UserList userArray={userArray}/>
        </div>
    )
}