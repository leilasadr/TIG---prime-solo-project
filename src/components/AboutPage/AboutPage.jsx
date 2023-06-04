import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (

    <div className="container">
      <div>
        <p>
          A trauma-informed experience through the lense of Polyvagal Theory where you can learn about your autonomic nervous system
          and slowly but surely gain some wisdom about your patterns.
          <br />
          <br />
          "Trauma compromises our ability to engage with others by replacing patterns of connection
            with patterns of protection."   Dr. Stephen Porges
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
