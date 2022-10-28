import { Footer, NavBar } from './components'

export const AppLayout = ({children}) => {
  return (
    <div className='bg-red-200'>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}
