---
id: motivation
title: Motivation
---

The need for the with-immutable-props-to-js higher-order component stems from the simultaneous use of several common libraries/patterns in React applications:

- [Redux](https://redux.js.org/) is a great way to manage application state.
- [Selectors](https://redux.js.org/introduction/learning-resources#selectors) are a great way to encapsulate state access.
- [Immutable.js](https://immutable-js.github.io/immutable-js/) is a great way to make immutable updates in your [reducers](https://redux.js.org/basics/reducers).

When using these technologies together, there are some important rules of thumb you should follow:

- **Don't us Immutable.js in your presentational (dumb) components**: this makes your components more reusable, as their interfaces don't mandate the use of Immutable.js
- **Don't call .toJS() on Immutable objects in selectors**: .toJS() will return a brand new object every time, and cause your React components to re-render even if your app state doesn't change; return Immutable objects from all your (non-primitive type) selectors for consistency
- **Don't call .toJS() on Immutable objects in mapStateToProps**: for the same reason as above, doing this causes unnecessary re-renders

At this point, the keen observer will have realized: _there's no way left to get data from selectors into my presentational components_.

Solution: use `with-immutable-props-to-js`. The higher order component takes its props, calls .toJS() on any Immutable objects, and passes all props (along with the converted props) to the wrapped component.

- Your dumb components remain portable.
- All calls to .toJS() are isolated within the higher-order component.
- The higher-order component controls re-rendering, so it only rerenders the wrapped dumb component when `connect` determines that the Immutable values from the selectors have changed.

Thanks to the excellent Redux documentation for all the info.
You can read more about using Immutable.js with Redux on this page: https://redux.js.org/recipes/using-immutablejs-with-redux.
The code for this higher-order component is based on [this example](https://redux.js.org/recipes/using-immutablejs-with-redux#use-a-higher-order-component-to-convert-your-smart-components-immutablejs-props-to-your-dumb-components-javascript-props) in the Redux docs.
