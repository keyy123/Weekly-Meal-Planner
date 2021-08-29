import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'
import { readAllMenus, createMenu, destroyMenu, updateMenu } from '../services/menus'
import { readRecipes,createRecipe, updateRecipe, deleteRecipe} from '../services/recipes'
import Menus from '../screens/Menus'
import MenuEdit from '../screens/MenuEdit'
import CreateMenu from '../screens/CreateMenu'
import MenuDetail from '../screens/MenuDetail'
import CreateRecipe from '../screens/CreateRecipe'
import RecipeEdit from '../screens/RecipeEdit'
import RecipeDetail from '../screens/RecipeDetail'
import Recipes from '../screens/Recipes'

export default function MainContainer(props) {
  const [menus, setMenus] = useState([])
  const [recipes, setRecipes] = useState([])
  const {currentUser} = props
  const history = useHistory()
  const { id } = useParams()
  
  useEffect(() => {
    const fetchMenus = async () => {
      const menuList = await readAllMenus();
      setMenus(menuList)
    }
    fetchMenus()
},[])

useEffect(() => {
  const fetchRecipes = async () => {
    const recipeList = await readRecipes(id);
    setRecipes(recipeList)
  }
  fetchRecipes()
}, [id])
  
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

const handleRecipeCreate = async (id, formData) => {
  await createRecipe(id, formData);
  history.push(`/menus/${id}/recipes`);
};


  const handleRecipeUpdate = async (id, formData) => {
    await updateRecipe(id, formData);
    history.push('/menus/:menu_id/recipes');
  };
  
  const handleRecipeDelete = async (id) => {
    await deleteRecipe(id);
    setRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };
  
  
  return (
    <div>
      <Switch>
        <Route path='/menus/:id/recipes/:id/edit'>
          <RecipeEdit handleUpdate={handleRecipeUpdate}/>
        </Route>
        <Route path ='/menus/:id/recipes/new'>
          <CreateRecipe handleCreate={handleRecipeCreate}/>
        </Route>
        <Route path='/menus/:id/recipes/:id'>
          <RecipeDetail />
        </Route>
        <Route path ='/menus/:id'>
          <Recipes
            recipes={recipes}
            handleDelete={handleRecipeDelete}
          />
        </Route>
        <Route path='/menus/:id/edit'>
          <MenuEdit menus={menus} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/menus/new'>
          <CreateMenu handleCreate={handleCreate} />
        </Route>
        <Route path='/menus/:id'>
          <MenuDetail menus={menus} />
        </Route>
        <Route path='/menus'>
          <Menus
            menus={menus}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
