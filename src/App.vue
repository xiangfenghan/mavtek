<template>
    <div class="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
    name: 'App',
    components: { Navbar },
};
</script>

<style lang="scss">
body {
    min-height: 100vh;
    margin: 0;
    color: #2c3e50;
    background: linear-gradient(45deg, #1d8693 0%,#9685f7 100%);
    background-repeat: no-repeat;
    font-family: 'Lexend Exa', sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
