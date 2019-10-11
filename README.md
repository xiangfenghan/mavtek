# Front-End Test

## INSTRUCTIONS
* Do as much as you can in 4 hours
* Create a responsive item list
* Use any front-end framework you want
* Use a state management if needed
* Use any plugins/addons that you need
* Create all necessary components needed
* Ensure that your code is flexible for future changes

## Let's get started
* Use Lexend Exa from Google font for the entire website
* Add a fixed 2 colors 45° gradient background color
* Create a navigation:<br>
Home -> /
<br>My List -> /mylist

## Inside My List
* Load the JSON data with AJAX<br>
/item-list-1.json
* List each item in rows
* For viewport >= 1200px, have 4 items per row.
* For viewport less than 576px, have 1 item per row

## Per Item
* Each item should be displayed like the concept
* Add functionality on Remove button to remove item from list<br>
(No AJAX necessary)
* Add functionality on Select button.
* On active state, entire item component should be 50% transparent.
* On deactive state, entire item compentnt should be opaque

## Functionalities (using VueX if possible)
* Create a function to display the total items

## Create an About page
* Add link to About page on the navigation
* Add the About page (/src/components/views/About.vue)
* Have the About page lazy load only if the page is called

## Add fancy bells and whistles
* Add CSS transitions to any (or all) hover state

## BONUS
* Add different meta description for each page
* Add 5 Jest Unit tests
* Add 5 Cypress.IO UI tests


# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).# mavtek
