import { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
//import { readRecipes, createRecipe, updateRecipe, deleteRecipe } from '../services/recipes';
// import Recipes from '../screens/Recipes'
// import RecipeDetail from '../screens/RecipeDetail'
// import RecipeEdit from '../screens/RecipeEdit'
// import CreateRecipe from '../screens/CreateRecipe'
//import { addFlavorToFood } from '../services/menus'; Add custom route for recipes here later



//This will be the main container for my recipes which is nested within Menu Details (/menus/${id}/recipes) I also have a custom route for create for recipes
export default function MenuDetail() {
  const [menuItem, setMenuItem] = useState(null);
  //const [recipes, setRecipes] = useState([])
  const { id } = useParams();
  //const { currentUser } = props
  //const { flavors } = props;
  //  const [selectedFlavor, setSelectedFlavor] = useState('');

  useEffect(() => {
    const fetchMenuItem = async () => {
      const menuData = await readOneMenu(id);
      setMenuItem(menuData)
    }
    fetchMenuItem();
  }, [id]);


  
 

  
  // const handleDelete = async (id) => {
  //   await deleteRecipe(id);
  //   setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  // };




  return (
    <div>
      <h3>{menuItem?.name}</h3>
      <p>Kcal/d: {menuItem?.kcal}</p>
      <p>Duration: {menuItem?.start_date} to {menuItem?.end_date}</p>
   
      <h4>Recipes</h4>
      <Link to={`/menus/${menuItem?.id}/recipes/`}>
        <p>All Recipes In {menuItem?.name}</p>
      </Link>
      <Link to={`/menus/${menuItem?.id}/recipes/new`}>
        <button>Create</button>
      </Link>
   </div>
    
    

    
    
  )
}

    
