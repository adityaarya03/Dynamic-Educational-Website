const { response } = require('express');
const express=require('express')
const {route}=require('express/lib/application')
const async=require("hbs/lib/async");
const Detail=require("../models/Detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');
const Contact=require("../models/Contact");
const Download = require('../models/Download');
const Learn = require("../models/Learn")

const routes=express.Router()
routes.get("/",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ae095eb6b917e8919e4d80"})
    const slides=await Slider.find()
    const services=await Service.find()
    const download=await Download.find()
    const learn=await Learn.find()

    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        download:download,
        learn:learn
    }) 
});


routes.get("/download",async(req,res)=>{
    const details=await Detail.findOne({"_id":"63ae095eb6b917e8919e4d80"})
    const download=await Download.find()
    res.render("download",{
        details:details,
        download:download
    })
})

routes.get("/learn",async(req,res)=>{
    const details=await Detail.findOne({"_id":"63ae095eb6b917e8919e4d80"})
    const learn=await Learn.find()
    res.render("learn",{
        details:details,
        learn:learn
    })
})



routes.post("/process-contact-form",async(request,response)=>{
    console.log("form is submitted")
    console.log(request.body)
    //save the data to db
    try{
        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes