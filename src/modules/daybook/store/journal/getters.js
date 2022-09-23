
export const getEntriesByTerm = ( state ) => ( searchText = '' ) => {
  if ( searchText.length === 0 ) {
    return state.entries
  } 
  return state.entries.filter( entry => entry.text.toLowerCase().includes( searchText.toLowerCase() ) )
}

export const getEntriesById = ( /*state*/ ) => {

}