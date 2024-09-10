module.exports=app=>{
    const emp=require('../controller/empController')

    const route=require('express').Router();

    route.post("/addEmp",emp.create);
    route.get("/Emps",emp.getAll);  //To fetch the request 
    route.put("/update",emp.update);
    route.delete("/delete",emp.delete);

    app.use('/api',route)
   
}