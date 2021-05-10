import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const UsersList = () => {

    useEffect(() => {
        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))

    }, 
    [])


    const [listOfuser, setUsers] = useState(null);

    
    return (
        <div>
            { 
             listOfuser ? listOfuser.map((el,i) => (

                <Card key={i} user={el} />
             ))  : <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
         </div>
            }
           
        </div>
    )
}

export default UsersList
