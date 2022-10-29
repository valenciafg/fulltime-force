import moment from 'moment';

export const CommitTableRow = ({ commit }) => {
  const {
    sha,
    html_url: htmlUrl,
    commit: {
      committer: {
        date,
        email,
        name
      },
      message,
    }
  } = commit;
  const createdAt = moment(date).format('DD/MM/YYYY hh:mm:ss');
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {message}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {createdAt}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span aria-hidden
                className="absolute inset-0 bg-gray-300 opacity-50 rounded-full"></span>
          <a
            className="relative"
            href={htmlUrl}
            target='_blank'
          >
            {sha}
          </a>
        </span>
      </td>
    </tr>
  )
}
