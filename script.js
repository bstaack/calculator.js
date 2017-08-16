$(function() {

  var numbers = [], x;
  
  function expr(expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }
    return expr;
}

  $('.numbers, .action').click(function() {
    numbers.push(($(this).attr("value")));
    $('p').html(numbers);
    if(numbers.length > 39){
     $('p').html("max met");
      numbers = [];
    }
  });


  $('[value="="]').click(function(){
    expression = numbers.join('').replace(/\s+/, "");
    result = expr(expression);
    if(result.toString().length > 13){
      $('h1').html("max limit");
    } else {
      $('h1').html(result);
    }
    numbers = [];
  });

  $('[value="ac"]').click(function(){
    numbers=[];
    $('p, h1').html('');
  });

  $('[value="ce"]').click(function(){
    numbers.pop();
    $('p').html(numbers);
  });


});
