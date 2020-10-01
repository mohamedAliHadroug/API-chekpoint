import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

const UserList=()=>{

const [person, setData] = useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        setData((person) => res.data)
    })
},[])
console.log(person)
return (
    <Fragment>
<ul>
{person.map((person)=>(
    <li key={person.id}>* {person.name} *</li>
))}
</ul>
    </Fragment>
)

}

export default UserList;