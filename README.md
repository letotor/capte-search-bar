# CAPTE Search Bar 🔍 
## This is a search bar in the colors of CAPTE using vue3(composition API) 💻 and typscript.

 It allows for fetching products from external APIs 🌐 and returning the results in a dynamic list. Additionally, products are displayed based on their categories 📚. The code is written in TypeScript 📝. The header contains two loader errors ❌ and loading ⏰ based on server return and errors in general. The code is debounced 🕰️ to avoid too frequent requests. The code includes the following concepts in practice:


- ref 🔗
- reactive 🔄
- computed 🧮
- watch 👀
- vmodel 🎛️
- directives v-if and v-for v-else 📜
- The design code is written in SCSS and not Tailwind 🎨.


## Link to the GitHub repo for the solution
[repo github](https://github.com/letotor/capte-search-bar)


## Link to the GitHub repo init
[repo github init](https://github.com/Advent-Of-Vue/2022-gift-search-bar)

## Link to the online project
[demo live](https://capte-dgwebcreation.netlify.app/)


![capture error](https://imgur.com/EpYkNfS.png)  
![capture loading](https://imgur.com/ZkwhIre.png)  


## Link to the screenshot(s)
![capture result](
https://imgur.com/H7mG32l.png
) 


---
# Advent Of Vue 2022

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## Problem description

You're tasked with building a debounced search bar for products from [DummyJSON's product API](https://dummyjson.com/docs/products#search). In case you're not familiar with the concept of _debouncing_, it's a technique that allows one to delay a function's execution until a specific amount of time has elapsed since the last call.

For this challenge, you'll need to add a 300-millisecond delay to the `findProducts` function. You can make use of readily available debounce implementations, or try writing one yourself.

You'll also need to display a generic loading spinner/message, and if the function executes successfully, place suggested products' names and price tags inside an unordered list. Otherwise, use native `alert()` to show a generic error message.

If the search term gets reset back to an empty string, clear the search suggestions too.

## Recording of an example solution

https://youtu.be/avf8OyNDJfo

## Author

Maciej Pędzich (Mac):

- [GitHub](https://github.com/maciejpedzich)
- [Twitter](https://twitter.com/MaciejPedzich)
- [Mastodon](https://notacult.social/@maciejpedzich)
- [My website (coming next year)](https://maciejpedzi.ch)

## Credits

[DummyJSON project](https://github.com/Ovi/DummyJSON) by Muhammad Ovi.

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)



