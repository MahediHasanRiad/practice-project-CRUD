const router = require('express').Router()
const verifyToken = require('../Middlewares/verify')
const {
    studentRegister,
    logInStudent,
    UpdatePassword,
    openProfile,
    updateProfile
} =require('../Controllers/StudentController')

const {
    createTask
} = require('../Controllers/s_DailyTaskController')

// student profile
router.post('/', studentRegister)
router.get('/login', verifyToken, logInStudent)
router.post('/updatePassword', verifyToken, UpdatePassword)
router.get('/profile/:id', verifyToken, openProfile)
router.post('/:id', verifyToken, updateProfile)

// student task
router.post('/tasks', verifyToken, createTask)


router.get('*', (req, res) => {
    res.send('try another path')
})

module.exports = router