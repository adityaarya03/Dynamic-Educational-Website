const express = require("express")
const { response } = require('express');
const hbs=require("hbs")
const app=express()
const routes=require('./routes/main')
const bodyParser=require('body-parser')
const mongoose=require("mongoose")
const { handlebars } = require("hbs")
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const Contact=require("./models/Contact")
const Download=require("./models/Download")
const Learn=require("./models/Learn")

//callback
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)
//(template engine)
app.set('view engine','hbs')
app.set("views","views") 
hbs.registerPartials("views/partials")

//db connections
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost/Website",()=>{
    console.log("db connected")


    // Download.create([
    //             {
    //                 icon:'fa-brands fa-python',
    //                 title:'Provide Best Courses',
    //                 description:'We provide best courses that helps our students learn and get placements',
    //                 linkText:'Check',
    //                 link:'#!'
    //             },
    //             {
    //                 icon:'fa-sharp fa-solid fa-download',
    //                 title:'Download Notes',
    //                 description:'We provide best Handwritten Notes and scanned notes',
    //                 linkText:'Check',
    //                 link:'#!'
    //             },
    //             {
    //                 icon:'fa-sharp fa-solid fa-code',
    //                 title:'Start Coding',
    //                 description:'Start Your Coding Journey with us',
    //                 linkText:'Check',
    //                 link:'#!'
    //             }
    // ])





    // Learn.create([
    //             {
    //                 icon:'fa-brands fa-python',
    //                 title:'Provide Best Courses',
    //                 description:'We provide best courses that helps our students learn and get placements',
    //                 linkText:'Check',
    //                 link:'#!'
    //             },
    //             {
    //                 icon:'fa-sharp fa-solid fa-download',
    //                 title:'Download Notes',
    //                 description:'We provide best Handwritten Notes and scanned notes',
    //                 linkText:'Check',
    //                 link:'#!'
    //             },
    //             {
    //                 icon:'fa-sharp fa-solid fa-code',
    //                 title:'Start Coding',
    //                 description:'Start Your Coding Journey with us',
    //                 linkText:'Check',
    //                 link:'#!'
    //             }
    // ])



    // Service.create([
    //     {
    //         icon:'fa-sharp fa-solid fa-book',
    //         title:'Provide Best Courses',
    //         description:'We provide best courses that helps our students learn and get placements',
    //         linkText:'Check',
    //         link:'#!'
    //     },
    //     {
    //         icon:'fa-sharp fa-solid fa-download',
    //         title:'Download Notes',
    //         description:'We provide best Handwritten Notes and scanned notes',
    //         linkText:'Check',
    //         link:'#!'
    //     },
    //     {
    //         icon:'fa-sharp fa-solid fa-code',
    //         title:'Start Coding',
    //         description:'Start Your Coding Journey with us',
    //         linkText:'Check',
    //         link:'#!'
    //     }

    // ])

    // Slider.create([
    //     {
    //         title:"Create Your Own Website",
    //         subTitle:"Professional Developers",
    //         imageUrl:"/static/images/s1.png"
    //     },
    //     {
    //         title:"Frontend",
    //         subTitle:"With Best Desgin",
    //         imageUrl:"/static/images/s2.png"
    //     },
    //     {
    //         title:"Backend",
    //         subTitle:"By Node js and mongodb",
    //         imageUrl:"/static/images/s3.png"
    //     },
    // ])
//     Detail.create({
//         brandName:"DevelopZen",
//         brandIconUrl:"https://yt3.ggpht.com/TxPDnJmd4H1KAVJEKU4hQrqo36K19Fk80frPYw6pLhuj1-NeZhaFQahGEgvZXcDoDvW9I2Boog=s176-c-k-c0x00ffffff-no-rj-mo",
//         links:[{
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact"
//         },
//     ]
//     })
})
mongoose.con

//listen
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");
})