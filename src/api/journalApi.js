import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-journal-app-824f1-default-rtdb.firebaseio.com'
})

export default journalApi