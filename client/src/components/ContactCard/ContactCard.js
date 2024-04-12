import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import './ContactCard.css'
import DeleteIcon from './delete.png'


function ContactCard({ _id, firstName, lastName, email, address, message, loadContacts }) {

    const deleteContact = async () => {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/contacts/${_id}`);

        toast.success(response.data.message);
        loadContacts();
    }


  return (
      <div class="container border border-primary rounded mt-4 p-4 bg-primary-subtle position-relative">
          <h1 className='m-2 text-black'>Name: {firstName} {lastName}</h1>

          <h4 className='m-2 text-black'>Email: {email}</h4>

          <h5 className='m-2 text-black'>Address: {address}</h5>

          <p className='m-2 fs-4 text-black'>Message: {message}</p>

          <img src={DeleteIcon} alt='DeleteIcon' className='delete-icon position-absolute bottom-0 end-0 m-2'
              onClick={deleteContact} />
      </div>
  )
}

export default ContactCard