<template>
  <div class="pointer p-2 py-3 entry-container">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold" >15</span>
      <span class="mx-1 fs-5" >Julio</span>
      <span class="mx-2 fw-light" >2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque enim, impedit ullam facere hic necessitatibus nostrum minima ut natus aliquid. Fuga necessitatibus fugit totam perspiciatis dolor porro dolore officia.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
}

.entry-description{
  font-size: 14px;
}
</style>