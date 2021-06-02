import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware,compose} from "redux";
import mainreducer from "./store/reducer/mainreducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore,createFirestoreInstance } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import fbConfig from "./config/Fire";
import firebase from "firebase/app";
// const store =createStore(mainreducer,applyMiddleware(thunk));
// for fire base
const store =createStore(mainreducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(firebase,fbConfig)
  )
  );
  const config = {
    userProfile: 'users', // where profiles are stored in database,
    useFirestoreForProfile: true
  };
 const rrfProps = {
      firebase,
      config,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }
    function AuthIsLoaded({ children }) {
      const auth = useSelector(state => state.firebase.auth)
      if (!isLoaded(auth)) return <div>Loading Screen...</div>;
          return children
  }
  
ReactDOM.render(
  <BrowserRouter><Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded><App /></AuthIsLoaded></ReactReduxFirebaseProvider></Provider></BrowserRouter>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
