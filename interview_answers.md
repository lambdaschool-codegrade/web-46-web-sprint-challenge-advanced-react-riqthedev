# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

- Stateful components are known for implementing logic and state and stateless components are usually
 responsible for rendering UI

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- The componentWillMount function is called as soon as the render method is called the first time. componentWillUpdate function is called when any new props received from a parent or when the state is changed.

3. Define stateful logic.

- logic that is built into a component ex: handling a click event.

4. What are the three step of creating a successful test? What is done in each phase?

 - Arrange - setup the react components we are testing.

 - Act - Execute our behavior (if thers is one).

- Assert - Extract the response element and check (if neccessary) that it is what we expect it to be.