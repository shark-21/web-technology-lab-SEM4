const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


const bodyparser = require("body-parser");



//middleware
app.use(cors())
app.use(express.json());

const data = {
    portal : "GeeksforGeeks",
    knowledge : "unlimited",
    location : "Noida"  
}
  
app.get('/' , (req,res)=>{
  
    res.json(data); 
})
  









//create
app.post("/tt",async(req,res) =>{
    try{
        const user = req.body.username;
        const pass = req.body.password;
  
        

        const newtt = await pool.query(
            "INSERT INTO entries (username,password) VALUES ($1,$2)",
            [user,pass]
            );
        
        res.json(newtt);

    } catch(err){
        console.error(err.message);
    }
});



//update
// app.put("/tt/:id",async(req,res) => {
//     try{
//         const {id} = req.params;
//         const {description} = req.body;
//         const updatett = await pool.query
//         ("UPDATE tt SET description = $1 WHERE tt_id = $2",
//         [description,id]
//         );

//         res.json("updated")
//     } catch {err} {
//         console.log(err.message);
//     }
// })

// //events show 
// app.get('/tt', async(req, res) => {
//     try{
//         const display = await pool.query("SELECT * FROM events");
//         res.json(display);
//     }catch(err){
//         console.log(err.message);
//     }
// })
  
// Sample JSON data

// Server setup
app.listen(5000, () => {
    console.log("server has started on port 5000")
});

