// This is a code to check whether any year is Leap year or not


function isLeap(year) {
    
    
        if (year % 4 === 0) {
            if (year % 100 ===0) {
                if ( year % 400 === 0) {
                    return "Leap Year";
                } else {
                    return " Not Leap Year";
                }
            }else{
                return "Leap Year";
            }
        }else{
            return "Not Leap Year";
        } 
    
    }
    
    let me = isLeap(2400);
    console.log(me);


    // Method to find any year is leap or not
//  A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.

 