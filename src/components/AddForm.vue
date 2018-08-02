<template lang="pug">
  form(@submit.prevent="add")
    .form-group
        input.form-control(type="text" v-model="text")
    button.btn.btn-primary(type="submit" :disabled="text.length < 1") Add
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