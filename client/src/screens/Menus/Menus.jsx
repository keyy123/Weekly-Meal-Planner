import { Link } from 'react-router-dom'
import { Fab, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
export default function Menus(props) {
const {menus, handleDelete, currentUser} = props

  return (
    <div>
         <h3>Menus</h3>
      {menus.map((menu) => (
        <div key={menu.id}>
         <Accordion>
        <AccordionSummary
          style={{wordSpacing:"2px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <Link to={`/menus/${menu.id}`}>
            <h2>{menu.name}</h2>
          </Link>
        </AccordionSummary>
        <AccordionDetails style={{display:"flex", flexDirection:"column"}}>
        {currentUser?.id === menu.user_id && (
            <div>
              <Link to={`/menus/${menu.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(menu.id)}>Delete</button>
            </div>
              )}
        </AccordionDetails>  
      </Accordion>
        </div>
      ))}
      <Link to='/menus/new'>
        <Fab color="secondary" aria-label="add" size="medium">
          <AddIcon />
          </Fab>
 
      </Link>
    </div>
  )
}
