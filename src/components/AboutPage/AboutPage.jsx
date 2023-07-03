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
          Welcome to Trauma Informed Growth! A feedback and data collecting app through the lense of Polyvagal Theory where you can learn about your autonomic nervous system
          and slowly but surely gain some wisdom about your patterns.
          <br />
          <br />
          I first learned about Polyvagal theory about a year and a half ago as I was looking for answeres of why talk therapy or cognitive behavioral therapy does not work for me.
          I believe I got my answer. I learned that we get more emotional data travel from the body to the brain than the other way around, which means that somatic healing is
          absolutely essential to our growth as well as staying connected with people and having a safe support system. 
          <br />
          <br />
          I experienced transformation bit by bit as I implemented the principles of polyvagal theory in my life, and I would love to share this information with as many humans as possible.
          <br />
          <br />
          At this stage of the app, the user is able to learn about the theory, check-in as often as they see fit to submit entries about how they are feeling at that moment through the lens of polyvagal theory,
          and take stock after a while of submitting these entries to learn about their specific autonomic nervous system patterns. This is very empowering for the user because this knowledge 
          could lead to taking actions for the betterment of their overall health in a specific way that is unique to them.
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
