import React from 'react'
import HomeScreen from './HomeScreen'
import AuthScreen from './AuthScreen'
import { useAuthStore } from '../../store/useAuthStore'

const Home = () => {
  const { user } = useAuthStore();
  console.log(user)

	return <>{user===null ? <AuthScreen /> : <HomeScreen />}</>;
}

export default Home
