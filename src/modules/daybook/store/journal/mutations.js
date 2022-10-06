
export const setEntries = ( state, entries ) => { 
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = ( state, newEntry ) => { 
  state.entries = state.entries.map( entry => entry.id === newEntry.id ? newEntry : entry )
}

export const addEntry = ( /*state*/ ) => { 

}