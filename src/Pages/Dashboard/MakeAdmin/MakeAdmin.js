import React, { useState } from 'react';
import { TextField, Alert } from '@mui/material';
const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnblur = e => {
        
        setEmail(e.target.value);
        e.target.value = " ";
    }

    const handleAdmin = e => {
        const user = { email };
        fetch('https://frozen-eyrie-92142.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }


    return (
        <div>
        <h2>Make Admin</h2>
        <form onSubmit={handleAdmin}>
            <TextField onBlur={handleOnblur} label="Email" type="email" variant="standard" sx={{width: "50%"}}/> <button type="submit" className="btn">Submit</button>
        </form>
        {success && <Alert severity="success">Success</Alert>}
    </div>
    );
};

export default MakeAdmin;