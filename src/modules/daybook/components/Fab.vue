<template>
  <button class="btn btn-primary">
    <i :class="'fa fa-2x ' + icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

button{
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: fixed;
  right: 20px;
  width: 60px;
  box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 1.0);
}

</style>