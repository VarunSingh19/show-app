import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:id" element={<ShowDetails />} />
        <Route path="/booking/:id" element={<BookingForm showName="Example Show" />} />
        <Route path="/booking/:id/:showName" element={<BookingForm />} />


      </Routes>
    </Router>
  );
};

export default App;
