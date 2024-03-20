import React from 'react'
import TextField from '@mui/material/TextField';
const NotesTextField = ({ handleChange, notes, errornotes }) => {
    return (
        <>
            <TextField

                className='textfieldcolor'
                type='text'
                fullWidth
                id="notes"
                name="notes"
                label="Notes"
                value={notes}
                variant='filled'
                placeholder='Notes'
                onChange={handleChange}
                helperText={errornotes}
                error={errornotes !== ''}
                InputLabelProps={{
                    style: { fontSize: 14 },
                    shrink: true,
                  }}
                sx={{
                    mb: 2
                }}

            />


        </>
    )
}

export default NotesTextField