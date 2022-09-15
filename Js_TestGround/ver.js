function print(string) {
    console.log(string);
}

function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
}

function sort(ary) {
    print(ary.length);
    for (let i = 0; i < ary.length; i++){
        for (let j = 0; j < ary[i].length; i++){
            if (ary[i] < ary[j]){
                swap(ary[i], ary[j]);    
            }
        }
    }
    
}

let x = [2,3,5,332,5,26,426,46,46,26,6,4]

// for (let i =0;i < x.length;i++){
//     console.log(`The value of x[${i}] is ${x[i]}`)
// }
for (let i =  0; i < x.length; i++) {
    const element = x[i];   
    print(element)
}

print("sorterd array")

sort(x)