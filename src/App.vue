<template>
    <div id="app">
        <buttons></buttons>
        <br>
        <viewcounter></viewcounter>
        <br>
        <anotherview></anotherview>
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
