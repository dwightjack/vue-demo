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
import Item from "./components/Item.vue";
import AddForm from "./components/AddForm.vue";

export default {
  data: () => ({
    rawItems: [],
    filter: false
  }),
  computed: {
    items() {
      if (this.filter) {
        return this.rawItems.filter(v => v[0] === "a");
      }
      return this.rawItems;
    },
    count() {
      return this.items.length;
    }
  },
  components: {
    Item,
    AddForm
  },
  methods: {
    addItem(value) {
      this.rawItems.push(value);
    }
  }
};
</script>

<style>
#app {
  max-width: 500px;
}
</style>
