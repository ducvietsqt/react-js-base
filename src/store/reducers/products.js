const initialState = {
  items: [],
  colors: [],
  currentPage: 1,
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
    case 'UPDATE_PAGE_NUMBER':
      return {
        ...state,
        currentPage: action.payload,
      }
    case 'INITIALIZE_COLORS':
      return {
        ...state,
        colors: [...action.payload]
      }
    case 'UPDATE_PRODUCT':
      const {productId, data} = action.payload
      let items = state.items
      const pos = items.findIndex((item) => item.id === productId)
      if (pos >= 0) {
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
