import React from 'react'
import TextField from '@mui/material/TextField';

const NameTextField = ({handleChange,name,errorname}) => {
    return (
        <>

            <TextField
                // error
                className='textfieldcolor'
                type='text'
                fullWidth
                id="name"
                name="name"
                value={name}
                label="Name"
                variant='filled'
                onChange={handleChange}
                placeholder='Enter Your Name'
                error={errorname!==''}
                helperText={errorname}
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

export default NameTextField