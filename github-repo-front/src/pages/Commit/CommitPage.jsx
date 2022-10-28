import { AppLayout } from '../../layouts/AppLayout'
import { useCommit } from './hooks/useCommit';

export const CommitPage = () => {
  const { commits } = useCommit();
  console.log({ commits });
  return (
    <AppLayout>
        <div>CommitPage</div>
    </AppLayout>
  )
}
