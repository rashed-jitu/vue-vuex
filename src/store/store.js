import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter: 0,
        value:0,
    },
    getters:{
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks'
        },
        value: state => {
            return state.value;
        }
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        updateValue(state,payload){
            state.value = payload;
        }
    },
    actions:{
        increment: context => {
            context.commit('increment');
        },
        decrement: ({ commit }) => {
            commit('decrement');
        },
        asyncIncrement: ({ commit }) => {
            setInterval(()=>{
                commit('increment');
            },1000);

        },
        asyncDecrement: ({ commit }) => {
            setInterval(()=>{
                commit('decrement');
            },3000);
        }
    }
});