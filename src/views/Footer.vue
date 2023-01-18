<template>
   <footer class="bottom-0 fixed w-full text-center">
     
      <a
        href="https://github.com/Advent-Of-Vue/2022-gift-search-bar"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github Hub Repo 2022 by Capte Team
      </a>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer{
  background-color: var(--bg-primary);
  color: #fff;
  padding: 1rem;

  a{
    color: #fff;
    &:hover{
      color: var(--bg-secondary);;
    }
  } 
}
</style>