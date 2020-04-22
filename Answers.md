# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a javascript framework that updates the dom when new data is downloaded. Updating the dom is a slow and inefficient process. However with ReactJS brings the virtual DOM which solves those problems by diffing. Updating only the information that changed when it changes.

1. Describe component state.
    State is all the information or data used by a component to display. For example, a person component would have state data like, name, age, location, favorite food, etc.

1. Describe props.
    Props are pieces of data or state that you pass down into children components. That way each component does not need to have its own state.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    Side effects are unintended(or intended) changes or effects from certain actions in Javascript. For example, console logging will display information in the console.

    We want to use the useEffect hook to control our side effects effectively.