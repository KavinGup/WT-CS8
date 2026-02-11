function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}
async function run(){
try{
    await(roll(1,1000));
        console.log("wait its getting downloaded");
    await(roll(2,2000));
        console.log("wait its getting downloaded");
    await(roll(3,3000));
        console.log("wait its getting downloaded");
    await(roll(4,4000));
        console.log("wait its almost over");
    await(roll(5,5000));
        console.log("Finished download flow");  
}catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}
run();