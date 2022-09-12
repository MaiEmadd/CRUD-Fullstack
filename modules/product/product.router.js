import {Router} from 'express'
import { addProduct, deleteProduct, getAllProducts, getByPrice, getProductById, updateProduct } from './controller/product.js'
const router = Router()

router.post('/product', addProduct)
router.get('/products', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/price/:price', getByPrice)


export default router