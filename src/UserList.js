import React, { useEffect, useState } from "react";
import axios from 'axios';


const UserList = () => {


    const [listOfUSer, setListOfUser] = useState([]);

    const doGetRequest = async () => {

        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(res.data)
    }

    useEffect(() => {
        doGetRequest();
    }, []);

    return (
        <div>
            {
            listOfUSer.map((user, index) => (
                
                <div key={index}>
                    <p>Name : {user.name} 
                        <br/>
                        Phone : {user.phone}
                    </p>
                </div>
            ))
            }
        </div>
        
    )
    

}


export default UserList;