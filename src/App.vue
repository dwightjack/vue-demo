<template lang="pug">
  #app.container-fluid.mt-5        
    AddForm(:on-submit="addItem")
    label
      input(type="checkbox" v-model="filter") 
      | Just starting with 'a'
    div(v-if="items.length > 0")
      p Count: {{ count }}
      ul.list-group
        Item(v-for="item in items" :key="item" :text="item")
    p(v-else) Nothing to show
</template>

<script>
import Item from './components/Item.vue'
import AddForm from './components/AddForm.vue'

export default {
  data: ()  => ({
    items: [],
    filter: false
  }),
  computed: {
    count() {
      if (this.filter) {
        return this.items.filter((v) => v[0] === 'a').length
      }
      return  this.items.length
    }
  },
  components: {
      Item,
      AddForm
  },
  methods: {
    addItem(value) {
      this.items.push(value);
    },
  }
}
</script>

<style>
#app {
  max-width: 500px
}
</style>
