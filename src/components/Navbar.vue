<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/mylist">My List</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    nav {
        margin: 0 auto;
        padding: 20px 0;
        // background: linear-gradient(45deg, #1d8693 0%,#9685f7 100%);

        a {
            display: inline-block;
            margin: 0 5px;
            padding: 4px 8px;
            color: #ffffff;
            background-color: #dec2ff;
            text-decoration: none;
            border: 1px solid #5b3785;
            border-radius: 5px;
        }
    }
    .router-link-exact-active {
        color: #ff006a;
        background-color: lighten(#ff006a, 40%);
        border: 1px solid #ff006a;
    }
</style>