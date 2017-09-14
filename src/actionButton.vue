<template>
    <div class="action-buttons">
        <button @click="increment">Increment <span>+</span></button>
        <button @click="decrement">Decrement <span>-</span></button>
        <br>
        <button @click="asyncIncrement">Increment <span>+</span></button>
        <button @click="asyncDecrement">Decrement <span>-</span></button>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';
    export default{
        methods:{
            ...mapActions(['increment','decrement','asyncIncrement','asyncDecrement']),
        }
    }
</script>