
async function f() {
    return Promise.resolve(1);
}
  
f().then((val) => {
    console.log(val);  // 1
});


async function f2() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("promise done after 1 ms!"), 1000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f2();







console.log('script done');

