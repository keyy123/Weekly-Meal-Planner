import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
      history.push('/')
    }}
    >
      <h3>Update Menu</h3>
        <label>
        Name:
        <input 
          type='text' 
          name='name' 
          value={formData.name} 
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kcal:
        <input 
          type='number' 
          name='kcal' 
          value={formData.kcal} 
          onChange={handleChange}
        />
      </label>
      <label>
        Start Date:
        <input 
          type='datetime-local' 
          name='start_date' 
          value={formData.start_date} 
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <input 
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
