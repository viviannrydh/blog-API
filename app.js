 const express=require('express');
 const app=express();
 const mongoose=require('mongoose')
 const bodyParser=require('body-parser');
 const cors=require('cors');
 //middleware
 app.use(cors());
 app.use(bodyParser.json());
 const postRouter=require('./routes/posts');
 app.use('/posts', postRouter);
 //app.get('/',checkUserLogin)
 
 // Routes
 app.get('/',(req,res)=>{
     res.send('Home page')
 })

// connect to DB
mongoose.connect(
    'mongodb+srv://blog_user:198400@cluster0.tynli.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {useNewUrlParser: true,useUnifiedTopology: true},
    ()=>{console.log('DB Conected')}
)



 app.listen(3000); //listen through port 3000