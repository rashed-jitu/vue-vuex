<template>
    <div class="current-value">
        Current Counter: {{ counter }}
    </div>
</template>
<script>
    import { EventBus } from './main';
    export default{
        data(){
            return {
                counter:0
            }
        },
        created(){
            EventBus.$on('counterData',(counterData)=>{
                this.counter = counterData
            });
        }
    }
</script>