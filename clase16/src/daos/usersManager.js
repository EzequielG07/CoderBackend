import { usersModel } from '../db/models/users.model.js'

export default class UsersManager {
  // data => {email:''} {name:''} {id:''}
  async findUser(data) {
    try {
      const user = await usersModel.find(data).explain('executionStats')
      return user
    } catch (error) {
      console.log(error)
    }
  }

  async addUsers(users) {
    try {
      await usersModel.create(users)
      return 'Users added'
    } catch (error) {
      console.log(error)
    }
  }
}
