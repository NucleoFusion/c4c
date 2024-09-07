import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


export default function Login(){
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    console.log("User", user);
    console.log("Is Authenticated", isAuthenticated);
  
    return (
      <>
        {isAuthenticated ? (
          <>
            <h1>{user && user.name ? `Hello Bsdk, ${user.name},Dalle` : "Hello, User"}</h1>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </>
    );
  }
  
