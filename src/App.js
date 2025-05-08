// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Set your name here
const firstName = "Alex"; // Change this to "" to test the alternate greeting

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '24rem', margin: '0 auto', backgroundColor: '#f8f9fa' }}>
        <Card.Body>
          <Image />
          <Card.Title className="mt-3"><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h5>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && <img src="https://via.placeholder.com/100" alt="Hello" className="mt-2" />}
      </div>
    </Container>
  );
}

export default App;
