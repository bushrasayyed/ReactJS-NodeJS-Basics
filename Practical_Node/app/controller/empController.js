const Emp=require('../models/Employee')

exports.create=(req,res)=>
{
    const emp=new Emp(
        {
            id:req.body.id,
            name:req.body.name,
            age:req.body.age,
        }
    );

    Emp.create(emp,(err,data)=>          //coz Emp.create is having err.result in Employee.js
    {
        if(err)
        {
            res.status(500).send(
                {
                    message:err.message
                }
            )
        }
        else
        res.send(data)
    })
}
// To export this query 
exports.getAll=(req,res)=>
    {
    
        Emp.getAll((err,data)=>          //coz Emp.create is having err.result in Employee.js
        {
            if(err)
            {
                res.status(500).send(
                    {
                        message:err.message
                    }
                )
            }
            else
            res.send(data)
        })
}
exports.update=(req,res)=>
        {
            const emp=new Emp(
                {
                    name:req.body.name,
                    age:req.body.age,
                }
            );
        const id=req.query.id
            Emp.update(id,emp,(err,data)=>          //coz Emp.create is having err.result in Employee.js
            {
                if(err)
                {
                    res.status(500).send(
                        {
                            message:err.message
                        }
                    )
                }
                else
                res.send(data)
            })
}

exports.delete=(req,res)=>
            {
            const id=req.query.id
                Emp.delete(id,(err,data)=>          
                {
                    if(err)
                    {
                        res.status(500).send(
                            {
                                message:err.message
                            }
                        )
                    }
                    else
                    res.send(data)
                })
}