import React from 'react';
import { Container, Paper, Box } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function PvtDescription() {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Paper sx={{ p: 2 }}>
      <p>Polyvagal Theory (PVT) is the science of safety and conection developed by Dr. Stephen Porges.
        A framework that helps us understand the role of the autonomic nervous system (ANS) 
        in our somatic, emotional, and behavioral responses to glimmers and triggers.
        It is a guide that helps us bring our ANS on board
        as an ally to help us heal, grow, and reach our next level!</p>

        <p>We are the expert of our own bodies, and when we learn to
        listen to its wisdom, we have the power to create the life that we desire.</p>

        <p>PVT has 3 principles that this video explains beautifully:</p>

        <p>1- Hierarchy:</p>
          <p>Ventral Vagal (Safe)</p>
          <p>Sympathetic (Mobalized)</p>
          <p>Dorsal Vagal (Immobilized)</p>

        <p>2- Neuroception: Threat detection out of our awareness 
          based on our initial programming (childhood upbringing).</p>
        
        <p>3- Co-regulation: A biological imperative. Having safe humans around for co-regulation 
          immensely influences the quality of our self-regulation for the better.</p>
      <Box sx={{ mt: 2, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uH5JQDAqA8E" 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
      </Box>
      </Paper>
    </Container>
  );
}

export default PvtDescription;
