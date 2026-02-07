import './App.css'
import Dashboard from './pages/Dashboard'
import RegistrationForm from './components/user-form/RegistrationForm'

function App() {

  return (
     <div className="App">
      <section className="App-header">
        <Dashboard/>
        <RegistrationForm/>
      </section>
    </div>
  )
}

export default App
