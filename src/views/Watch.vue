<template>
    <div>
        <img :src="`${watch.img}`" />
        <h3 class="watch__name">{{ watch.title }}</h3>
        <a class="watch__select" @click="watch.isSelected = !watch.isSelected">{{watch.isSelected ? 'Unselect' : 'Select'}}</a>
        <a class="watch__remove" @click="removeWatch">Remove</a>
    </div>
</template>

<script>
    export default {
        name: 'Watch',
        props: {
            watch: {},
            index: {
                type: Number
            }
        },
        methods: {
            removeWatch() {
                this.$emit('remove', this.index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .watch {

        &:hover {
            img {
                transform: scale(1.1);
                transition: all 0.5s ease-out;
            }
        }

        img {
            display: block;
            height: auto;
            width: 100%;
            height: auto;
            transform-origin: center;
            transition: all 0.5s ease-out;
        }

        &__name {
            position: absolute;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 5px 0;
            text-align: center;
            color: #ffffff;
            background-color: rgba(0,0,0,0.5);
            font-size: 14px;
        }

        &__select,
        &__remove {
            display: block;
            position: absolute;
            bottom: 10px;
            padding: 5px 10px;
            color: #000000;
            background-color: darken(#ffffff,20%);
            font-size: 12px;
            box-shadow: 0 0 5px 0 #000000;
            cursor: pointer;
        }

        &__select {
            left: 10px;
        }

        &__remove {
            right: 10px;
            color: #ffffff;
            background: darken(#ff0000, 20%);
        }

        &.is-selected {
            img {
                opacity: 0.5;
            }
        }

        @media screen and (min-width: 577px) and (max-width: 1199px) {
            flex: 0 0 50%;
        }

        @media screen and (min-width: 1200px){
            flex: 0 0 25%;
        }
    }
</style>