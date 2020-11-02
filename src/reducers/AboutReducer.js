/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/


/**
 * About Reducer
 * @param  {Object} state 
 * @param  {Object} action
 */
const AboutReducer = (state = {fetching:false, data:{ title:'',content:''}}, action) => {
   switch(action.type){
   	  case 'REQUEST_ABOUT':
        return Object.assign({}, state,{
          fetching:true,
          data:{title:'',content:''}
        })
   	  break
      case 'RECEIVE_ABOUT':
        return Object.assign({}, state,{
          fetching:false,
          data:action.payload
        })
   	  break
   	  default:
   	  return state
   }
}
export default AboutReducer