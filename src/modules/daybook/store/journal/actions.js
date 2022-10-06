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

export const updateEntry = async (/*{ commit }*/) => { 

}

export const createEntries = async (/*{ commit }*/) => { 

}