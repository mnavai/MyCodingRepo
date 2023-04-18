// Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.
// A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. 
// In that case, it will reject with "Time Limit Exceeded".  
// Note that it should reject with a string, not an Error.

var timeLimit = function (fn, t){
    return async function(...args){
        const promise1 = fn(...args);
        const promise2 = new Promise((res,rej) => {
            setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t);
        })
        return Promise.race([promise1,promise2]);
    }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */