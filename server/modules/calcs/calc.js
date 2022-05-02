// requires
const express = require('express');
 const router = express.Router();
 

 router.get('/',(req,res)=>{
     console.log('/calc GET');
     res.send(data);
 });


router.post('/', (req, res) => {
    // TODO: update this to actually calculate the incoming value
    if (req.body.operator === '+'){
    res.send({result: Number(req.body.leading) + Number(req.body.trailing)});
    }
    if (req.body.operator === '-'){
    res.send({result: Number(req.body.leading) - Number(req.body.trailing)});

    }if (req.body.operator === '*'){
    res.send({result: Number(req.body.leading) * Number(req.body.trailing)});
    }
    if (req.body.operator === '/'){
    res.send({result: Number(req.body.leading) / Number(req.body.trailing)});
    };
});

 module.exports = router;
