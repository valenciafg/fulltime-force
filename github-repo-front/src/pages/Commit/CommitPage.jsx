import { AppLayout } from '../../layouts/AppLayout';
import { Loading } from '../../layouts/components';
import { CommitTable } from './components';
import { RepositoryInfo } from './components/RepositoryInfo';
import { useCommit } from './hooks/useCommit';

export const CommitPage = () => {
  const { commits, isLoadingCommits, repository } = useCommit();
  return (
    <AppLayout>
      {repository && (
        <RepositoryInfo repository={repository} />
      )}
      {isLoadingCommits && (
        <Loading />
      )}
      {commits.length > 0 && (
        <CommitTable commits={commits} />
      )}
    </AppLayout>
  )
}
