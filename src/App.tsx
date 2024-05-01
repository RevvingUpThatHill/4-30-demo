import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialMediaFeed } from './pages/SocialMediaFeed';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Navbar } from './component/Navbar';
import { Landing } from './pages/Landing';
import { PageNotFoundPage } from './pages/PageNotFoundPage';

export const UserContext = createContext<string>("my username");
export const UserContextChanger = createContext<any>(()=>{});
function App() {
  const [userState, setUserState] = useState("username");
  return (
    <div className="App">
      <UserContext.Provider value = {userState}>
      <UserContextChanger.Provider value={setUserState}>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="login" element={<LoginPage></LoginPage>} />
          <Route path="feed" element={<SocialMediaFeed></SocialMediaFeed>}/>
          <Route path="" element={<Landing></Landing>}></Route>
          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        </Routes>
      </BrowserRouter>
      </UserContextChanger.Provider>
      </UserContext.Provider>
    
    </div>
  );
}

export default App;
