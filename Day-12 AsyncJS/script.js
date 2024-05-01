// Synchronous Programming
// console.log("First");
// console.log("Second");
// console.log("Third");
// Async Programming
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 2000); //Delay of 2000 ms (2s)
console.log("Third");
// JS Callbacks for Async Operations
const getData = (callback) => {
    setTimeout(() => {
        const data = "This is a data";
        callback(data);
    }, 2000);
};
const processData = (data) => {
    console.log("Processed data: ", data);
};
getData(processData);

// Callback Hell
// const step1 = (callback) => {
//  setTimeout(() => {
//    console.log("Step 1 complete");
//    callback();
//  }, 1000);
// };
// const step2 = (callback) => {
//  setTimeout(() => {
//    console.log("Step 2 complete");
//    callback();
//  }, 1000);
// };
// const step3 = (callback) => {
//  setTimeout(() => {
//    console.log("Step 3 complete");
//    callback();
//  }, 1000);
// };


// Nested callbacks
// step1(() => {
//  step2(() => {
//    step3(() => {
//      console.log("All steps complete.");
//    });
//  });
// });
// Addressing Callback Hell using Promises
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};
const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete");
            resolve();
        }, 1000);
    });
};
const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve();
        }, 1000);
    });
};
// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => {
//         console.log("All steps complete");
//     })
//     .catch((error) => {
//         console.log("An error occured: ", error);
//     });

// Async/Await
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete.");
    } catch (error) {
        console.error("An error occured: ", error);
    }
};
performSteps();