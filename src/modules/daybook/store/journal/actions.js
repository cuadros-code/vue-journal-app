import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => { 
  try {
    const { data } = await journalApi.get('/entries.json')
    
    const entries = []
    for (const id of Object.keys(data)) {
      entries.push({
        id,
        ...data[id]
      })  
    }

    commit('setEntries', entries)
  } catch (error) {
    console.log(error)
  }
}

export const updateEntry = async ({ commit }, entry) => { 
  try {
    const { id } = entry
    const { data } = await journalApi.put(`/entries/${id}.json`, entry)
    commit('updateEntry', {...data})
  } catch (error) {
    console.log(error)
  }
}

export const createEntry = async ({ commit }, newEntry) => { 
  try {
    const { data } = await journalApi.post(`/entries.json`, newEntry)
    const entry = {
      id: data.name,
      ...newEntry
    }
    commit('addEntry', entry)
  } catch (error) {
    console.log(error);
  }
}