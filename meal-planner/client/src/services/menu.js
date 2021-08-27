import api from './api-config'

export const getAllMenus = () => {
  const res = await api.get('/menus')
  return res.data
}

