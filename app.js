// Task1: initiate app and run server at 3000
// import express,bodydyparser,cors,mongoose
var Express=require("express");
var Bodyparser=require("body-parser");
var Cors=require("cors");
var Mongoose=require("mongoose");

const { urlencoded } = require("body-parser");
const { EmployeeModel } = require("./model/employee");
var app=new Express(); 

app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));

app.use(Cors());















// code
const path=require('path');
app.use(Express.static(path.join(__dirname+'/dist/FrontEnd')));


// Task2: create mongoDB connection 
Mongoose.connect("mongodb+srv://presi:Jinkumon14@cluster0.ndxqfl6.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'

app.get('/api/employeelist',(req,res)=>{
    res.send('employee list')

})




//TODO: get single data from db  using api '/api/employeelist/:id'
app.post('/api/employeelist/:id=req.params.id',async(req,res)=>{
    var data=req.body
    var employee=new EmployeeModel(data)
    await employee.save((err,data)=>{if(err){
        res.json({"status":"error","error":err})
    }
    else{res.json({"status":"success","data":data})}
}
)
console.log(data)


})
        


// code
// let id=req.params.id;





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist',(req,res)=>{
    EmployeeModel.find((err,location)=>{ if(err){
        res.json({"status":"error","error":err})

    }
    else{res.json(location)
    }
}
   )
})

app.post('/api/employeelist',(req,res)=>{
    var position=req.body;
    EmployeeModel.find(position,(err,position)=>{ if(err){
        res.json({"status":"error","error":err})

    }
    else{res.json(position)
    }
}
   )
})

app.post('/api/employeelist',(req,res)=>{
    var salary=req.body;
    EmployeeModel.find(salary,(err,salary)=>{ if(err){
        res.json({"status":"error","error":err})

    }
    else{res.json(salary)
    }
}
   )
})







//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.post('/api/employeelist/:req.params.id',(req,res)=>{
    res.send('delete an employee')
})

app.delete('/api/employeelist/:req.params.id',(req,res)=>{
    var position=req.body.position;
    var data=req.body;
    EmployeeModel.findOneAndDelete(
        {"admissionNo":position},data,(err,data)=>{
            if(err){
                res.json({"status":"error","error":err})

            }
            else{
                res.json({"status":"updated","data":data})
            }

        }
    )


})





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/update',(req,res)=>{
    var salary=req.body.salary;
    var data=req.body;
    EmployeeModel.findOneAndUpdate(
        {"salary":salary},data,(err,data)=>{
            if(err){
                res.json({"status":"error","error":err})

            }
            else{
                res.json({"status":"updated","data":data})
            }

        }
    )
    })


// code
// let id=req.params.id;
//! dont delete this code. it connects the front end file.

// code
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

app.listen(3000,()=>{
    console.log('server listening to port 3000')
});


// extra
// instead of postman,the given frontend can be use
// to run front end
//terminal->nodemon app.js
// check browser ->localhost:3000