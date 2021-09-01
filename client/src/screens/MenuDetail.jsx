import { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { readOneMenu } from '../services/menus';
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'



export default function MenuDetail() {
  const [menuItem, setMenuItem] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchMenuItem = async () => {
      const menuData = await readOneMenu(id);
      setMenuItem(menuData)
    }
    fetchMenuItem();
  }, [id]);


  





  return (
    <div>
      <Accordion>
        <AccordionSummary
          style={{wordSpacing:"2px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>{menuItem?.name}</h3> <p/> <p>Kcal/d: {menuItem?.kcal}</p> <p>Duration: {menuItem?.start_date} to {menuItem?.end_date}</p>

        </AccordionSummary>
        <AccordionDetails style={{display:"flex", flexDirection:"column"}}>
          
        <Link style={{ textDecoration:"none"}} to={`/menus/${menuItem?.id}/recipes/`}>
        <Button>All Recipes In {menuItem?.name}</Button>
          </Link>
          <Link style={{textDecoration:"none"}} to={`/menus/${menuItem?.id}/recipes/new`}>
        <Button color="primary">Create A New Recipe For {menuItem?.name}</Button>
      </Link>
        
        </AccordionDetails>
      </Accordion>
     
      

   </div>
    
    

    
    
  )
}

    
