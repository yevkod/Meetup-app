import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavouritesPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
      <div className='app'>
        <Layout>
          <Routes>
            <Route path='/' element={<AllMeetupsPage />} />
            <Route path='/new-meetup' element={<NewMeetupPage />} />
            <Route path='/favorite' element={<FavoritesPage />} />
            <Route path='todos' element={<TodoPage />} />
          </Routes>
        </Layout>
      </div>
  );
}

export default App;
