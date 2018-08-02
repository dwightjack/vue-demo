<template>
  <transition name="item">
    <li class="list-group-item">{{text}}</li>
  </transition>
</template>

<script>
export default {
  props: {
    text: String
  },
}
</script>

<style>
.item-enter-active,
.item-leave-active {
    transition: all 0.2s ease-out;
}

.item-enter {
    transform: translateY(-5px);
    opacity: 0;
}
</style>

