// Problem: Reverse a given string (array of characters) in-place.

function ReverseString(string){
    newstring = "";

    for(let i = string.length - 1; i>=0; i--){
        newstring+=string[i];
    }
        
    return newstring
    }


function ReverseStringChar(chars){
    let left = 0;
    let right = chars.length -1;

    while(left<right){
        [chars[left], chars[right]
        ] = [chars[right], chars[left]];

        left++
        right--

    }
    
}



console.log(ReverseString("hello")); // Output: "olleh"
let charArray = ['S', 'H', 'A', 'L', 'Y'];
ReverseStringChar(charArray)
console.log(charArray)