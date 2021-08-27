import api from "./api-config";

export const readRecipes = async () => {
  const res = api.get('/menus/:menu_id/recipes')
  return res.data
}

export const readRecipe = async (id) => {
  const res = api.get(`/menus/:menu_id/recipes/${id}`)
  return res.data
}

//This may need to be adjusted
export const createRecipe = async (data) => {
  const res = api.post('/menus/:menu_id/recipes', { recipe: data })
  return res.data
}

export const updateRecipe = async (id, data) => {
  const res = api.put(`/menus/:menu_id/recipes/${id}`, { recipe: data })
  return res.data
}

export const deleteRecipe = async (id) => {
  const res = api.delete(`/menus/:menu_id/recipes/${id}`)
  return res
}

