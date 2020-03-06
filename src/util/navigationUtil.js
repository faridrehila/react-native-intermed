import { NavigationActions } from 'react-navigation'
import isEqual from 'lodash/isEqual'

export const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName, params } = action

  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName &&
    isEqual(params, state.routes[state.routes.length - 1].params)
    ? null
    : getStateForAction(action, state)
}

export const navigateMutipleRoutes = getStateForAction => (action, state) => {
  if (state && action.type === 'REPLACE_MULTIPLE_SCREENS') {
    let routes = state.routes //.slice()
    for (let i = 0; i < action.numberOfRoutes; i++) {
      routes.pop()
    }
    routes.push(action)
    return {
      ...state,
      routes,
      index: routes.length - 1
    }
  }

  return getStateForAction(action, state)
}

export const isActive = (currentRoute, possibleRoutes = []) => {
  return possibleRoutes.indexOf(currentRoute) !== -1
}
