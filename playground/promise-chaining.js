require('../src/db/mongoose')
const User = require('../src/models/user')

//6725e673bb97c53cf9f5be20

// User.findByIdAndUpdate('6725e673bb97c53cf9f5be20', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age: age})
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeAndCount('6725e673bb97c53cf9f5be20', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

