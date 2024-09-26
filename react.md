# [react](https://react.dev/)

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs.Design simple views for each state in your applocation,and React will efficiently updata and render just the right components when yout data changes.Declarative views make your code more predictable,simpler to understand,and easier to debug.

* **Component-Based:** Build encapsulated components that manage their own state,then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates,you can easily pass rich data through your app and keep the state out of the DOM.

* **Learn Once,Write Anywhere:** We don't make assumotions about the rest of your technology stack,so you can develop new features in React without rewriting existing code.React can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [React Native](https://reactnative.dev/).

[Learn how to use React in your project.](https://react.dev/learn)


## Installation

React has been designed for gradual adoption form the start,and **you can use as little or as much React as you nedd:**

* Use [Quick Start](https://react.dev/learn) to get a taste of React.
* [Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project) to use as little or as much React as you need.
* [Create a New React APP](https://react.dev/learn/start-a-new-react-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

you can find the React documentation [on the wensite](https://react.dev/).

Check out the [Getting Starated](https://react.dev/learn) page for a quick overview.

The documentation is divided into several sections:

* [Quick Start](https://react.dev/learn)
* [Tutoral](https://react.dev/learn/tutorial-tic-tac-toe)
* [Thinking in React](https://react.dev/learn/thinking-in-react)
* [Installation](https://react.dev/learn/installation)
* [Describing the UI](https://react.dev/learn/describing-the-ui)
* [Adding Interactivity](https://react.dev/learn/adding-interactivity)
* [Managing State](https://react.dev/learn/managing-state)
* [Advanced Guides](https://react.dev/learn/escape-hatches)
* [API Reference](https://react.dev/reference/react)
* [Where to Get Support](https://react.dev/community)
* [Contributing Guide](https://legacy.reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/react.dev).

## Examples

We have several examples [on the website](https://react.dev/).Here is the firest one to get you started:

```jsx

import { createRoot } from 'react-dom/client';

function HelloMessage({name}){return <div>Hello{name}</div>;}

const root = creatRoot(document.getElementById('container'));root.render(<HelloMessage name="Taylor"/>);

```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like suntax;[we call it JSX](https://react.dev/learn#writing-markup-with-jsx).JSX is not required to use React,but it make code more readable,and writing it feeks like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving React core,making it faster and easier to use.Decelopment of React happens in the open on GitHub,and we are grateful to the community for contributing bugfixes and inprovemens. Read below to learn how you can take part in improving React.

### [Code of Conduct](https://code.fb.com/codeofconduct)
Facebook has adopted a Code of Conduct that we expect project participants to adhere to.Pleace read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.reactjs.org/docs/how-to-contribute.html)
Read our [contributing guide](https://legacy.reactjs.org/docs/how-to-contribute.html) to learn about our development process,how to propose bugfixes and improvements,and how to build and test your changes to React.

### [Good First Issues](https://github.com/facebook/react/labels/good%20first%20issue)
To help you get your feet wet and get you familiar with our cintribution precess,we have a list of [good first issues](https://github.com/facebook/react/labels/good%20first%20issue) that contain bugs that have a relatively limited scope.This is a great place to get started.

### License
React is [MIT licensed](https://github.com/facebook/react/blob/main/LICENSE).







