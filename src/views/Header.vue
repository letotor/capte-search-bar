<template>

<nav class="menu-barre">
    <div class="logo">
      <img
        src="../asset/img/capte-blanc-114px.png"
        class="logo"
      />
      <p class="logo-text">Search bar Project</p>
    </div>
   <Search />
    
  </nav>

  
</template>
<script setup lang="ts">
import Search from "../components/Search.vue";
</script>



<style scoped lang="scss">
.menu-barre {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--bg-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 1;

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 100%;
      object-fit: cover;
      height: 3rem;
    }
    .logo-text {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--bg-secondary);
      @media screen and (max-width: 768px) {
        visibility: hidden;
      }
        
      
    }
  }
  
}
</style>
