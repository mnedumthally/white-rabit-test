import React, {useState, useEffect} from "react";
import axios from "axios"


export const AddUser = () => {
    const [first, setFirst] =useState("")
    const [title, setTitle] =useState("Mr")
    const [last, setLast] =useState("")
    const [gender, setGender] =useState("")
    const [email, setEmail] =useState("")
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    const [DOB, setDOB] =useState("")
    const [phone, setPhone] = useState("")
    const [user, setUser] = useState({})

    useEffect(() =>{
        const userArray = JSON.parse(localStorage.getItem('userArray'))
        userArray.push(user)
        localStorage.setItem('userArray', JSON.stringify(userArray))
    },[user])

    const handleAddUser = (e) => {
        setUser({
            user:{name:{title: title,
            first:first,
            last:last},
            email:email,
            username:username,
            password:password,
            DOB:DOB,
            phone:phone,
            gender:gender}
        })
    }

    return (
        <div className={'AddUserWrapper'}>
                <div>{'Title'}</div>
                <select onChange={(e) => setTitle(e.target.value)}>
                    <option value={'Mr'}>{'Mr'}</option>
                    <option value={'Mrs'}>{'Mrs'}</option>
                </select>
                <div>
                    {'First Name'}
                </div>
                    <input onChange={(e) => setFirst(e.target.value)}/>
                <div>
                    {'Last Name'}
                </div>
                <input onChange={(e) => setLast(e.target.value)}/>
                <div>
                    {'Gender'}
                </div>
            <select onChange={(e) => setGender(e.target.value)}>
                    <option value={'male'}>{'male'}</option>
                    <option value={'female'}>{'female'}</option>
                </select> 
                <div >
                    {'Email'}
                </div>
                <input onChange={(e) => setEmail(e.target.value)}/>
                <div >
                    {'Username'}
                </div>
                <input onChange={(e) => setUsername(e.target.value)}/>
                <div >
                    {'Password'}
                </div>
                <input onChange={(e) => setPassword(e.target.value)}/>
                <div >
                    {'DOB'}
                </div>
                <input onChange={(e) => setDOB(e.target.value)}/>
                <div >
                    {'Phone'}
                </div>
                <input onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={handleAddUser}>
                {'Add User'}
            </button>
        </div>
    )
}