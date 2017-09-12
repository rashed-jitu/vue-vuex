<template>
    <div class="action-buttons">
        <button @click="counter++;doAction();">Increment <span>+</span></button>
        <button @click="counter--;doAction();">Decrement <span>-</span></button>
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
            doAction(){
                EventBus.$emit('counterData',this.counter)
            }
        }
    }
</script>