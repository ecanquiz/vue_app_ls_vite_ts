<template>
  <div id="app">
    <h2>My Vue 3 Project</h2>
    <div class="text-green-400">sdsd</div>
    <div id="nav" class="nav">
      <router-link to="/" :class="[$route.name === 'home' ? activeClass : inactiveClass]">Home</router-link> |
      <router-link to="/about" :class="[$route.name === 'about' ? activeClass : inactiveClass]">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    
    const activeClass = ref(
      "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
    );
    const inactiveClass = ref(
      "border-gray-900 text-gray-300 hover:bg-gray-200 hover:bg-opacity-25 hover:text-gray-100"
    );

    return {
      activeClass,
      inactiveClass,
    };
  }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h2 {
  margin: 0;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
  
a .router-link-exact-active {
  color: #42b983;
}
</style>
