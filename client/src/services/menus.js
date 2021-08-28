import api from './api-config'

export const readAllMenus = async () => {
  const res = await api.get('/menus')
  return res.data
}

export const createMenu = async (data) => {
  const res = await api.post('/menus', { menu: data })
  return res.data
}

export const readOneMenu = async (id) => {
  const res = await api.get(`/menus/${id}`)
  return res.data
}

export const updateMenu = async (id, data) => {
  const res = await api.put(`/menus/${id}`, { menu: data })
  return res.data
}

export const destroyMenu = async (id) => {
  const res = await api.delete(`/menus/${id}`)
  return res
}