// const express = require("express");//ES5
import express from 'express'//ES6
import userRouter from './modules/user/user.router.js'
import productRouter from './modules/product/product.router.js'
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(productRouter)


app.get("*", (req, res, next) => {
    res.json({ message: "404 page not found" })
})
app.listen(3000, () => {
    console.log("Running............");
})