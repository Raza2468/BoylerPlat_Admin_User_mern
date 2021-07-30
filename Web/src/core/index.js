var url = window.location.href.split(":");

if (url[0]==="https")
{
    url = "http://localhost:3001"
}
else{
    url = "https://pro-mern-login.herokuapp.com"
    
}

export default url;