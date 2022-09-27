<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div>
      <span class="text-success fs-3 fw-bold">{{ dateData.day }}</span>
      <span class="mx-1 fs-3">{{ dateData.month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ dateData.year }}, {{ dateData.dayOfWeek }}</span>
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
      v-model="entry.text"
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
import { getDayMonthYear } from '@/modules/daybook/helpers/getDayMonthYear'

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
  data() {
    return {
      entry: null
    }
  },
  created() {
    this.loadEntry()
  },
  watch: {
    id() {
      this.loadEntry()
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    dateData(){
      return getDayMonthYear(this.entry.date)
    }
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id)
      if ( !entry ) {
        return this.$router.push({ name: 'no-entry' })
      }
      this.entry = entry
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