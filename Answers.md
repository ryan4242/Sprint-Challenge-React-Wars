# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

  React is a javascript framework that allows us to update our UI as efficiently as possible. If a user, say, adds an item to a cart, instead of reloading the entire page to reflect the change in the users cart and update the inventory, React takes a 'screenshot' of before and after the changes are made, compares the differences between the two, and updates only the components that have been effected.

1. Describe component state.

  State is essentially just a variable but one that is initiated and managed via a component. In the above example our inventory would be held in a component state.

1. Describe props.
 
  Props are also variables but these are passed into child components. We often use props to display data from an api in different components. A parent component contains the apis data object in its state, we pass this data object, now contained in a state variable, to the parents children components via props. The children components render these props into the UI

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

  Side effects are functions that are ran after the initial render of our page. API calls are a perfect example of times we use side effects. We wait for the page to render, then get our data then insert that data into a state, our state is passed to however many components we need via props and the data is painted into the UI. Without side effects our page would try to render the data before it was gathered, And our state and props would not be able to find the values they are expecting.
