import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        watches: [],
    },
    mutations: {
        getWatches(state, watches) {
            state.watches = watches;
        }
    },
    getters: {

    },
    actions: {
        async getWatchesAction({ commit }) {
            const watches = await axios.get("item-list-1.json")
            .then(response => {
                let watches =  response.data.items;
                return watches;
                });
            
            commit('getWatches', watches);
        }
    },
});
