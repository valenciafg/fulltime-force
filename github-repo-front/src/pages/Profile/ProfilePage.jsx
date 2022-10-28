import { AppLayout } from '../../layouts/AppLayout'
import { useProfile } from './hooks/useProfile'

export const ProfilePage = () => {
  const { profile } = useProfile();
  console.log({ profile });
  return (
    <AppLayout>
        <div>ProfilePage</div>
    </AppLayout>
  )
}
