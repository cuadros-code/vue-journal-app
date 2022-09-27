
export const getEntriesByTerm = ( state ) => ( searchText = '' ) => {
  if ( searchText.length === 0 ) {
    return state.entries
  } 
  return state.entries.filter( entry => entry.text.toLowerCase().includes( searchText.toLowerCase() ) )
}

export const getEntryById = ( state ) => ( id ) => {
  const entry = state.entries.find( entry => entry.id === id )
  return entry ? {...entry} : null
}