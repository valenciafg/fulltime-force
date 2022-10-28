import React from 'react'

export const ProfileCard = ({ profile }) => {
  const { name, followers, avatar_url, location, public_repos, public_gists } = profile;
  return (
    <div className="h-screen bg-gray-800">
      <div className="container flex justify-center py-20">
        <div className="p-3 bg-white rounded-xl max-w-lg hover:shadow">
          <div className="flex justify-between w-full">
            <img src={avatar_url} width="150" className="rounded-lg" />
            <div className="ml-2">
              <div className="p-3">
                <h3 className="text-2xl">{name}</h3>
              <span>{location}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                <div className="mr-3">
                  <span className="text-gray-400 block">Gits</span>
                  <span className="font-bold text-black text-xl">{public_gists}</span>  
                </div>
                <div className="mr-3">
                  <span className="text-gray-400 block">Followers</span>
                  <span className="font-bold text-black text-xl">{followers}</span>  
                </div>
                <div>
                  <span className="text-gray-400 block">Repos</span>
                  <span className="font-bold text-black text-xl">{public_repos}</span>  
                </div>
                
              </div>
            </div>          
          </div>
          <div className="flex justify-between items-center mt-2 gap-2">
            <button className="w-full h-12 rounded-md bg-blue-700 text-white text-md hover:shadow hover:bg-blue-800">Show main repository</button>
          </div>
        </div>
      </div>
    </div>
  );
}
