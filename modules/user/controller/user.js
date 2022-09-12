import sql from '../../../DB/connection.js'


export const allUsers = (req, res, next) => {
    sql.execute(`select  * from users `, (err, result, fields) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

export const updateUser = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const { age } = req.body;
    sql.execute(`update users set age= ${age} where id =${id}`, (err, result, fields) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            if (result.affectedRows) {
                res.json({ message: "Done", result })
            } else {
                res.json({ message: "In-valid account", result })
            }
        }
    })
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    sql.execute(`delete from users where id = ${id}`, (err, result, fields) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            if (result.affectedRows) {
                res.json({ message: "Deleted success" })
            } else {
                res.json({ message: "In-valid account" })
            }
        }
    })
}

export const searchUser = (req, res) => {
    console.log(req.query);
    const { searechKey } = req.query

    sql.execute(`select * from users where userName like '%${searechKey}%'`,
        (err, result) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                res.json({ message: "Done", result })

            }
        })
}




export const signUp = (req , res, next)=>{
    const {name, password, email, age, phone} = req.body
    sql.execute(`insert into users(name, email, password, age , phone) values('${name}', '${email}','${password}', ${age}, '${phone}' )`,(error, result)=>{
        if (error) {
            res.json({message:'query error'})
        } else {
                res.json({message:'Done', result })
        }
    })
}


export const signIn = (req , res, next)=>{
    const {email, password} = req.body
    sql.execute(`select id from users where email = '${email}' and password = '${password}'`,(error, result)=>{
        if (error) {
            res.json({message:'query error' , error})
        }  else {
            if (result.length) {
                res.json({message:'Done', result })
            } else {
                res.json({message:'Email Password missmatch' })

            }
        }
    })
}