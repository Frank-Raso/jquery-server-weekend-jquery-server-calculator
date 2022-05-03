// requires
const express = require('express');
 const router = express.Router();

 let equasion = [
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
     res.send( equasion );
 });

//  router.post( '/', ( req, res )=>{
//     console.log( '/calc POST:', req.body );
//     equasion.push( req.body );
//     res.sendStatus( 200 );
// })

    router.post( '/', ( req, res )=>{
        console.log( '/calc POST:', req.body );
        equasion.push( req.body );
            res.sendStatus(200);

          if (req.body.operator === '-'){
            req.body.result = Number(req.body.leading) - Number(req.body.trailing)

            equasion.result.push(req.body.result)
                //res.send(equasion);
                    res.sendStatus( 200 );

          }if (req.body.operator === '+'){
            req.body.result = Number(req.body.leading) + Number(req.body.trailing)

            equasion.result.push(req.body.result)
                //res.send(equasion);
                    res.sendStatus( 200 );

          }if (req.body.operator === '*'){
            req.body.result = Number(req.body.leading) * Number(req.body.trailing)

            equasion.result.push(req.body.result)
                //res.send(equasion);
                    res.sendStatus( 200 );

          }if (req.body.operator === '/'){
            req.body.result = Number(req.body.leading) / Number(req.body.trailing)

            equasion.result.push(req.body.result)
                //res.send(equasion);
                    res.sendStatus( 200 );
          }
    });


//==========tried this for server history, didnt work but keeping around for future========================
//    if (req.body.operator === '+'){
//         req.body.result.push( Number(req.body.leading) + Number(req.body.trailing));
//            res.sendStatus( 200 );           
//     }if (req.body.operator === '-'){
//          equasion.result.push( Number(req.body.leading) - Number(req.body.trailing));
//             res.sendStatus( 200 );
//     }if (req.body.operator === '*'){
//          equasion.result.push( Number(req.body.leading) * Number(req.body.trailing));
//             res.sendStatus( 200 );
//     }if (req.body.operator === '/'){
//          equasion.result.push( Number(req.body.leading) / Number(req.body.trailing));
//              res.sendStatus( 200 );
//     }
// });


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
