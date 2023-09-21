import React from 'react';


const Profile = () => {


  return (
    <div className="App">
        로그인 계정 : {localStorage.getItem('user_info')}
    </div>
  );
}

export default Profile;
