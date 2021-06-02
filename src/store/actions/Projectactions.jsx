// export const createProject=(project)=>{
//     return (dispatch,getstate,{ getFirebase,getFirestore })=>{
//         //make asynchronys call to database
//         dispatch({type:"CREATE_PROJECT",projectn:project});
//     }
// }; simple without firestore and firebase
export const createProject=(project)=>{
    return (dispatch,getstate,{ getFirestore })=>{
        //make asynchronys call to database
        const firestore = getFirestore();
        const profile=getstate().firebase.profile;
        const authorid=getstate().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorfirstname: profile.firstName,
      authorlastname: profile.lastName,
      authorid: authorid,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT' ,projectn:project});
    }).catch(err => {
      dispatch({ type: 'ERROR_FOUND' , err});
    });
  }
};