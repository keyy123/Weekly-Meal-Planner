import { Link } from "react-router-dom"

export default function Recipes(props) {

  const {recipes, handleDelete, currentUser} = props
  
  return (
    <div>
    <h3>Recipes</h3>
      {recipes.map((recipe) => {
        <div key={recipe.id}>
          <Link to={`/menus/:menu_id/recipes/${recipe.id}`}>
            <p>{recipe.name}</p>
          </Link>
          {currentUser (
            <div>
              <Link to={`/menus/:menu_id/recipes/${recipe.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={()=> handleDelete(recipe.id)}>Delete</button>
            </div>             
          )}
        </div>
      })}
      <Link to='/menus/:menu_id/recipes/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
