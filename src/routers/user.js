const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res)=>{
    try {
        // userスキーマに対し、下記の静的関数"findByCredentials"を呼び出している。
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/users', async (req, res)=>{

    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res)=>{
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    
})

router.patch('/users/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        // 1ドキュメント(レコード)内の特定箇所を更新できるようにforEachを使用
        const user = await User.findById(req.params.id)
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save()

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user){
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router