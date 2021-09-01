import api from "./api-config";

export const readRecipes = async (id) => {
  const res = await api.get(`/menus/${id}/recipes`)
  return res.data
}

export const readRecipe = async (id) => {
  const res = await api.get(`/menus/${id}/recipes/${id}`)
  return res.data
}

export const createRecipe = async (id, data) => {
  const res = await api.post(`/menus/${id}/recipes`, { recipe: data })
  return res.data
}

export const updateRecipe = async (id, data) => {
  const res = await api.put(`/menus/${id}/recipes/${id}`, { recipe: data })
  return res.data
}

export const deleteRecipe = async (id) => {
  const res = await api.delete(`/menus/:menu_id/recipes/${id}`)
  return res
}

