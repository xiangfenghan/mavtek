<template>
    <div class="mylist">
        <header>
            <h1>My List</h1>
            <h2>There are {{ watches.length }} items</h2>
        </header>

        <div class="watches">
            <div v-for="(watch, index) in watches" :key="watch.id"  class="watch"  :class="{'is-selected': watch.isSelected}">
                <Watch :watch="watch" :index="index" @remove="remove"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Watch from './Watch.vue'

export default {
    name: 'MyList',
    data() {
        return {}
    },
    components: {
        Watch,
    },
    created() {
        this.getWatchesAction();
    },
    computed: {
        ...mapState({
            watches: state => state.watches
        }),
    },
    methods: {
        ...mapActions(['getWatchesAction']),
        remove(index) {
            console.log(index);
            this.watches.splice(index,1);
        },
    }
};
</script>

<style lang="scss" scoped>
    header {
        margin: 0;
        padding: 5px;
        // background: linear-gradient(45deg, #1d8693 0%,#9685f7 100%);

        h1, h2 {
            margin: 0;
        }

        h1 {
            font-size: 20px;
        }

        h2 {
            font-size: 16px;
        }
    }

    .watches {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .watch {
        position: relative;
        flex: 0 0 100%;
        max-height: 260px;
        overflow: hidden;

        @media screen and (min-width: 577px) and (max-width: 1199px) {
            flex: 0 0 50%;
        }

        @media screen and (min-width: 1200px){
            flex: 0 0 25%;
        }
    }
</style>
