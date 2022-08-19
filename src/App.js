import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './components/chats/Chats';
import ChatScreen from './components/chats/ChatScreen';
import Settings from './components/settings/Settings';
import Privacy from './components/settings/Privacy';
import Home from './components/Home';
import Signing from './components/settings/Signing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chat' element={<Chats/>} />
        <Route path='/chatscreen' element={<ChatScreen/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/signing' element={<Signing/>} />
      </Routes>
    </Router>
  );
}

export default App;
