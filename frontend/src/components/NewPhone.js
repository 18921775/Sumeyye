import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [phonenumber, setPhoneNumber] = useState(''); //updated to phone number
    const [phonetype, setPhonetype] = useState(''); //updated to phone type

    async function createPhone(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phonenumber,//updated so that it is the same as the backend (postsql)
                phonetype,
                contactId: contact.id
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setPhoneNumber('');
        setPhonetype(''); //updated
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
        <select onChange={(e) => setPhonetype(e.target.value)} value={phonetype}> 
            <option value="Phone_type" disabled >Phone Type</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
            <option value="Other">Other</option>
        </select>
            <input type='text' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phonenumber}/>
            <button className='button green' type='submit'>Add Choiru's Phone</button>
        </form>
	);
}

export default NewPhone;