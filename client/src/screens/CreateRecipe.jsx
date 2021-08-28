import React from 'react'

export default function CreateRecipe(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    pro: '',
    carbs: '',
    fat:''
  })

  const { name, kcal, pro, carbs, fat } = formData
  const {handleCreate } = props
  
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
        Protein(g):
        <input 
          type='number' 
          name='pro' 
          value={formData.pro} 
          onChange={handleChange}
        />
      </label>
      <label>
        Carbohydrates(g):
        <input 
          type='number' 
          name='carbs' 
          value={formData.carbs} 
          onChange={handleChange}
        />
      </label>
      <label>
        Fats(g):
        <input 
          type='number' 
          name='fat' 
          value={formData.fat} 
          onChange={handleChange}
        />
      </label>
      <button>Create Recipe</button>
    
    </form>
  )
}
