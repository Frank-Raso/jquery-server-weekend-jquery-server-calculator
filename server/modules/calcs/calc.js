// requires
const express = require('express');
 const router = express.Router();

 let equation = [
    {
        leading: '1',
        operator: '+',
        trailing:'1',
        operator2:'=',
        result:'2',
    },
];
 router.get('/',(req,res)=>{
     console.log('/calc GET');
     res.send( equation );
 });
    router.post( '/', ( req, res )=>{
        console.log( '/calc POST:', req.body );
        equation.push( req.body );
            res.sendStatus(200);

          if (req.body.operator === '-'){
            req.body.result = Number(req.body.leading) - Number(req.body.trailing)

            equation.result.push(req.body.result)
                //res.send(equation);
                    res.sendStatus( 200 );

          }if (req.body.operator === '+'){
            req.body.result = Number(req.body.leading) + Number(req.body.trailing)

            equation.result.push(req.body.result)
                //res.send(equation);
                    res.sendStatus( 200 );

          }if (req.body.operator === '*'){
            req.body.result = Number(req.body.leading) * Number(req.body.trailing)

            equation.result.push(req.body.result)
                //res.send(equation);
                    res.sendStatus( 200 );

          }if (req.body.operator === '/'){
            req.body.result = Number(req.body.leading) / Number(req.body.trailing)

            equation.result.push(req.body.result)
                //res.send(equation);
                    res.sendStatus( 200 );
          }
    });

//==============original while using function equals() on client only  ========================
//     }if (req.body.operator === '+'){
//     res.send({result: Number(req.body.leading) + Number(req.body.trailing)});

//     }if (req.body.operator === '-'){
//     res.send({result: Number(req.body.leading) - Number(req.body.trailing)});

//     }if (req.body.operator === '*'){
//     res.send({result: Number(req.body.leading) * Number(req.body.trailing)});
//     }
//     if (req.body.operator === '/'){
//     res.send({result: Number(req.body.leading) / Number(req.body.trailing)});
//     }
// });

 module.exports = router;
