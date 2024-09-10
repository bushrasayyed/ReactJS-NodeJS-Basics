const sql=require('./db')

const Emp=function(emp)         //constructor
{
    this.id=emp.id;
    this.name=emp.name;
    this.age=emp.age;
};
//Q1 post query 
Emp.create=(emp,result1)=>
{
    sql.query("insert into emp set ?",emp,(err,result)=>{
        if(err){
            console.log("Error Occurred",err)
            result1(err,null);
        }

        //if no error
        result1(null,{
            id:result.insertId,
            ...emp        //destructuring
        }
        );
    })
}
//Q2 for get request 
Emp.getAll=(result1)=>
    {
        sql.query("select * from emp ",(err,result)=>{
            if(err){
                console.log("Error Occurred",err)
                result1(err,null);
            }
    
            //if no error
            result1(null,{result}
            );
        })
}

//Q3 Update request
Emp.update=(id,emp,result1)=>
        {
            sql.query(`update emp set name='${emp.name}',age=${emp.age} where id=${id}`,(err,result)=>{
                if(err){
                    console.log("Error Occurred",err)
                    result1(err,null);
                }
        
                //if no error
                result1(null,{emp}
                );
            })
            // To run set method to put and  update url-> http://localhost:5000/api/update?id=3

}
//Q4 Delete request
 Emp.delete=(id,result1)=>
            {
                sql.query(`delete from emp where id=?`,[id],(err,result)=>{
                    if(err){
                        console.log("Error Occurred",err)
                        result1(err,null);
                    }
            
                    //if no error
                    result1(null,result
                    );
                })
                // To run delete do this on thunderclient -> http://localhost:5000/api/delete?id=3

}

module.exports=Emp;