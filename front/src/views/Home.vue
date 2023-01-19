<template>
  <h1 class="m-6 text-2xl font-bold">Projet search Bar</h1>
  <div class="m-6">
    <p>
      You're tasked with building a debounced search bar for products from DummyJSON's
      product API. In case you're not familiar with the concept of debouncing, it's a
      technique that allows one to delay a function's execution until a specific amount of
      time has elapsed since the last call.
    </p>
    <p>
      For this challenge, you'll need to add a 300-millisecond delay to the findProducts
      function. You can make use of readily available debounce implementations, or try
      writing one yourself.
    </p>

    <p>
      You'll also need to display a generic loading spinner/message, and if the function
      executes successfully, place suggested products' names and price tags inside an
      unordered list. Otherwise, use native alert() to show a generic error message.
    </p>
  </div>
</template>

<style scoped lang="scss">
</style>
