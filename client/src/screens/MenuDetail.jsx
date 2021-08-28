import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
//import { addFlavorToFood } from '../services/menus'; Add custom route for recipes here later

export default function MenuDetail() {
  const [menuItem, setMenuItem] = useState(null);
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
      <p>{menuItem?.kcal}</p>
      
    </div>
  )
}                             