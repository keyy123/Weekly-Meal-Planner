import { Link, useParams } from "react-router-dom"
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
export default function Recipes(props) {
  const {id} = useParams()
  const {recipes, handleDelete } = props
  
  return (
    <div>
    <h3>Recipes</h3>
      {recipes?.map((recipe) => (
        <div key={recipe?.id}>
            <Accordion>
        <AccordionSummary
          style={{wordSpacing:"2px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
            >
            <Link to={`/menus/${id}/recipes/${recipe.id}`}>
            <p>{recipe?.name}</p>
          </Link>     
        </AccordionSummary>
            <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <Link to={`/menus/${id}/recipes/${recipe.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={()=> handleDelete(recipe.id)}>Delete</button>
            </div>             
        </AccordionDetails>
        </Accordion>
           
        </div>
      ))}
      <Link to={`/menus/${id}/recipes/new`}>
        <button>Create</button>
      </Link>
    </div>
  )
}
