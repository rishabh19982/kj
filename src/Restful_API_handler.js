let API_HANDLER = function () {
  let BASE_URL = 'http://vinpyt.pythonanywhere.com/crowdfunding/api/v1.0.0';
  let isLoggedIn = false;
  let loginToken = '';
  let currUser = '';

  let get_base_url = () => BASE_URL;
  let setLoginStatus = status => isLoggedIn = status;
  let getLoginStatus = () => isLoggedIn;
  let setCurrUser = user => currUser = user;
  let getCurrUser = () => currUser;

  return {
    get_base_url,
    setLoginStatus,
    getLoginStatus,
    setCurrUser,
    getCurrUser
  };
}

export default API_HANDLER;