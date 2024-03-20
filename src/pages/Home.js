import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteData } from '../redux/slices/todoslice';
import { toast } from 'react-toastify';



const Home = () => {
  const tododatas = useSelector((state) => state.todo)
  const [inpcheck, setInpCheck] = useState({
    cutting: ''
  })
  const [cuttext, setCutText] = useState(false)
  const dispatch = useDispatch()


  const handleCutting = (e) => {
    const { name, checked } = e.target
    setInpCheck({
      ...inpcheck,
      [name]: checked

    })

  }


  console.log(inpcheck)

  return (
    <>
      <div className='container cont'>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.2rem', color: 'white' }}>To-Do-List Data</h2>
        <div className='row bgrow'>

          <div className='col'>

            {
              tododatas.length === 0 ? <h2 style={{ color: 'red' }}>Data is Not Available</h2> : tododatas.map((val, i) => (

                <>

                  <div className='dataCont' key={i} style={{ padding: '1.2rem' }}>
                    <span onClick={() => setCutText(!cuttext)}>
                      <input type='checkbox' className='form-control' name='cutting' checked={inpcheck.cutting} onChange={handleCutting} />
                    </span>

                    {
                      cuttext ? <p style={{ textDecoration: 'line-through',display:'flex',width:'100%',justifyContent:'space-evenly' }}>
                        <p>{val.name}</p>
                        <p>{val.email}</p>
                        <p>{val.mobile}</p>
                        <p>{val.notes}</p>
                      </p> : <p style={{ textDecoration: 'none',display:'flex',width:'100%',justifyContent:'space-evenly' }}>
                        <p>{val.name}</p>
                        <p>{val.email}</p>
                        <p>{val.mobile}</p>
                        <p>{val.notes}</p>
                      </p>
                    }



                    <span onClick={() => {
                      dispatch(deleteData(val.mobile))
                      toast.success('Deleted')
                    }}>

                      <DeleteIcon style={{ color: 'red' }} />

                    </span>


                  </div>


                </>


              ))
            }

          </div>

        </div>

      </div>


    </>
  )
}

export default Home