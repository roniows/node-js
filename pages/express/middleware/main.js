const express = require('express');
const app = express();
/* we can use middleware like this via required */
/* start */
var mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))
/* end */

const myMiddleware = (req,res,next) =>{
    console.log('middleware activated')
    
    if(req.params.name == 'roni')
        console.log(`Welcome ${req.params.name} you are authorized`)
    else
        console.log(`Sorry ${req.params.name} you are not authorized`)
    next();
}
//app.use(myMiddleware);
app.get('/user/:name',myMiddleware,(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})





app.listen('3000',()=>{
    console.log("server running")
});