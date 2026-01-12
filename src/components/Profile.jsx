import React from 'react'
import { useContext } from 'react'
import { Store } from '../Store/Store'

export default function Profile() {
    const {FormData} = useContext(Store);
  return (
    <div className='Profile-container'>
        <h2 className='text-center'>User Profile</h2>

        <div className='Profile-details'>
            <p><strong>Name:</strong> {FormData.Name}</p>
            <p><strong>Username:</strong> {FormData.Username}</p>
            <p><strong>Email:</strong> {FormData.Email}</p>
            <p><strong>Address 1:</strong> {FormData.Address1}</p>
            <p><strong>Address 2:</strong> {FormData.Address2}</p>
             <p><strong>Password:</strong> {FormData.Password}</p>
            <p><strong>City:</strong> {FormData.City}</p>
            <p><strong>State:</strong> {FormData.State}</p>
            <p><strong>Zip:</strong> {FormData.Zip}</p>
        


        </div>
        </div>

  )
}
