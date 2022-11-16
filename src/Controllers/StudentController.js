const StudentModel = require("../Models/studentModel")
const jwt = require('jsonwebtoken')
const { json } = require("express")

exports.studentRegister = (req, res) => {

    const query = req.body

    StudentModel.create(query, (err, data) => {
        if(err){
            res.json({massage: 'error', err})
        }else{
            const payload = {
                data: data
            }
            const token = jwt.sign(payload, 'riad123')
            res.json({massage: 'success', data, token})
        }
    })
}

exports.logInStudent = (req, res) => {
    const username = req.body['UserName']
    const password = req.body['Password']

    StudentModel.find({UserName: username, Password: password}, (err, data) => {
        if(err){
            res.json({massage: 'error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}

exports.UpdatePassword = (req, res) => {
    
    
}


exports.openProfile = (req, res) => {
    let id = req.params.id
    let reqId = {_id: id}
    let query = req.headers.username

    StudentModel.find({UserName: query, _id: reqId}, (err, data) => {
        if(err){
            res.json({massage: 'error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}

exports.updateProfile = (req, res) => {
    const id = req.params.id
    const query = {_id: id}
    const update = {
        Name: req.body['Name'],
        Roll: req.body['Roll'],
        Class: req.body['Class'],
        Address: req.body['Address']
    }

    StudentModel.updateOne(query, update, (err, data) => {
        if(err){
            res.json({massage: 'error', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}