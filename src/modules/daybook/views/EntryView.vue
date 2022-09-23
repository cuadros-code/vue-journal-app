<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>

  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea 
      placeholder="¿Qué sucedío hoy?"
    ></textarea>
  </div>
  <img 
    src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg" 
    alt="entry-image"
    class="img-thumbnail"
  />
  <Fab icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
  },
  created() {
    this.loadEntry()
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
  },
  methods: {
    loadEntry() {
      const data = this.getEntryById(this.id)
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
hr{
  margin: 0px 0px 10px 0px;
}

textarea{
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus{
    outline: none;
  }
}

img{
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

.entry-title{

}
</style>