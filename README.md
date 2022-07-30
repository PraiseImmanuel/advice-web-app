# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](public\images\desktop-design.jpg)

### Links

- Solution URL: (https://github.com/PraiseImmanuel/advice-web-app)
- Live Site URL: (https://advice-website.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-Redux] - State Management 


### What I learned

While i am yet to finish my React Course, i decided to build this web application to work with what i have learnt so far. During the course of this project execution i learnt a few things listed below

-How to consume an API using axios
-How to respond to an error from an axios async function
-How to use Redux-Thunk in dispatching a function as an action
-How to use Redux to manage state in a react application


Some lines of code i am proud of
```
```css
.dice{
    animation: shake-and-spin 0.9s cubic-bezier(1, 1.02, 0.37, 1.07) infinite;
}
```
```js
export const  getData = () => async dispatch => {
      const onSuccess = (response) => {
        dispatch({ 
            type: 'GET_DATA',
            payload: {
                advice: response.data.slip.advice,
                adviceId: response.data.slip.id,
                onFetchData: true
            }
        });
        return response;
      }

      const onError = (error) => {
        dispatch({
            type: 'ERROR',
            payload: {
                advice: 'Please check network and roll dice again',
                onFetchData: true
            }
        });
        return error;
      }

      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        return onSuccess(response);
      } catch (error) {
        return onError(error);
      }
}

```

### Continued development

This Project boosted me up to dive more into building web applications with React.

## Author

- Website - [Praise Immanuel](https://www.behance.net/praise_immanuel2)
- Frontend Mentor - [PraiseImmanuel](https://www.frontendmentor.io/profile/PraiseImmanuel)
- Twitter - [_PraiseImmanuel](https://www.twitter.com/_PraiseImmanuel)
