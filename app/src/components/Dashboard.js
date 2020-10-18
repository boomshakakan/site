import React, { Fragment } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import Player from './Player';

const Dashboard = () => {
  return (
    <Fragment>
      <BookList />
      <BookForm />
      <Player />
    </Fragment>
    
  );
};

export default Dashboard;