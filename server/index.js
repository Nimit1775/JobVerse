import express from 'express';  
import dotenv from 'dotenv'; 
import bodyParser from 'body-parser';
const app = express();  
dotenv.config();
app.use(express())  ; 

app.get("/" , (req , res)=>{
    res.send(" server started ")  ; 

})
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})  ;

