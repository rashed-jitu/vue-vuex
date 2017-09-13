<template>
    <div class="action-buttons">
        <button @click="counter++;doAction(true);">Increment <span>+</span></button>
        <button @click="counter--;doAction(false);">Decrement <span>-</span></button>
    </div>
</template>
<script>
    import { EventBus } from './main';
    export default{
        data(){
            return {
                counter : 0
            }
        },
        methods:{
            doAction(isIncrement){
                if(isIncrement){
                    this.$store.commit('increment');
                }else{
                    this.$store.commit('decrement');
                }
//                EventBus.$emit('counterData',this.counter)
            }
        }
    }
</script>