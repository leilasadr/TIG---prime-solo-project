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
          Welcome to Trauma Informed Growth! An autonomic nervous system tracker app through the lense of Polyvagal Theory where you can slowly but surely gain some wisdom and awareness about your unconscious patterns.
          <br />
          <br />
          I first learned about Polyvagal Theory about a year and a half ago as I was looking for answeres of why talk therapy or cognitive behavioral therapy does not work for me.
          I believe I got my answer. I learned that we get more emotional data travel from the body to the brain than the other way around, which means that somatic healing is
          absolutely essential to our growth as well as staying connected with people and having a safe support system. 
          <br />
          <br />
          I experienced transformation bit by bit as I implemented the principles of Polyvagal Theory in my life, and I would love to share this information with as many humans as possible.
          <br />
          <br />
          At this stage of the app, you as the user can learn about the theory, check-in as often as you would like to track how you are feeling at that moment through the lens of Polyvagal Theory,
          and take stock after a while and see your specific autonomic nervous system patterns. This could be very empowering for you because this knowledge 
          could lead to taking action for the betterment of your overall health in a specific way that is unique to you.
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
