// short syntax
// as were are using arrow function to return a single argument we ommited return and brackets
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;

/*
Outer function (asyncHandler):

It takes one argument named fn. This argument is expected to be the asynchronous route handler function that you want to wrap.
Inner function (returned by asyncHandler):

This is the actual middleware function that Express will use to handle requests.
It takes three arguments: req, res, and next, just like any other middleware function in Express.
Inside this function:
We call the original route handler function (fn) with the provided req, res, and next arguments.
We wrap this call inside Promise.resolve() to ensure that whatever fn returns is always a promise.
We use .catch(next) to catch any errors that might occur during the execution of fn and pass them to Express's error-handling middleware.
*/

/*
Simplified version of asyncHandler
const asyncHandler = (fn) => {
    return (req, res, next) => { 
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };

*/
