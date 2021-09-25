// const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')



router.post('/signup',(require,response)=>{
    // response.send('send')
 const signedUpUser=new signUpTemplateCopy({
     fullName:request.body.fullName,
     username:require.body.username,
     email:require.body.email,
     password:require.body.password
 })
 signedUpUser.save()
 .then(data=>{
     response.json(date)
 })
 .catch(error =>{
     response.json(error)
 })
})
module.exports = router