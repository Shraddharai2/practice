function fibonacciGenerator (n) {

    
    
       
    
       var sequence = [];
    
     
    
      for (var i = 0; i < n; i++){
    
           if (i === 0){
    
            sequence.push(0);
    
           } else if (i == 1){
    
            sequence.push(1);
    
           } else {
    
            sequence.push(sequence[(i-1)] + sequence[(i-2)]);
            //   after 0 and 1 i will be 2 and [(2-1 = 1)] , [(2-2 = 0)] so it will be sequence[1] = 1
            // and sequence[0] = 1 because sequence by now will be [0,1] so after adding our array will be [0,1,1] 
            // now if we will continue with our i it will be now [(3-2=1)] , [(3-1=2)] so index value [1] and [2] of sequence[0,1,1] is 1 and 1 after addition it is 2 now so our updated array is now [0,1,1,2] and so on 
           }
    
       
    
      }
    
        return sequence;
    
    }

// function fibonacciGenerator (n) {

//     var output = [];

//     if (n<2) {

//     output.push(0)

//     } else {

//     output.push(0,1);

//     for(var i = 2; i < n; i++) {

//    output.push(output[i-2] + output[i-1]);

//     }

//         }

//     return output;

// }

  let fibo =  fibonacciGenerator (15);
  console.log(fibo);