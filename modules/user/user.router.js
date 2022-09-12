import { Router } from "express";
import {allUsers, deleteUser, searchUser, signIn, signUp, updateUser} from './controller/user.js'
const router = Router()


router.get("/allUsers",allUsers )
router.post("/signup" , signUp)
router.post("/signin" , signIn)
router.patch('/user/:id' , updateUser)
router.delete('/user/:id', deleteUser)
router.get("/user/search" , searchUser)

export default router