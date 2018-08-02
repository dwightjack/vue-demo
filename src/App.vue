<template lang="pug">
  #app.container-fluid.mt-5        
    AddForm(:on-submit="addItem")
    ul.list-group(v-if="items.length > 0")
      Item(v-for="item in items" :key="item" :text="item")
    p(v-else) Nothing to show
</template>

<script>
import Item from './components/Item.vue'
import AddForm from './components/AddForm.vue'

export default {
  data: ()  => ({
    items: []
  }),
  components: {
      Item,
      AddForm
  },
  methods: {
    addItem(value) {
      this.items.push(value);
    }
  }
}
</script>

<style>
#app {
  max-width: 500px
}
</style>
