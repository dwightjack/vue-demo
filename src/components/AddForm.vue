<template>
  <form @submit.prevent="add">
    <div class="form-group">
        <input class="form-control" type="text" v-model="text">
    </div>
    <button class="btn btn-primary" type="submit" :disabled="text.length < 1">Add</button>
  </form>
</template>

<script>
export default {
  data: () => ({ text: '' }),
  props: {
      onSubmit: Function
  },
  methods: {
      add() {
          this.onSubmit(this.text)
          this.text = ''
      }
  }
}
</script>