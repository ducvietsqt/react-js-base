const initialState = {
  items: [],
  colors: [],
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return {
        ...state,
        items: [...action.payload]
      }
    case 'INITIALIZE_PRODUCT':
      return {
        ...state,
        items: [...action.payload]
      }
    case 'INITIALIZE_COLORS':
      return {
        ...state,
        colors: [...action.payload]
      }
    case 'UPDATE_PRODUCT':
      const { productId, data } = action.payload
      let items = state.items
      const pos = items.findIndex((item) => item.id === productId)
      if(pos >= 0) {
        items[pos] = {
          ...items[pos],
          ...data,
        }
      }
      return {
        ...state,
        items: [...items],
      }
    default:
      return state;
  }
}
