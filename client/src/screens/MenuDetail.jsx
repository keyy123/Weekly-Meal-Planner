import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
import { readRecipes, createRecipe, updateRecipe, deleteRecipe } from '../services/recipes';
import Recipes from '../screens/Recipes'
import RecipeDetail from '../screens/RecipeDetail'
import RecipeEdit from '../screens/RecipeEdit'
import CreateRecipe from '../screens/CreateRecipe'
//import { addFlavorToFood } from '../services/menus'; Add custom route for recipes here later



//This will be the main container for my recipes which is nested within Menu Details (/menus/${id}/recipes) I also have a custom route for create for recipes
export default function MenuDetail(props) {
  const [menuItem, setMenuItem] = useState(null);
  const [recipes, setRecipes] = useState([])
  const { id } = useParams();
  const history = useHistory()
  const { currentUser } = props
  //const { flavors } = props;
  //  const [selectedFlavor, setSelectedFlavor] = useState('');

  useEffect(() => {
    const fetchMenuItem = async () => {
      const menuData = await readOneMenu(id);
      setMenuItem(menuData)
    }
    fetchMenuItem();
  }, [id]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeList = await readRecipes();
      setRecipes(recipeList)
    }
    fetchRecipes()
  }, [])
  
  const handleCreate = async (formData) => {
    const recipeData = await createRecipe(formData);
    setRecipes((prevState) => [...prevState, recipeData]);
    history.push('/menus/:menu_id/recipes');
  };
  
  
  const handleUpdate = async (id, formData) => {
    const recipeData = await updateRecipe(id, formData);
    setRecipes((prevState) =>
      prevState.map((recipe) => {
        return recipe.id === Number(id) ? recipeData : recipe;
      })
    );
    history.push('/menus/:menu_id/recipes');
  };

  
  const handleDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedFlavor(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const foodItem = await addFlavorToFood(id, selectedFlavor);
  //   setFoodItem(foodItem);
  // };        



  return (
    <div>
      <h3>{menuItem?.name}</h3>
      <p>Kcal/d: {menuItem?.kcal}</p>
      <p>Duration: {menuItem?.start_date} to {menuItem?.end_date}</p>
      {menuItem?.recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
          <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
        </Link>
          <Link to={`menus/${menuItem.id}/recipes/`}>
            <CreateRecipe handleCreate={handleCreate} />
          </Link>
          <Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
            <RecipeDetail recipes={recipes} />
          </Link>
          <Link to={`menus/${menuItem.id}/recipes`}>
          <Recipes recipes={recipes}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
          </Link>
        </div>
      ))}
    </div>

    
    
  )
}

//After picking a menu,should show all recipes 

//All recipes should have links to create, update and destroy screens

//Links => Btns

//Going from a specific menu to a recipe, creating
    
{/* <Switch>
{/* <Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
          <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
        </Link> */}
