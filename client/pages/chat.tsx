import React, { useState } from "react";

import { Button, Alert, Form } from 'react-bootstrap';
import Layout from "../components/Layout";

import { DataContext } from "../src/DataContext";

export default function ContactPage() {

  const { sharedData, setSharedData } = React.useContext(DataContext);
  const [message, setMessage] = useState<string>('');

  return (
    <Layout>
      <div id="Chat">
        <Form>
          <Form.Group className="mt-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={sharedData.username} onInput={(e) => {
              setSharedData({
                ...sharedData,
                username: e.currentTarget.value
              });
            }} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" value={message} onInput={(e) => {setMessage(e.currentTarget.value)}}/>
          </Form.Group>
          <Button variant="primary" className="mt-3 d-block m-auto">Send 📨</Button>
        </Form>
      </div>
    </Layout>
  );
};
