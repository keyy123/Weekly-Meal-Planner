import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { readRecipe } from "../services/recipes"

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  
  
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
    </div>
  )
}
