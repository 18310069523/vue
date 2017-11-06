import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import mockData from '../mock'

const mockApi = new AxiosMockAdapter(axios)

mockApi.onGet('/api/getStaffList').reply((config) => {
  let data = mockData.staffData.splice(0, 20)
  return [200, {
    count: 100,
    data: data
  }]
})

function isUserList (item = {}) {
  let flg = false
  console.log(item)
  for (let listItem of mockData.userList) {
    if (item.username === listItem.username && item.userpwd === listItem.userpwd) {
      flg = listItem
    }
  }
  return flg
}

mockApi.onPost('/api/login').reply((config) => {
  let {
    username,
    userpwd
  } = JSON.parse(config.data)
  let user = isUserList({username, userpwd: userpwd + ''})
  console.log(user)
  if (user) {
    return [200, user]
  } else {
    return [403, {
      msg: '用户名密码错误'
    }]
  }
})

mockApi.onGet('/api/getRules').reply((config) => {
  console.log(config)
  let {
    type
  } = config.params

  return [200, mockData.rules[type]]
})

export default axios
