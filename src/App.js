import React from "react";
import Products from "./products";
import ProductsList from "./products/productsList";
import ProductDetails from "./ProductDetails/productDetails";
import NavbarMenu from "./navbar/Navbar";
import Home from "./home/Home";
import { fire } from "./firebaseConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/login";

function App() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(false);

  const clearInputs = () => {
    setPassword("");
    setEmail("");
  };

  const clearErrMessages = () => {
    setPasswordError("");
    setEmailError("");
  };
  const handleLogIn = () => {
    clearErrMessages();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
            setEmailError("unknown error");
            setPasswordError("unknown error");
        }
        })
  };

  const handleSignUp = () => {
    clearErrMessages();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default:
            setEmailError("unknown error");
            setPasswordError("unknown error");
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
    console.log("hasAccountHandleButton", hasAccount)
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  console.log("hasAccount", hasAccount);
  const showLogIn =()=>{
    console.log("hi")
  }
  React.useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      {user ? (
        <>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            passwordError={passwordError}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            handleSignUp={handleSignUp}
            handleLogIn={handleLogIn}
          />
        </>
      ) : (
        <>
          <Route path="/">
            <NavbarMenu handleLogOut={handleLogOut} showLogIn={showLogIn}/>
          </Route>
          <Route exact path="/" component={Home} />

          {/* <Route path='/products' render={routerProps => <ProductsList {...routerProps}/>} /> */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" children={<ProductDetails/>}/>
          {/* <Route path="/about" component={About} /> */}
        </>
      )}
    </Router>
  );
}

export default App;
