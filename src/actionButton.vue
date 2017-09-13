<template>
    <div class="action-buttons">
        <button @click="increment">Increment <span>+</span></button>
        <button @click="decrement">Decrement <span>-</span></button>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default{
        methods:{
            ...mapMutations(['increment','decrement']),
        }
    }
</script>