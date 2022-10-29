import { AppLayout } from '../../layouts/AppLayout'
import { ProfileCard } from './components/ProfileCard';
import { useProfile } from './hooks/useProfile'

export const ProfilePage = () => {
  const { profile, isLoadingProfile } = useProfile();
  return (
    <AppLayout>
      {isLoadingProfile && (
        <h1>cargando</h1>
      )}
      {profile && (
        <ProfileCard profile={profile} />
      )}
    </AppLayout>
  )
}
