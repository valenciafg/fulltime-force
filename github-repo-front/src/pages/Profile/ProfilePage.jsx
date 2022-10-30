import { AppLayout } from '../../layouts/AppLayout'
import { Loading } from '../../layouts/components';
import { ProfileCard } from './components/ProfileCard';
import { useProfile } from './hooks/useProfile'

export const ProfilePage = () => {
  const { profile, isLoadingProfile } = useProfile();
  return (
    <AppLayout>
      {isLoadingProfile && (
        <Loading />
      )}
      {profile && (
        <ProfileCard profile={profile} />
      )}
    </AppLayout>
  )
}
