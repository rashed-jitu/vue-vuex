<template>
    <div class="current-value">
        Current Counter: {{ updateCounter }}
    </div>
</template>
<script>
    import {EventBus} from './main';
    export default{
        data(){
            return {

            }
        },
        computed: {
            updateCounter(){
                return this.$store.getters.doubleCounter;
            }
        },
//        created(){
//
//            EventBus.$on('counterData',(counterData)=>{
//                this.counter = counterData
////            });
//        }
    }
</script>