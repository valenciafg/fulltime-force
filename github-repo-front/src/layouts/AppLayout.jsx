import { Footer, NavBar } from './components'

export const AppLayout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}
