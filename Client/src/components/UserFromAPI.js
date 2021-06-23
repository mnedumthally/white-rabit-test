import React, {useState, useEffect} from "react";
import axios from "axios"


export const useUserFromAPI = () => {
    const [userArray, setUserArray] = useState([])

    useEffect(() =>{
        axios.get('https://randomuser.me/api/0.8/?results=20').then((response) => {
            response.data && response.data.results && response.data.results.length 
                ? localStorage.setItem('userArray', JSON.stringify(response.data.results))
                : []
                setUserArray(JSON.parse(localStorage.getItem('userArray')))
        }).catch(error => {
            setUserArray([])
        })
    },[])


    return (userArray)
}