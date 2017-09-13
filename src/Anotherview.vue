<template>
    <div class="current-value">
        Current Counter: {{ doubleCounter }}
        <br>
        Clicks : {{ stringCounter }}
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import {EventBus} from './main';
    export default{
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters(['doubleCounter','stringCounter']),
        }
//        created(){
//
//            EventBus.$on('counterData',(counterData)=>{
//                this.counter = counterData
////            });
//        }
    }
</script>