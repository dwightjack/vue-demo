<template>
  <div id="app" class="container-fluid mt-5" style="max-width: 500px">        
      <AddForm :on-submit="addItem" />
      <ul class="list-group" v-if="items.length > 0">
          <Item v-for="item in items" :key="item" :text="item" />
      </ul>
      <p v-else>Nothing to show</p>
  </div>
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
</style>
