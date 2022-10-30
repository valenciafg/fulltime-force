import { AppLayout } from '../../layouts/AppLayout';
import { CommitSkeleton, CommitTable } from './components';
import { useCommit } from './hooks/useCommit';

export const CommitPage = () => {
  const { commits, isLoadingCommits } = useCommit();
  console.log({ commits });
  return (
    <AppLayout>
      {isLoadingCommits && (
        <h1>Cargando...</h1>
        // <CommitSkeleton />
      )}
      {commits.length > 0 && (
        <CommitTable commits={commits} />
      )}
    </AppLayout>
  )
}
