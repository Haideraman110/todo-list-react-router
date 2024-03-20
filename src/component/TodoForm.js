import React, { useState } from 'react'
import Box from '@mui/material/Box';
import NameTextField from './NameTextField';
import EmailTextField from './EmailTextField';
import MobileTextField from './MobileTextField';
import NotesTextField from './NotesTextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/slices/todoslice';
import { toast } from 'react-toastify';


const TodoForm = () => {
    const dataduplicate = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const initialdata = {
        name: '',
        email: '',
        mobile: '',
        notes: ''
    }
    const errordata = {
        name: '',
        email: '',
        mobile: '',
        notes: ''
    }
    const [formdata, setFormdata] = useState(initialdata)
    const [formerror, setFormError] = useState(errordata)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = {}
        if (!formdata.name) {
            errors.name = 'Required'
        }
        else {
            errors.name = ''
        }
        if (!formdata.email) {
            errors.email = 'Email is required'
        } else if (!formdata.email.includes('@')) {
            errors.email = 'Email is not Valid'
        }
        else {
            errors.email = ''
        }

        if (!formdata.mobile) {
            errors.mobile = 'Mobile No is required'
        } else if (formdata.mobile.length > 10) {
            errors.mobile = 'Length Should be 10'
        }
        else {
            errors.mobile = ''
        }

        if (!formdata.notes) {
            errors.notes = 'Notes is required'
        } else if (formdata.notes.length > 256) {
            errors.notes = 'Notes should be less than 256 character'
        }
        else {
            errors.notes = ''
        }

        if (dataduplicate.some((val) => val.name === formdata.name || val.email === formdata.email || val.mobile === formdata.mobile || val.notes === formdata.notes)) {
            alert('Data is Already Exists')
            setFormdata(initialdata)
        } else {
            const haserror = Object.values(errors).some((er) => er !== '')
            if (!haserror) {
                dispatch(addData(formdata))
                setFormdata(initialdata)
                toast.success('Successfully Added Data')
            }
            else {
                alert('some fields are empty')
            }

        }
        console.log(errors)

        setFormError(errors)
    }
    return (
        <>
            <div className='todo-container' style={{ backgroundColor: 'white', padding: '.8rem' }}>
                <Box
                    component="form"
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <NameTextField handleChange={handleChange} name={formdata.name} errorname={formerror.name} />
                    <EmailTextField handleChange={handleChange} email={formdata.email} erroremail={formerror.email} />
                    <MobileTextField handleChange={handleChange} mobile={formdata.mobile} errormobile={formerror.mobile} />
                    <NotesTextField handleChange={handleChange} notes={formdata.notes} errornotes={formerror.notes} />

                    <Button type='submit' fullWidth variant="contained" style={{ fontSize: '14px' }}>Submit</Button>

                </Box>



            </div>


        </>
    )
}

export default TodoForm