import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { readRecipe } from "../services/recipes"

export default function RecipeDetail(props) {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  const {handleDelete} = props
  
  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await readRecipe(id);
      setRecipe(recipeData)
    }
    fetchRecipe()
  }, [id])
  
  

  return (
    <div>
      <h3>{recipe?.name}</h3>
      <p>Kcal/serv: {recipe?.kcal}</p>
      <p>Protein(g): {recipe?.pro}</p>
      <p>Carbohydrates(g): {recipe?.carbs}</p>
      <p>Fats(g): {recipe?.fat}</p>
      {/* <Link to={`/menus/${recipe?.menu_id}/recipes/${recipe?.id}/edit`}> */}
        
      <Link to={`/menus/${recipe?.menu.id}/recipes/${id}/edit`}>
        <button>Edit</button>
      </Link>
        <button onClick={()=> handleDelete(recipe?.id)}>Delete</button>
    </div>
  )
}
