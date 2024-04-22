import './App.module.css'
import Step from './components/Step/Step'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { CartProvider } from './components/Cart/CartContext'
import { StepProvider } from './components/Step/StepContext'

function App() {
  return(
    <>
      <Header />
      <main>
        <CartProvider>
          <StepProvider>
            <Step />
          </StepProvider>
          <Cart />
        </CartProvider>
      </main>
      <Footer />
    </>
  )
}

export default App;
