function fibonacciIterative(num){
    var fibo = [1,1];
    for(var i = 2; i<= num ; i++){
        var nextFibo = fibo[i-1] + fibo[i-2];
        fibo.push(nextFibo);

    }
    return fibo;
}
var result = fibonacciIterative(10);
console.log(result);
    
 