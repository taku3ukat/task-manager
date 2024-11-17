const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up pn port' + port)
})


const bcrypt = require('bcryptjs')
const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)
    
    // hasheは不可逆なので、ハッシュ値で比較
    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()