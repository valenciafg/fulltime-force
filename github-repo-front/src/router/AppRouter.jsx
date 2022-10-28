import { Navigate, Routes, Route } from 'react-router-dom';
import { CommitPage, ProfilePage } from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <ProfilePage /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
      <Route path="/commits/*" element={ <CommitPage /> } />
    </Routes>
  )
}
