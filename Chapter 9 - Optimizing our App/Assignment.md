## Namaste React Course by Akshay Saini

# Chapter 09 - Optimizing our App

## Q: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "child",      // Don't use '/' because then react-router-dom will understand it it's the direct path
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

## Q: When and why do we need `lazy()`?

A: The `lazy()` function is a feature in React that allows us to `load components dynamically, or lazily, only when they are needed`. This can be beneficial for improving the performance and load times of our web application, especially if it contains a large number of components or if some components are rarely used. Here's when and why we might need to use lazy():

1. `Code Splitting and Reducing Initial Bundle Size` - In large React applications, bundling all components into a single JavaScript file can result in a large initial bundle size. This can lead to slower load times for users. By using lazy(), we can split our code into smaller, more manageable chunks. These chunks are loaded on-demand, reducing the initial bundle size and improving the time it takes for our application to load.

2. `Improved Performance` - Lazy loading can lead to better application performance. Components that are only loaded when needed reduce the amount of code that needs to be executed during the initial page load, which can lead to faster rendering times and a smoother user experience.

3. `Faster Initial Load` - When we use lazy(), only the essential code is loaded initially. Less code to parse and execute means that our application can start up faster, especially in scenarios where not all components are used right away.

4. `Better User Experience` - By deferring the loading of components until they are needed, we can provide a more responsive user experience. Users don't have to wait for unnecessary components to load, and they can interact with the parts of the application that are immediately visible.

5. `Reducing Browser Caching Overhead` - Smaller initial bundles produced by lazy() can also benefit from browser caching. Since components are loaded as separate chunks, once loaded, they are less likely to change frequently. This can result in a better caching strategy and faster subsequent visits to our site for returning users.

6. `Optimizing Mobile Performance` - On mobile devices with limited bandwidth and processing power, lazy loading is even more important. Smaller initial bundles can make our application more accessible and usable on mobile devices.

Here's an example of how to use lazy() to load a component dynamically:

```
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

## Q: What is `suspense`?

A: In React, `Suspense` is a feature that allows us to declaratively manage asynchronous data fetching and code-splitting in our applications. It is primarily used in combination with the lazy() function for dynamic imports and with the React.lazy() component to improve the user experience when loading data or components asynchronously.

Here are the main aspects and use cases of Suspense:

`Data Fetching` - Suspense can be used to handle the loading of asynchronous data, such as data from an API. It provides a way to specify a fallback UI (e.g., a loading spinner or a message) that is displayed while the data is being fetched. This is especially useful for making our application more user-friendly and responsive.

`Code Splitting` - When used with lazy() or React.lazy(), Suspense can manage the loading of code-split components. We can specify a fallback component or loading indicator to display while the component is being loaded. This helps in reducing the initial bundle size and improving the application's performance.

`Error Handling` - Suspense can also handle errors that might occur during data fetching or code splitting. We can specify how to render an error component or message in case an error occurs during the asynchronous operation.

## Q: Why do we get this error: `A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition`? How does suspense fix this error?

A: The error message you provided, "A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition," is related to React's Suspense feature and is typically encountered in asynchronous contexts where components are fetching data or handling code splitting.

To understand this error and how to fix it, you need to know a bit about how Suspense works and why it's important. Suspense is used to manage asynchronous data fetching and code-splitting, allowing you to display a loading indicator while the data or code is being fetched. When React encounters a Suspense boundary (created using <Suspense>), it knows that there might be a delay in rendering, and it can handle that situation gracefully.

The error message you received is telling you that a component that was responding to synchronous input (meaning it's not supposed to be waiting for anything) encountered a suspension. This should not happen because Suspense is primarily designed to handle asynchronous operations, and you generally don't want to introduce delays in the rendering of synchronous user interactions.

Here's how to fix this error:

1. `Identify the Issue` - You should identify which part of your code is causing the synchronous component to suspend. This could be due to a network request, a dynamic import of a component, or another asynchronous operation.

2. `Wrap Asynchronous Code` - Ensure that the asynchronous code, which might suspend, is wrapped within a Suspense boundary (using <Suspense>) and that you provide a fallback UI to display while waiting for the operation to complete.

Here's an example of how to properly structure your code:

```
import React, { Suspense, lazy } from 'react';

const AsyncComponent = lazy(() => import('./AsyncComponent'));

function App() {
  // Synchronous code
  return (
    <div>
      <h1>Your App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

## Q: Advantages and Disadvantages of using this `code splitting pattern`?

A: Code splitting is a technique used to break down a large monolithic JavaScript bundle into smaller, more manageable pieces, which can be loaded on-demand. This pattern has several advantages and some potential disadvantages, depending on how it's implemented and the specific use case. Let's explore the advantages and disadvantages of using code splitting:

### Advantages:

`Faster Initial Load Time` Smaller initial bundles result in faster load times for your web application. Users can start interacting with the application sooner because they don't have to download unnecessary code.

`Improved Performance` - Code splitting can lead to better performance, as smaller bundles can be parsed and executed more quickly. This can reduce the time it takes to render the initial page and improve the overall responsiveness of the application.

`Optimized Resource Usage` - Code splitting helps optimize resource usage. Components or features that are rarely used may never be loaded unless needed. This conserves bandwidth and memory, making your application more efficient.

`Enhanced Caching` - Smaller bundles can benefit from browser caching. Since they are less likely to change frequently, browsers can cache them, resulting in faster subsequent visits for returning users.

`Simpler Maintenance` - Smaller bundles are easier to maintain. When you make updates to specific parts of your application, you can be more confident that you won't introduce unexpected issues in unrelated components.

`Better Mobile Performance` - On mobile devices with limited bandwidth and processing power, code splitting can significantly enhance the user experience by reducing the amount of data that needs to be loaded and processed.

### Disadvantages:

`Complex Configuration` - Setting up code splitting and configuring it correctly can be complex, especially in large applications. You may need to make adjustments to your build tools and bundler settings.

`Initial Loading Delay` - When a component is loaded on-demand, there may be a slight delay the first time it is needed, which can impact user perception of your application's speed. However, this delay is usually minimal, and it's often a trade-off for the benefits of code splitting.

`Asynchronous Loading` - Handling asynchronous loading and rendering of components requires careful design to ensure a seamless user experience. You need to consider scenarios such as loading indicators and error handling.

`Route-Based Splitting` - To maximize the benefits of code splitting, you should implement it on a route or feature basis. This can lead to a more granular structure, but it may require some restructuring of your application.

`Tool and Framework Support` - Not all frameworks and libraries have built-in support for code splitting. You may need to rely on specific tools and configurations, which can vary depending on your stack.

`Testing Complexity` - Testing code-split components can be more challenging because you must ensure that they load correctly in different scenarios and that they don't introduce unexpected issues.

## Q: When do we and why do we `need suspense`?

A: React Suspense is a feature introduced in React to help manage asynchronous operations, such as data fetching and code splitting, in a more declarative and user-friendly manner. You need to use Suspense in your React application when you want to:

`Improve User Experience` - Suspense helps in providing a better user experience by managing the loading state of asynchronous operations. Instead of showing loading spinners or handling loading states manually, Suspense allows you to specify fallback UI components to be displayed while data is being fetched or code is being loaded.

`Optimize Performance` - Suspense, in combination with code splitting, can significantly improve the performance of your application. It allows you to load code and data only when it's needed, reducing the initial bundle size and making your application faster to load.

`Simplify Code` - Suspense simplifies your code by providing a more declarative way to handle asynchronous operations. It reduces the need for complex state management and error handling for data fetching or code splitting.

`Avoid Callback Hell` - In traditional async patterns, managing multiple asynchronous operations can lead to "callback hell" or nested promises. Suspense provides a more structured way to handle multiple asynchronous operations concurrently.

`Error Handling` - Suspense is also useful for handling errors gracefully. You can specify how to render error components or messages when an error occurs during data fetching or code splitting, making it easier to provide a clear user-facing error message.

Here's a brief overview of when and why you might need Suspense in different scenarios:

`Data Fetching` - Use Suspense for data fetching when you want to make your application more responsive and provide a smooth loading experience for data-driven components. It simplifies the management of loading states and error handling.

`Code Splitting` - Use Suspense for code splitting when you want to improve your application's initial load time and performance. It allows you to load parts of your application on-demand, which can lead to faster rendering times and better resource usage.
Concurrent Mode:
