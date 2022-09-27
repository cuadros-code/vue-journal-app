<template>
  <div 
    class="pointer p-2 py-3 entry-container"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold" >{{ dateData.day }}</span>
      <span class="mx-1 fs-5" >{{ dateData.month }}</span>
      <span class="mx-2 fw-light" >{{ dateData.year }}, {{ dateData.dayOfWeek }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>

import { getDayMonthYear } from '@/modules/daybook/helpers/getDayMonthYear'

export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateData(){
      return getDayMonthYear(this.entry.date)
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