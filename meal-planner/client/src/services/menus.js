import api from './api-config'

export const readAllMenus = async () => {
  const res = await api.get('/menus')
  return res.data
}

export const createMenu = async (data) => {
  const res = await api.post('/menu', { menu: data })
  return res.data
}

export const readOneMenu = async (id) => {
  const res = await api.get(`/menu/${id}`)
  return res.data
}

export const updateMenu = async (id, data) => {
  const res = await api.put(`/menu/${id}`, { menu: data })
  return res.data
}

export const destroyMenu = async (id) => {
  const res = await api.delete(`/menu/${id}`)
  return res.data
}