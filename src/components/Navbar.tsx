
function Navbar() {

    const login = ()=>{
        console.log("login button pressed");
        // TODO: proceed with login
    };

    const logout = ()=>{
        console.log("logout button pressed");
        // TODO: proceed with logout
    };

    return (
        <div>
            <button onClick={() => login()}>
            Login with Spotify
            </button>

            <button onClick={() => logout()}>
            Logout
            </button>
        </div>
    );

}

export default Navbar