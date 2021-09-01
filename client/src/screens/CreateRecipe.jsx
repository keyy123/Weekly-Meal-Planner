import {useState} from 'react'
import { useParams } from 'react-router';
import { InputAdornment, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '&>*': {
      margin: theme.spacing(1),
      width: '25ch',
  }
}
}))

export default function CreateRecipe(props) {
 const classes = useStyles()
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
    <>
    <form 
    className={classes.root}
    style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10px"}}
     onSubmit={(e) => {
      e.preventDefault();
      handleCreate(id,formData);
    }}>
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
    
          <TextField
          id="standard-basic"
          label="Protein"
          type='number' 
          name='pro'
          value={pro}
          InputProps={{'aria-label':'Protein',endAdornment:<InputAdornment position="end">g</InputAdornment>}}
          onChange={handleChange}
        />
      
    
          <TextField
          id="standard-basic"
          label="Carbohydrates"
          type='number' 
          name='carbs' 
          value={carbs}
          InputProps={{'aria-label':'Carbohydrates',endAdornment:<InputAdornment position="end">g</InputAdornment>}}

          onChange={handleChange}
        />
      
      
          <TextField
          id="standard-basic"
          label="Fats"
          type='number' 
          name='fat' 
          value={fat} 
          onChange={handleChange}
          InputProps={{'aria-label':'Fats',endAdornment:<InputAdornment position="end">g</InputAdornment>}}

        />
      
      <button>Create Recipe</button>
    </form>
      </>
  )
}
