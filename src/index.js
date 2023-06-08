import ReactDOM from 'react-dom/client'
import axios from 'axios'
import style from './style.css'

import App from './App'

axios.get('http://localhost:3001/api/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} style={style} />)
})