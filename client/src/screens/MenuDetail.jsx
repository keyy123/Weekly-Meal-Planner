import { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
import { readRecipes, createRecipe, updateRecipe, deleteRecipe } from '../services/recipes';
// import Recipes from '../screens/Recipes'
// import RecipeDetail from '../screens/RecipeDetail'
// import RecipeEdit from '../screens/RecipeEdit'
// import CreateRecipe from '../screens/CreateRecipe'
//import { addFlavorToFood } from '../services/menus'; Add custom route for recipes here later



//This will be the main container for my recipes which is nested within Menu Details (/menus/${id}/recipes) I also have a custom route for create for recipes
export default function MenuDetail(props) {
  const [menuItem, setMenuItem] = useState(null);
  const [recipes, setRecipes] = useState([])
  const { id } = useParams();
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
   
      <h4>Recipes</h4>
      {/* {recipes?.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/menus/${id}/recipes/`}>
            <p>All Recipes In Menu</p>
          </Link>

          {currentUser?.id === menuItem?.user_id && (
            <div>
              <Link to={`/menus/${menuItem?.id}/recipes/${recipe?.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(menuItem.id)}>Delete</button>
            </div>
          )}
        </div>
      ))} */}
      <Link to={`/menus/${id}/recipes/`}>
        <p>All Recipes In {menuItem?.name}</p>
      </Link>
      <Link to={`/menus/${menuItem?.id}/recipes/new`}>
        <button>Create</button>
      </Link>
   </div>
    
    

    
    
  )
}

//After picking a menu,should show all recipes 

//All recipes should have links to create, update and destroy screens

//Links => Btns

//Going from a specific menu to a recipe, creating
    
{/* <Switch>
<Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
          <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
        </Link>
<Route path="menus/:menu_id/recipes/">
  <CreateRecipe handleCreate={handleCreate}/>
</Route>
<Route path="menus/:menu_id/recipes/:id">
  <RecipeDetail recipes={recipes}/>
</Route>
<Route path="menus/:menu_id/recipes">
  <Recipes recipes={recipes}
    handleDelete={handleDelete}
    currentUser={currentUser}
  />
</Route>
</Switch> */}


// {menuItem?.recipes.map((recipe) => (
//   <div key={recipe.id}>
//     <Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
//     <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
//   </Link>
//     <Link to={`menus/${menuItem.id}/recipes/`}>
//       <CreateRecipe handleCreate={handleCreate} />
//     </Link>
//     <Link to={`menus/${menuItem.id}/recipes/${recipe.id}`}>
//       <RecipeDetail recipes={recipes} />
//     </Link>
//     <Link to={`menus/${menu_id}/recipes`}>
//     <Recipes recipes={recipes}
//       handleDelete={handleDelete}
//       currentUser={currentUser}
//   />                        