const initState = {
  authenticated: false,
}
export default function (state = initState, payload){
    switch (payload.type) {
      case 'LOGIN':
        return {
          ...state,
          authenticated: true
        }
      default:
        return state
    }
}
