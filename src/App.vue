<template>
    <div id="app">
        <buttons></buttons>
        <br>
        <viewcounter></viewcounter>
        <br>
        <anotherview></anotherview>
        <br>
        <input type="text" v-model="value">
        <br>
        {{ value }}
    </div>
</template>

<script>
    import buttons from './actionButton.vue';
    import viewcounter from './viewOutput.vue';
    import Anotherview from './Anotherview.vue';
    export default {
        name: 'app',
        components: {
            buttons,viewcounter,Anotherview
        },
        data () {
            return {

            }
        },
        computed:{
            value:{
                get(){
                    return this.$store.getters.value;
                },
                set(value){
                    this.$store.commit('updateValue',value);
                }
            }
        }

    }
</script>

<style>
    #app{
        max-width: 300px;
        margin: 0 auto;
        border: 1px solid #ddd;
        padding: 10px 20px;
        background: #141414;
        color: #fff;
    }
</style>
