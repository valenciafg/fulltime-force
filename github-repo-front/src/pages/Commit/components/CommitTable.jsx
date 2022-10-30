import { useCommitTable } from '../hooks/useCommitTable';
import { CommitSelectBranch } from './CommitSelectBranch';
import { CommitTableRow } from './CommitTableRow';

export const CommitTable = ({ commits }) => {
  const {
    branches,
    branchOption,
    handleOnchange,
  } = useCommitTable();
  const commitsCount = commits.length;
  return (
    <div className="">
      <div className="">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-white">Commits</h2>
        </div>
        <CommitSelectBranch
          branches={branches}
          branchOption={branchOption}
          handleOnchange={handleOnchange}
        />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Message
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Author Email
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Created at
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    SHA
                  </th>
                </tr>
              </thead>
              <tbody>
                {commits.map((commit, index) => (
                  <CommitTableRow key={index} commit={commit} />
                ))}
              </tbody>
            </table>
            <div
              className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
            >
              <span className="text-xs xs:text-sm text-gray-900">
                Showing { commitsCount } Entries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
