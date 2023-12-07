// for

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 iS best numbers`);
    }
    // console.log(element);
}

for (let i = 1; i <= 1; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);  
    }
}

let myArray = ["Nikhil" , "Shivam", "Omkar"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// Break and Continue

for (let index = 1; index < 20 ; index++) {
    if(index == 5){
    //  console.log(`Detected 5`);
     break;
    }
    // console.log(`Value of i is: ${index}`);  
}

// for Continue 
for (let index = 1; index < 20 ; index++) {
    if(index == 5){
     console.log(`Detected 5`);
     continue;
    }
    console.log(`Value of i is: ${index}`);  
}