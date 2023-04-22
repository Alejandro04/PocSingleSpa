# Single-spa app with React and Angular

## Node version
You need node 12.20.2 for start the app

## Install the npm packages
Navigate to the root-config, react-app, and angular-app folders and run the command
```js
$ npm install
```

## Run the application

- Navigate to the angular-app folder and run the below command
  ```js
  $ npm run serve:single-spa:angular-app
  ```
- Navigate to the react-app folder and run the below command
  ```js
  $ npm start
  ```
- Navigate to the root-config folder and run the below command
  ```js
  $ npm start
  ```
  
  In the browser open the application at http://localhost:9000
  
  Now in the top navigation bar click on **React**, you will be routed to the React app, on click of **Angular** you will be redirected to angular app
  
  **http://localhost:9000/react** -> React App
  **http://localhost:9000/angular/** -> Angular App

## Questions

## What is accessibility? How do you achieve it?

Accessibility is achieved by thinking about the user, but not in a random way, some laws can be followed. Some time ago I did a post about some UX laws

1. https://alejandroroa.medium.com/power-law-of-practice-la-forma-adecuada-de-mejorar-el-performance-en-nuestras-aplicaciones-da1735660a1c
2. https://alejandroroa.medium.com/mejores-interfaces-ley-de-miller-cec952943f1a
3. https://alejandroroa.medium.com/mejores-interfaces-ley-de-hick-2d3fe0481b8f
4. https://alejandroroa.medium.com/mejores-interfaces-ley-de-steering-810435dde846
5. https://alejandroroa.medium.com/mejores-interfaces-ley-de-fitts-f0c92b350974


## What is the difference between session storage, local storage, and cookies?

Session storage, local storage, and cookies are all mechanisms used by web developers to store data on a user's device. However, there are some differences between these storage mechanisms, including:

Scope of storage: Cookies are stored in the user's browser and are sent to the server with every HTTP request, while session storage and local storage are stored only on the user's device.

Expiration: Cookies can have an expiration date and time, after which they are no longer valid. Session storage, on the other hand, lasts only for the duration of the user's session on the website. Local storage, on the other hand, can persist indefinitely.

Size Limitations: Cookies have a size limitation of about 4KB, while session storage and local storage can store much larger amounts of data.

Accessibility: Cookies can be accessed by the server and client-side JavaScript, while session storage and local storage can only be accessed by client-side JavaScript.

Security: Cookies can be vulnerable to attacks such as cross-site scripting and cross-site request forgery. Local storage and session storage are considered more secure because they are not sent to the server with every request.

## Event loop
The event loop is a programming construct that is used to manage and coordinate the flow of events and tasks in a software program. It is typically used in event-driven programming models, such as those used in graphical user interfaces and network servers.

The event loop works by continuously monitoring a queue of pending events or tasks, and executing them in a sequential order as they become available. When an event or task is added to the queue, it is registered with the event loop, which then schedules it for execution when the appropriate conditions are met.

The event loop is an important component of many programming frameworks and platforms, including web browsers, Node.js, and many others. It is often used in conjunction with asynchronous programming techniques, such as callbacks and promises, to help manage the flow of data and interactions between different parts of a program.

Some time ago I did a post about the Event Loop
https://alejandroroa.medium.com/event-loop-y-performance-con-node-js-3cbed3457833


## If you are getting too many API calls being made from your hooks, what can you do to prevent this?

Yes, id can prevent this using lodash-debounce or axios cancellation

This libraries are two different things that serve different purposes in JavaScript applications.

lodash-debounce is a utility function provided by the popular Lodash library that can be used to limit the rate at which a function is called. It does this by delaying the execution of the function until a certain amount of time has passed since the last time it was called. This can be useful in scenarios where you want to prevent a function from being called too frequently, such as when handling user input or other events that can fire rapidly.

On the other hand, Axios cancellation is a feature provided by the Axios library that allows you to cancel HTTP requests that are in progress. This can be useful when you want to stop a request that is taking too long to complete or when the user navigates away from the page before the request is finished. Axios cancellation works by creating a cancel token for each request, which can be used to cancel the request at any time before it completes.

## How do you manage the global state? And why in that way?

The global state is used when we want to affect the global behavior of our application. 
Several alternatives can be used: Redux, Ngrx and others.

You can also inject the global state of an app through postMessage or dispatchEvent of the browser, especially when we have an app with vanilla js or when we want to share states between different technologies within a single container.

A use case can be the internationalization.


## What is progressive rendering?

Progressive rendering is a rendering technique in which the program gradually updates small parts of the entire image refining it from low quality to the final result rather than focusing on one small part of the image at a time.