import moment from 'moment';

export const RepositoryInfo = ({ repository }) => {
  const {
    created_at,
    default_branch: defaultBranch,
    language,
    name,
    owner: {
      login
    }
  } = repository;
  const createdAt = moment(created_at).format('DD/MM/YYYY hh:mm:ss');
  return (
    <div className="w-full md:w-4/12 md:px-4 text-white">
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        {name}
      </h3>
      <ul className="list-none mt-1">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                {login}
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                <i className="fa-solid fa-code-branch"></i>
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                {defaultBranch}
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
              <i className="fa-solid fa-calendar-days"></i>
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                {createdAt}
              </h4>
            </div>
          </div>
        </li>
      </ul>
      <div className="block pb-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
          {language}
        </span>
      </div>
    </div>
  );
}
