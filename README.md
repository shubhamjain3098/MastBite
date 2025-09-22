# parcel

- Parcel created a server
- BUILDING
- MINIFY
- COMPRESS
- CLEANING OUR CODE
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watcher algorithm written in C++
- Parcel manages dev and production build and it is super fast buid algorithm
- Parcel does image optimization also
- Parcel also does cashing by development
- Parcel does consistent hashing
- Parcel does code splitting
- Parcel does differencial bundling = to support older browsers
- Parcel does compression also
- Parcel is compatible with older version of browsers
- Parcel gives HTTPS on dev
- Parcel manages port number
- Parcel uses consistent hashing algorithm
- Parcel is zero config bundler
- Parcel does tree shaking = remove unused code for you
- Different dev and production bundles

React.createEtement => Object => rendered into HTML(DOM)

JSX??

- JSX uses React.createElement behind the scene, then React.createElement is converted into object, then object is converted into HTML(DOM). And it is done by Babel.
- JSX is not HTML in JS
- JSX is transpiled before it reaches the JS and it is done by parcel and this transpilation is done by Babel

We got rid of mock data => useState([reslist]), and uses live data from api

This is known as conditional rendering(rendering on the basis of some condition):
if (listOfRestaurants.length === 0) {
return <Shimmer />;
}

Life cycle of class based react component:
-------MOUNTING LIFE CYCLE---------

- Constructor is called(with dummy data)
- Render is called(with dummy data)
  - <HTML has dummy data for few miliseconds>
- ComponentDidMount is called
  - <Make an API call>
  - <this.setState> -> state variable is updated

-------UPDATE CYCLE-------------

- render() method is called with api data(updated data)
- <HTML is loaded with new api data>
- call ComponentDidUpdate

We have build an SPA(single page application) with multiple components like home, about, etc.

<!-- Chunking
Code Splitting
Dynamic Bundling
lazy Loading
on demand loading
dynamic import -->

let's say in app.jsx file we have to import Grocery component, we write import using:
first import in body:
import {lazy, Suspense} from "react";

const Grocery = lazy(()=> import("./components/Grocery"));

# Redux Toolkit

- Install @reduxjs/tootkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartS1ice)
- dispatch (action)
- Selector

# Types of testing (devloper)

- Unit Testing
- Integrtion Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpitation
- Jest Configuration: command in terminal: npx create-jest@latest
- Install jsdom library
- Install @babet/preset-react - to make JSX work in test cases
- Include @babet/preset-react inside my babel configuration
- install @testing-library/jest-dom: npm i -D @testing-library/jest-dom
