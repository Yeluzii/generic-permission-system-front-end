import http from '@/http'
import { SysRole, RoleListParm } from './RoleModel'
//新增
export const addApi = (parm: SysRole) => {
  return http.post('/api/role', parm)
}

// 角色列表
export const getListApi = (parm: RoleListParm) => {
  return http.post('/api/role/getList', parm)
}
