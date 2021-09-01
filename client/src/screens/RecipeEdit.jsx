import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core';

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
    <form
      style={{display:"flex", flexDirection:"column", width: "100%", alignItems:"center"}}
      onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}
    >
     <h3>Update Recipe</h3>
        
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
    
      <TextField
          id="standard-basic"
          label="Protein"
          type='number' 
          name='pro' 
          value={formData.pro}
          InputProps={{'aria-label':'Protein',endAdornment:<InputAdornment position="end">g</InputAdornment>}}
          onChange={handleChange}
        />
      
      <TextField
          id="standard-basic"
          label="Carbohydrates"
          type='number' 
          name='carbs' 
          value={formData.carbs}
          InputProps={{'aria-label':'Carbohydrates',endAdornment:<InputAdornment position="end">g</InputAdornment>}}
          onChange={handleChange}
        />
      
      <TextField
          id="standard-basic"
          label="Fats"
          type='number' 
          name='fat' 
          value={formData.fat} 
        onChange={handleChange}
        InputProps={{'aria-label':'Fats',endAdornment:<InputAdornment position="end">g</InputAdornment>}}

        />
      <button>Submit</button>
    </form>
  )}
