import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ContactCard from '../../components/ContactCard/ContactCard'

function ContactsView() {
  const [contacts, setContacts] = useState([]);


  const loadContacts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/contacts`);

    setContacts(response.data.data);
  }

  

  useEffect(()=>{
    loadContacts();
  }, [])

  return (
    <div>
        <h1 className='text-center text-black'>Contacts Form</h1>

        {
          contacts.map((contact, index) => {
            const {_id, firstName, lastName, email, address, message} = contact;

            return (
              <ContactCard key={_id} _id={_id} firstName={firstName} lastName={lastName} email={email} address={address} message={message} loadContacts={loadContacts}/>
            )
          })
        }
    </div>
  )
}

export default ContactsView