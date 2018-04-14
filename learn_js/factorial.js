function Factorial(n) {
    return (n >0) ? n* Factorial(n-1) : "Please, input n > 0";

}

console.log(Factorial(-4));


function fibonachi(n) {
    var arr = [0,1];

    for(var i = 0; i < arr[n]; ++i ){
        arr.push(arr[n-1] + arr[n-2]);
    }

    
}

console.log(fibonachi(4));


// mas[5]=mas[4]+mas[3];

