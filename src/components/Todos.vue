<template>
    <div>
        <div v-bind:key="todo.id"    v-for="todo in todos">
            <TodoItem />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
h3 {
  margin: 50px 0 0;
}


</style>