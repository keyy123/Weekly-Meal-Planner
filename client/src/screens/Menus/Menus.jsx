import { Link } from 'react-router-dom'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
export default function Menus(props) {
const {menus, handleDelete, currentUser} = props

  return (
    <div>
         <h3>Menus</h3>
      {menus.map((menu) => (
        <div key={menu.id}>
          <Link to={`/menus/${menu.id}`}>
            <p>{menu.name}</p>
          </Link>
          {currentUser?.id === menu.user_id && (
            <div>
              <Link to={`/menus/${menu.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(menu.id)}>Delete</button>
            </div>
          )}
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
