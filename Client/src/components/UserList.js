import React, {useState, useEffect} from "react";
import axios from "axios"
import { useUserFromAPI } from "./UserFromAPI";


export const UserList = (props) => {
    const {userArray} = props

    return (
        <div className={'userListWrapper'}>
            <div className={'title'}>
                {'Users List'}
            </div>
            <div className={'userList'}>
                {userArray.map((user => (
                    <div key={user.user.username}>
                        {`${user.user.name.first} ${user.user.name.last}`}
                    </div>
                )))}
            </div>
        </div>
    )
}