import http from "../service-common";
class empService{
    getAll()
    
    {
        return http.get("/emps")
    }
    addEmp(data)
    {
return http.post("/addEmp",data);
    }
    updateEmp(data,id)
    {
        return http.put("/update?id="+id,data)
    }
    deleteEmp(id)
    {
        return http.delete("/delete?id="+id)
    }
}
export default new empService();
