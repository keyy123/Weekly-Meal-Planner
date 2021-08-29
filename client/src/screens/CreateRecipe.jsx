import {useState} from 'react'
import { useParams } from 'react-router';
export default function CreateRecipe(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    pro: '',
    carbs: '',
    fat:''
  })

  const { name, kcal, pro, carbs, fat } = formData
  const { handleCreate } = props;
  const { id } = useParams()
  
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
      debugger
      handleCreate(id,formData);

    }}>
       <label>
        Name:
        <input 
          type='text' 
          name='name' 
          value={name} 
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Kcal:
        <input 
          type='number' 
          name='kcal' 
          value={kcal} 
          onChange={handleChange}
        />
      </label>
      <label>
        Protein(g):
        <input 
          type='number' 
          name='pro' 
          value={pro} 
          onChange={handleChange}
        />
      </label>
      <label>
        Carbohydrates(g):
        <input 
          type='number' 
          name='carbs' 
          value={carbs} 
          onChange={handleChange}
        />
      </label>
      <label>
        Fats(g):
        <input 
          type='number' 
          name='fat' 
          value={fat} 
          onChange={handleChange}
        />
      </label>
      <button>Create Recipe</button>
    
    </form>
  )
}
