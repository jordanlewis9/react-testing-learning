export default ({ dispatch }) => (next) =>(action) => {
  // Check to see if the action has a promise on its 'payload' property
  // If it does, wait for it to resolve. If not, send action to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // We want to wait for the promise to resolve (get its data!) and then create a new action
  // with that data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  })
}

// export default ({ dispatch }) => {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }