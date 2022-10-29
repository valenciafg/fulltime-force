import { AppLayout } from '../../layouts/AppLayout'
import { CommitTable } from './components/CommitTable';
import { useCommit } from './hooks/useCommit';

export const CommitPage = () => {
  const { commits, isLoadingCommits } = useCommit();
  console.log({ commits });
  return (
    <AppLayout>
      {isLoadingCommits && (
        <h1>cargando</h1>
      )}
      {commits.length > 0 && (
        <CommitTable commits={commits} />
      )}
    </AppLayout>
  )
}
