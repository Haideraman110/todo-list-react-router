import React from 'react'
import TextField from '@mui/material/TextField';
const MobileTextField = ({handleChange,mobile,errormobile}) => {
    return (
        <>
            <TextField
                className='textfieldcolor'
                type='text'
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                value={mobile}
                variant='filled'
                placeholder='Enter Your Mobile No'
                onChange={handleChange}
                error={errormobile!==''}
                InputLabelProps={{
                    style: { fontSize: 14 },
                    shrink: true,
                  }}
                helperText={errormobile}
                sx={{
                    mb: 2
                }}

            />

        </>
    )
}

export default MobileTextField