import { act } from 'react-dom/test-utils'

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   'BQB5gFwyDaW85E6uqeV4WEsrk3DImhmWSJ1CPQW7qYiPAcLVU7rklEK9zlScwnPj9qeAchSqIbFe-MgNa196VzV3duYvj9gaSvIY1Y1qfZ9t7yn6kqIWd1P_cHGgW0txmOWYAgw-gBxLNu3rGWuAJxeUNtHFGA',
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    default:
      return state
  }
}

export default reducer
