$(document).ready(readyNow);

function readyNow(){
$('#equalButt').on('click',equal,)
$('#addButt').on('click',addition,)
$('#subtractButt').on('click',subtract,)
$('#multiplyButt').on('click',multiply,)
$('#divideButt').on('click',divide,)
$('#clearButt').on('click',clear,)


}
let answer;
let symbol=[];

function equal(){

    // create object to send to server
    let data = {
        leading: Number($('#inputBox1').val()),
        operator: symbol[symbol.length -1],
        trailing: Number($('#inputBox2').val())
    }

    $.ajax({
        method: 'POST',
        url: '/calc',
        data: data,
    }).then(function(response){
        console.log('back from POST',response.result)
        // update the UI with the result from the server
        const el = $('#out');
        const el2 = $('#answerOut');
        el2.empty();
        el2.append(response.result);
        el.append(`<ul>${data.leading } ${data.operator} ${data.trailing} = ${response.result} </ul>`);
        $('input').val('')
    }).catch(function(err){
        console.log(err);
        alert('error');
    });
    //end of equal
    //below is comment out for client based only.
    
    
    // let problem={
    // One:  Number($('#inputBox1').val()),
    // Two:  Number($('#inputBox2').val())
    // }

    // if(($('#inputBox1').val() === '' || $('#inputBox2').val() === '')){
    //     alert('one or more fields are blank');
    //     }else{


    // el= $('#out');
    // el2= $('#answerout');
    // el2.empty()

    // if (symbol[symbol.length -1] === '+'){
    //     (answer = problem.One+problem.Two);
    //         el.append(`<ul> ${problem.One} + ${problem.Two} = ${answer.toFixed(2)} </ul>`);
    //         el2.append(answer);
    // }if (symbol[symbol.length -1] === '-'){
    //     (answer = problem.One-problem.Two);
    //         el.append(`<ul> ${problem.One} - ${problem.Two} = ${answer.toFixed(2)} </ul>`)
    //         el2.append(answer);

    // }if (symbol[symbol.length -1] === '*'){
    //     (answer = problem.One*problem.Two);
    //         el.append(`<ul> ${problem.One} * ${problem.Two} = ${answer.toFixed(2)} </ul>`)
    //         el2.append(answer);

    // }if (symbol[symbol.length -1] === '/'){
    //     (answer = problem.One/problem.Two);
    //         el.append(`<ul> ${problem.One} / ${problem.Two} = ${answer.toFixed(2)} </ul>`)
    //         el2.append(answer);

    //                 }
    //                 $('input').val('')
    //             }
}
function addition(){
    symbol.push('+');
    buttonColor();
    $('#addButt').css('background-color','green');
    container();
}
function subtract(){
    symbol.push('-');
    buttonColor();
    $('#subtractButt').css('background-color','green');
    container();
}
function multiply(){
    symbol.push('*');
    buttonColor();
    $('#multiplyButt').css('background-color','green');

     container()
}
function divide(){
    symbol.push('/');
    buttonColor();
    $('#divideButt').css('background-color','green');
    container();
}
function clear(){
    $('input').val('');
    buttonColor();
    $('#answerOut').empty();

}
function container(){
    
    if (symbol[symbol.length -1] === '+'){
        console.log('Addition is Working!');
    }
    if (symbol[symbol.length -1] === '-'){
        console.log('Subtraction is Working!');
    }
    if (symbol[symbol.length -1] === '*'){
        console.log('Multiplication is Working!');
    }
    if (symbol[symbol.length -1] === '/'){
        console.log('Division is Working!');
    }
}
function buttonColor(){
    $('#addButt').css('background-color','white');
    $('#subtractButt').css('background-color','white');
    $('#multiplyButt').css('background-color','white');
    $('#divideButt').css('background-color','white');
}