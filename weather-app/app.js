console.log('Starting..');

// one of the basic async programs in javascript by default

setTimeout(() => {
    console.log('runs..');
},2000);

setTimeout(() => {
    console.log('second time out runs..');
},0);

console.log('Stopping.');