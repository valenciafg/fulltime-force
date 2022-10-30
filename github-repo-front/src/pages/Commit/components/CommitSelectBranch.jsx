import React from 'react'

export const CommitSelectBranch = ({ branches, branchOption, handleOnchange }) => {
  return (
    <div className="my-2 flex sm:flex-row flex-col">
      <div className="flex flex-row mb-1 sm:mb-0">
        <div className="relative">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={branchOption}
            onChange={handleOnchange}
          >
            {branches.map((branch, index) => {
              return (<option key={index} value={branch}>{branch}</option>);
            })}
          </select>
        </div>
      </div>
    </div>
  )
}
