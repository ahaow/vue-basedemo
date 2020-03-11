<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./assets/scss/global";
  #app {
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    overflow: hidden;
  }
</style>
