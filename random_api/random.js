// random.js simulates an API that returns a random number and rejects if number is greater than 8

export function testPromise() {
  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  return new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function() {
      let rand = Math.floor(Math.random() * 10);
      if (rand > 8) {
        reject("Whoops!"); // Yay! Everything went well!
      } else {
        resolve(rand); // Yay! Everything went well!
      }
    }, 1000);
  });
}
