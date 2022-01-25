import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth, login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { startLoadingNotes } from '../actions/notes'

export const AppRouter = () => {

  const dispatch = useDispatch();

  const[checking, setChecking] = useState(true);
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect ( () => {
  
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid){
          dispatch( login( user.uid, user.displayName ));
          setIsLoggedIn(true);

          dispatch(startLoadingNotes(user.uid));

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    })
  }, [dispatch, setChecking, setIsLoggedIn]);


if(checking) return (<h1>Wait...</h1>);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth/*' element= {
            <PublicRoute isLoggedIn = {isLoggedIn}>
                <AuthRouter/>
            </PublicRoute>
            } 
        />

        <Route path='/*' element= {
            <PrivateRoute isLoggedIn = {isLoggedIn}>
                <JournalScreen/>
            </PrivateRoute>
            }
        />

      </Routes>
    </BrowserRouter>
  )
}
