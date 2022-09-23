<template>
  <div 
    class="pointer p-2 py-3 entry-container"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold" >{{ entryDay }}</span>
      <span class="mx-1 fs-5" >{{ entryMonth }}</span>
      <span class="mx-2 fw-light" >{{ entryYear }}, {{ entryDayOfWeek }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
    entryDay() {
      return new Date(this.entry.date).getDate()
    },
    entryMonth() {
      return months[new Date(this.entry.date).getMonth() + 1]
    },
    entryYear() {
      return new Date(this.entry.date).getFullYear()
    },
    entryDayOfWeek() {
      return days[new Date(this.entry.date).getDay()]
    },
    shortText() {
      return ( this.entry.text.length > 100 ) 
        ? this.entry.text.substr(0, 100) + '...' 
        : this.entry.text
    }
  }
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