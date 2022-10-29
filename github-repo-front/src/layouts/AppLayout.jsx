import { Footer, NavBar, Container } from './components'

export const AppLayout = ({children}) => {
  return (
    <div className='bg-gray-800'>
      <NavBar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}
