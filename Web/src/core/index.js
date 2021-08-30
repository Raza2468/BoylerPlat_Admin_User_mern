
var url = window.location.href.split(":");
if (url[0] === "https") {
    // url = "https://pro-mern-login.herokuapp.com"
    url = "https://boilerplates-login-sign-mern.herokuapp.com"
}
else {
    url = "http://localhost:3001"

}

export default url;