import { Link, useParams } from "react-router-dom"

export default function Recipes(props) {
  const {id} = useParams()
  const {recipes, handleDelete } = props
  
  return (
    <div>
    <h3>Recipes</h3>
      {recipes?.map((recipe) => (
        <div key={recipe?.id}>
          <Link to={`/menus/${id}/recipes/${recipe.id}`}>
            <p>{recipe?.name}</p>
          </Link>
          
            <div>
              <Link to={`/menus/${id}/recipes/${recipe.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={()=> handleDelete(recipe.id)}>Delete</button>
            </div>             
        
        </div>
      ))}
      <Link to={`/menus/${id}/recipes/new`}>
        <button>Create</button>
      </Link>
    </div>
  )
}
