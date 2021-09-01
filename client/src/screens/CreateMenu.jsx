import {useState} from 'react'
import { TextField, InputAdornment } from '@material-ui/core';

export default function CreateMenu(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    start_name: '',
    end_date:''
 })
  const { name, kcal, start_date, end_date } = formData
  const { handleCreate } = props;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  return (
    <form
      style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}
      onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
       <h3>Create a new Menu</h3>
        
           <TextField
           id="standard-basic"
           label="Name"
          type='text' 
          name='name' 
        value={name}
          onChange={handleChange}
        />
      
      <TextField
          id="standard-basic"
          label="Kcal"
          type='number' 
          name='kcal' 
          value={kcal}
          InputProps={{'aria-label':'Calories',endAdornment:<InputAdornment position="end">Kcal</InputAdornment>}}

          onChange={handleChange}
        />
      <label>
        Start Date:
        <TextField
        id="standard-basic"
        type='datetime-local'
        name='start_date'
        value={start_date}
        onChange={handleChange}
        />
    </label>

      <label>
        End Date:
        <input 
          type='datetime-local' 
          name='end_date' 
          value={end_date} 
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
