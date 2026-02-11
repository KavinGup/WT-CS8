// function aa(){
//     console.log("aa function");
// }
// setTimeout(aa,2000);

// setTimeout(()=>{
//     console.log("This is async function");
// },5000);



// setInterval(()=>{
//     console.log("This is async function");
// } ,1000);

// let count = 0;

// const intervalId = setInterval(() => {
//   console.log("This is async function");
//   count++;

//   if (count === 5) {   // stop after 5 times
//     clearInterval(intervalId);
//   }
// }, 1000);



// let count=0;
// const Intervalid = setInterval(()=>{
//     console.log("This is async function");
//     count++;
//     if(count==8){
//         clearInterval(Intervalid);
//     }
// },2000);



// function roll(number, next){
//     setTimeout(()=>{
//         console.log("Roll. No. is ", number);
//         if(next) next();
// }, 2000)
// }

// roll(1, ()=>{
//     console.log("Wait its getting downloaded");
//     roll(2, ()=>{
//         console.log("Wait its getting downloaded");
//         roll(3, ()=>{
//             console.log("Wait its getting downloaded");
//             roll(4, ()=>{
//                 console.log("Wait its almost over");
//                 roll(5);
//             });
//         });
//     });
// });


// function roll(number, next){
//     setTimeout(()=>{
//         console.log("Roll. No. is ", number);
//         if(next){
//             next();
//     }
// }, 2000)
// }

// roll(1, ()=>{
//     console.log("Wait its getting downloaded");
//     roll(2, ()=>{
//         console.log("Wait its getting downloaded");
//         roll(3, ()=>{
//             console.log("Wait its getting downloaded");
//             roll(4, ()=>{
//                 console.log("Wait its almost over");
//                 roll(5);
//             },1000);
//         },4000);
//     },3000);
// }, 2200);



function display(teamType, option) {
    let india = ["Rohit", "Virat", "Bumrah"];
    let australia = ["Warner", "Smith", "Starc"];
    let result;

    switch (teamType) {
        case "IND":
            if (option === "show") {
                console.log("India Team:", india);
            } else if (option === "merge") {
                result = [...india, ...australia];
                console.log("Merged Team (IND + AUS):", result);
            }
            break;

        case "AUS":
            if (option === "show") {
                console.log("Australia Team:", australia);
            } else if (option === "merge") {
                result = [...australia, ...india];
                console.log("Merged Team (AUS + IND):", result);
            }
            break;

        default:
            console.log("Invalid team type");
    }
}

// function calls
display("IND", "show");
display("AUS", "show");
display("IND", "merge");
display("AUS", "merge");

