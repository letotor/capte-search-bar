# Search Bar for CAPTE
## Il s agit d une barre de recherche sous les couleurs de capte en utilisant vue3(composition API). il permet de fetcher des produits sur api externes et de retourner les resultats sous forme de liste dynamique. De plus les produits sont affiches en fonction de leurs categories.
- Le code est realise en typescript 
- Le header contient deux loader error et loading en fonction du retour serveur et des erreurs plus largement.
- Le code est debounced pour eviter les requetes trop frequente.
- le code conteint les notions suivantes en pratique: ref, reactive,computed,watch,vmodel et directive v-if et v-for v-else
- le code pour le design est realise en scss et non tailwind

## Lien vers le repo github



## Lien vers le projet en ligne

![capture error](https://imgur.com/EpYkNfS.png)  
![capture loading](https://imgur.com/ZkwhIre.png)  


## lien des captures d ecran
![capture result](
https://imgur.com/H7mG32l.png
) 
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



