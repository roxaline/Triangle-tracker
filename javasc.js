function getResult(){
    var number1= parseFloat(document.getElementById("nbr1").value);
    var number2= parseFloat(document.getElementById("nbr2").value);
    var number3= parseFloat(document.getElementById("nbr3").value);
    if(number1===number2 && number2===number3){
        alert("This is an equilateral triangle");
        window.location.href="equilateral.html";
    }
    else if(number1===number2 || number1===number3 || number2===number3){
        alert("This is an isosceles triangle");
        window.location.href="isoscele.html";
    }
    else {
        alert("This is a scalene triangle");
        window.location.href="scalene.html";
    }
}


