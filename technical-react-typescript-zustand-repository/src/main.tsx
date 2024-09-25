
import { createRoot } from 'react-dom/client'
import './index.css'
import RepositoryApp from './repository/ColumnCards/1/App'

createRoot(document.getElementById('root')!).render(
  <>
    <RepositoryApp />
  </>,
)
