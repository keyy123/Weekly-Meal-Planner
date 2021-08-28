import { useState, useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
import { readRecipes, readRecipe, createRecipe, updateRecipe, deleteRecipe } from '../services/recipes';
import Recipes from '../screens/Recipes'
import RecipeDetail from '../screens/RecipeDetail'
import RecipeEdit from '../screens/RecipeEdit'
import CreateRecipe from '../screens/CreateRecipe'
//import { addFlavorToFood } from '../services/menus'; Add custom route for recipes here later



//This will be the main container for my recipes which is nested within Menu Details (/menus/${id}/recipes) I also have a custom route for create for recipes
export default function MenuDetail() {
  const [menuItem, setMenuItem] = useState(null);
  const [recipes,setRecipes] = useState([])
  const { id } = useParams();
  
  //const { flavors } = props;
  //  const [selectedFlavor, setSelectedFlavor] = useState('');

  useEffect(() => {
    const fetchMenuItem = async () => {
      const menuData = await readOneMenu(id);
      setMenuItem(menuData)
    }
    fetchMenuItem();
  }, [id]);

  const handleCreate = async (formData) => {
    const menuData = await createMenu(formData);
    setMenus((prevState) => [...prevState, menuData]);
    history.push('/menus');
  };
  
  
const handleUpdate = async (id, formData) => {
  const menuData = await updateMenu(id, formData);
  setMenus((prevState) =>
    prevState.map((menu) => {
      return menu.id === Number(id) ? menuData : menu;
    })
  );
  history.push('/menus');
};

  
const handleDelete = async (id) => {
  await destroyMenu(id);
  setMenus((prevState) => prevState.filter((menu) => menu.id !== id));
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

      <Switch>
        <Route path="menus/:menu_id/recipes/:id">
          <RecipeEdit recipes={recipes} handleUpdate={handleUpdate}/>
        </Route>
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
      </Switch>
      
    </div>
  )
}                             