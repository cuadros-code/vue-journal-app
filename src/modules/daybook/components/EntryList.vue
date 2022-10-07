<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input 
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="searchText"
      >
    </div>
    <div class="px-2 pt-2 d-flex flex-column">
      <button class="btn btn-primary"
        @click="$router.push({ name: 'entry', params: { id: 'new' } })"
      >
        <i class="fa fa-plus-circle"></i>
        Nueva entrada
      </button>
    </div>
    <div class="entry-scrollarea">
      <Entry
        v-for="entry in entriesByTerm"
        :key="entry.id" 
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    // Vuex por modulo 'journal'
    ...mapGetters( 'journal', ['getEntriesByTerm'] ),
    entriesByTerm() {
      return this.getEntriesByTerm(this.searchText);
    }
  }
}
</script>

<style lang="scss" scoped>

input{
  height: 30px;
}

.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea{
  height: calc(100vh - 100px);
  overflow: scroll;
  overflow-x: hidden;
  
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
</style>