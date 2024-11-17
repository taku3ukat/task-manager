require('../src/db/mongoose')
const Task = require('../src/models/task')

//6726ec07b69dc272c551cc02

Task.findByIdAndDelete('6726ec07b69dc272c551cc02').then((task) => {
    console.log(task)
    return Task.countDocuments()
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (_id) => {
    const task = await Task.findByIdAndDelete(_id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6726ec92aa00ba54f2920bc6').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

// User.findByIdAndDelete('6725e673bb97c53cf9f5be20', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })