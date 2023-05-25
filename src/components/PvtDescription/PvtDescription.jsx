import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function PvtDescription() {
  return (
    <div className="container">
      <p>This is where the user will read/learn about Polyvagal Theory.</p>
    </div>
  );
}

export default PvtDescription;
