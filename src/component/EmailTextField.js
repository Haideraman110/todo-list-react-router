import React from 'react'
import TextField from '@mui/material/TextField';

const EmailTextField = ({handleChange,email,erroremail}) => {
    return (
        <>

            <TextField
                
                className='textfieldcolor'
                type='email'
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={email}
                variant='filled'
                placeholder='Enter Your Email'
                onChange={handleChange}
                error={erroremail!==''}
                helperText={erroremail}
                InputLabelProps={{
                    style: { fontSize: 14 },
                    shrink: true,
                  }}
                sx={{
                   mb:2
                }}

            />



        </>
    )
}

export default EmailTextField