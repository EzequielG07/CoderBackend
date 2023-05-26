import { Router } from 'express'
import { __dirname } from '../utils.js'
import UsersManager from '../daos/usersManager.js'
import fs from 'fs'

const router = Router()
const path = __dirname + '/data/Users.json'
const usersManager = new UsersManager()

router.get('/',async(req,res)=>{
  const data = {first_name:'Alida'}
  const user = await usersManager.findUser(data)
  res.json({user})
})

router.get('/add', async (req, res) => {
  const usersData = await fs.promises.readFile(path, 'utf8')
  await usersManager.addUsers(JSON.parse(usersData))
  res.json({ message: 'Users added' })
})

router.get('/paginate',async(req,res)=>{
  const {limit=15,page=1} = req.query
  const response = await usersManager.paginateFun(limit,page)
  res.json({response})
})
export default router
