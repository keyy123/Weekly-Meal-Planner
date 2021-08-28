import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import {readAllMenus, createMenu, destroyMenu, updateMenu} from '../services/menus'
import Menus from '../screens/Menus'
import MenuEdit from '../screens/MenuEdit'
import CreateMenu from '../screens/CreateMenu'
import MenuDetail from '../screens/MenuDetail'

export default function MainContainer(props) {
  const [menus, setMenus] = useState([])
  const {currentUser} = props
  const history = useHistory()

  useEffect(() => {
    const fetchMenus = async () => {
      const menuList = await readAllMenus();
      setMenus(menuList)
    }
    fetchMenus()
},[])

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

  
  
  
  
  return (
    <div>
      <Switch>
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
