import express from "express";

const app = express();
var newNote =["cook","study"];


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.listen(3000);

app.post("/submit",(req,res)=>{
    if(req.body["addedNote"]=="delete"){
        if(newNote.length == 0){
            res.render("index.ejs");

        }else{
            newNote.pop();
            res.render("index.ejs",{
            note: newNote
            });
        }
        
    }else{
        newNote.push(req.body["addedNote"]);
        res.render("index.ejs",{
            note: newNote
        });
    }

   

});

app.get("/",(req,res)=>{

    res.render("index.ejs");

});