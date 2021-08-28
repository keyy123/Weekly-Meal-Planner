import {useState} from 'react'

export default function createMenu(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    start_name: '',
    end_date:''
 })
  const { name } = formData
  const { handleCreate } = props;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
       <h3>Create a new Menu</h3>
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
