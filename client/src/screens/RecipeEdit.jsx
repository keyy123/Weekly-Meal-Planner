import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    kcal: '',
    pro: '',
    carbs: '',
    fat:''
  })

  const { recipes, handleUpdate } = props
  const { id } = useParams()


  useEffect(() => {
    const prefillFormData = () => {
      const recipeItem = recipes.find((recipe) => recipe.id === Number(id));
      setFormData({ name: recipeItem.name, kcal: recipeItem.kcal, pro: recipeItem.pro, carbs: recipeItem.carbs, fat: recipeItem.fat })
    }
    if (recipes?.length) {
      prefillFormData()
    }
  },[recipes, id])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]:value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}
    >
     <h3>Update Recipe</h3>
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
      <button>Submit</button>
    </form>
  )}
