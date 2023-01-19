<template>
   <footer class="bottom-0 fixed w-full text-center">
     
      <a
        href="https://github.com/letotor/capte-search-bar"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github Hub Repo 2022 by Capte Team
      </a>
      <p>Fait avec 💜 - DGwebcreation</p>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer{
  background-color: var(--bg-primary);
  color: #fff;
  padding: 1rem;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;


  a{
    color: #fff;
    &:hover{
      color: var(--bg-secondary);;
    }
  } 
}
</style>