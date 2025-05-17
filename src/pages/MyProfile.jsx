import React, { useState } from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

  const [userData,setUserData]=useState({
    name:"Vincent",
    image:assets.profile_pic,
    email:'abcd@gmail.com',
    phone:'+91 8612345689',
    address:{
      line1:'BTM Layout',
      Line2:"mico Layout",
    },
      gender:'male',
      dob:'1999-09-09'
    })

  const [isEdit,setIsEdit]=useState(true)  

  return (
    <div><img src={userData.image} alt=''/>
    {
      isEdit
      ? <input type='text'value={userData.name}onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>
      :<p>{userData.name}</p>
    }
    <hr />

<div>
  <p>CONTACT INFO</p>
  <div>
    <p>Email id</p>
    <p>{userData.email}</p>
    <p>phone:</p>
     {
      isEdit
      ? <input type='text'value={userData.phone}onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))}/>
      :<p>{userData.phone}</p>
    }

    <p>Addres:</p>
    {
      isEdit
      ?<p>
        <input type='text' onChange={(e)=>setUserData(prev=>({...prev,address:{...prevaddress,line1:e.target.value}}))} value={userData.address.line1}/>
        <br />
        <input type='text'onChange={(e)=>setUserData(prev=>({...prev,address:{...prevaddress,Line2:e.target.value}}))} value={userData.address.Line2} />
      </p>
      :<p>
        {userData.address.line1}
        <br />
        {userData.address.Line2}
      </p>
    }
  </div>
</div>

<div>
  <p>BASIC INFORMATION</p>
  <div>
    <p>Gender:</p>
    {
      isEdit
      ?<select onChange={(e=>setUserData(prev=>({...prev,gender:e.target.value})))}value={userData.gender}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
      :<p>{userData.gender}</p>
    }
    <p>Birthday</p>
    {
      isEdit
      ?<input type='data'onChange={(e=>setUserData(prev=>({...prev,dob:e.target.value})))}value={userData.dob}/>
      :<p>{userData.dob}</p>
    }
  </div>
</div>
    </div>
  )
}

export default MyProfile