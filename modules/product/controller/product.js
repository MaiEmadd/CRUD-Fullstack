    import sql from '../../../DB/connection.js'
    
    export const addProduct =(req, res , next)=>{
        const {name, description, price, userID} = req.body
        sql.execute(`insert into products(name, price, description, userID) values('${name}', ${price}, '${description}', ${userID})`,(error, result, fields)=>{
            if (error) {
                res.json({message:'query error'})
            } else {
                if (result.affectedRows) {
                    res.json({message:'Done', result })
                } else {
                    res.json({message:'failed to add product' })
                }
            }
        })
    }

    export const getAllProducts = (req, res, next)=>{
        sql.execute(`select u.id as u_id, u.name as user_name, p.name as p_name, u.email, p.id as P_id, p.price, p.description from users as u inner join products as p on u.id = p.userID`, (error, result, fields)=>{
            if (error) {
                res.json({message:'query error'})
            } else {
                res.json({message:'Done', result})

            }
        })
    }

    export const getProductById = (req, res, next)=>{
        const {id} = req.params
        sql.execute(`select u.id as u_id, p.name, u.email, p.id as P_id, p.price, p.description from users as u inner join products as p on u.id = p.userID where p.id = ${id}`, (error, result, fields)=>{
            if (error) {
                res.json({message:'query error'})
            } else {
                    res.json({message:'Done', result })
            }
        })
    }

    export const updateProduct = (req, res, next)=>{
        const {id} = req.params
        const {name , price, description} = req.body
        sql.execute(`update products set name = '${name}', price = ${price}, description='${description}' where id = ${id}`, (error, result)=>{
            if (error) {
                res.json({message:'query error'})
            } else {
                if (result.affectedRows) {
                    res.json({message:'Done', result })
                } else {
                    res.json({message:'In-valid id' })
                }
            }
        })
    }

    export const deleteProduct = (req, res, next)=>{
        const {id} = req.params
        sql.execute(`delete from products where id = ${id}`, (error, result, fields)=>{
            if (error) {
                res.json({message:'query error'})
            } else {
                if (result.affectedRows) {
                    res.json({message:"Done", result })
                } else {
                    res.json({message:'In-valid id' })
                }
            }
        })
    }

    export const getByPrice = (req, res, next)=>{
        const {price} = req.params
        sql.execute(`select * from products where price > ${price}`, (error, result, fields)=>{
            if (error) {
                res.json({message:'query error'})
            }  
            else {
                    res.json({message:'Done' , result })
            }
        })
    }
