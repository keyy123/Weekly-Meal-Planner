import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
import { TextField, InputAdornment } from '@material-ui/core';
export default function MenuEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    start_name: '',
    end_date:''
 })
 
 const {menus, handleUpdate} = props;
 const {id} = useParams();
 const history = useHistory()
  
 useEffect(()=> {
  const prefillFormData = () => {
    const menuItem = menus.find((menu)=> menu.id === Number(id));
    setFormData({ name: menuItem.name, kcal: menuItem.kcal, start_date: menuItem.start_date, end_date:menuItem.end_date})
  }
  if (menus.length) {
    prefillFormData()
  }
}, [menus, id])
 
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }))
}
  return (
    <form style={{display:"flex", flexDirection:"column", width: "100%", alignItems:"center"}} onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
      history.push('/')
    }}
    >
      <h3>Update Menu</h3>
          <TextField
          id="standard-basic"
          label='Name'
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      <br />
      
          <TextField
          id="standard-basic"
          type='number' 
          name='kcal' 
        value={formData.kcal}
        InputProps={{'aria-label':'Calories',endAdornment:<InputAdornment position="end">Kcal</InputAdornment>}}
          onChange={handleChange}
        />
      
      <label>
        Start Date:
        <TextField
          id="standard-basic"
          type='datetime-local' 
          name='start_date' 
          value={formData.start_date} 
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <TextField
          id="standard-basic"
          type='datetime-local'
          name='end_date' 
          value={formData.end_date} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
