import './App.css'
import FileBrowser from './components/FileBrowser'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Toolbar from './components/Toolbar'

function App() {

  return (
    <>
      <div className='mx-5'>
        <div className='border-t mt-5'>
          <Toolbar />
        </div>
        <FileBrowser></FileBrowser>
      </div>
    </>
  )
}

export default App
