const express=require('express')

const cors=require('cors')

const app=express();

var corsPolicy={
    origin:"*"
}

app.use(cors(corsPolicy))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//we can do this for every route
//eg: require("./app/routes/student.routes")(app)
require("./app/routes/emp.routes")(app);

app.listen(5000,()=>{
    console.log("Server Started successfully!!!")
})