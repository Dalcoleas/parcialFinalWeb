var express = require('express');
var PersonalModel = require('../models/PersonalModel');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Administrador de Personal' });
});


router.post('/crear', (req,res,next)=>{
  var newPersonal = new PersonalModel();
  console.log(req.body);
  newPersonal.nombre = req.body.nombre;
  newPersonal.cv = req.body.cv;
  newPersonal.contratos = req.body.contratos;

  newPersonal.save((error, personal)=>{
    if(error){
      return res.status(500).json({success: false});
    }
    if(personal){
      return res.status(200).json({success: true});
    }
    else{
      return res.status(404).json({success: false});
    }
  });
});

router.put('/update/:id', (req, res, next)=>{
  var id = req.params.id;
  var body = {nombre : req.body.nombre, cv : req.body.cv, contratos: req.body.contratos};
  PersonalModel.findByIdAndUpdate(id,body, {new: true}, (error, personal)=>{
    if(error){
      return res.status(500).json({success: false});
    }
    if(personal){
      return res.status(200).json({success: true});
    }
    else{
      return res.status(404).json({success: false});
    }
  })
});

router.delete('/delete/:id',(req,res,next)=>{
  var personalId = req.params.id;
  PersonalModel.findByIdAndDelete(personalId,{new : true}, (error, personal)=>{
    if(error){
      return res.status(500).json({success: false});
    }
    if(personal){
      return res.status(200).json({success: true});
    }
    else{
      return res.status(404).json({success: false});
    }
  })
});

router.get('/getPersonal', (req,res,next)=>{
  PersonalModel.find({}, (error, personal)=>{
    if(error){
      return res.status(500).json({success: false});
    }
    if(personal){
      return res.status(200).json({success: true});
    }
    else{
      return res.status(404).json({success: false});
    }
  })
});

router.get('/getPersonal/:id', (req,res,next)=>{
  var id = req.params.id;
  PersonalModel.findById(id, (error, personal)=>{
    if(error){
      return res.status(500).json({success: false});
    }
    if(personal){
      return res.status(200).json({success: true});
    }
    else{
      return res.status(404).json({success: false});
    }
  })
});



module.exports = router;
