import React, { useEffect, useState } from "react";

import { Button, Alert, Form, Spinner, Table } from 'react-bootstrap';
import Layout from "../components/Layout";

import { DataContext } from "../src/DataContext";

export default function ContactPage() {

  const { sharedData, setSharedData } = React.useContext(DataContext);
  const [message, setMessage] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket>();
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/chat');
    setSocket(socket);
    console.log(socket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onopen = () => {
        setReady(true);
        console.log('Connected to server');
      };
      socket.onmessage = (event) => {
        const reader = new FileReader();
        reader.readAsText(event.data);
        reader.onload = () => {
          console.log('Message from server ', reader.result);
          const data = JSON.parse(reader.result as string);
          setSharedData({
            ...sharedData,
            messages: [data, ...sharedData.messages],
          });
        };
      };
      socket.onclose = (event) => {
        console.log('Socket closed connection: ', event);
      };
      socket.onerror = () => {
        setReady(true);
        setError('Socket encountered an error.');
      };
    }
  }, [setSharedData, sharedData, socket]);

  const Send = () => {
    if (socket) {
      socket.send(JSON.stringify({
        username: sharedData.username,
        message: message,
      }));
    }
  };

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
          <Button variant="primary" className="mt-3 d-block m-auto" onClick={Send} disabled={ready === false}>Send 📨</Button>
        </Form>
        {
          error && <Alert variant="danger" className="mt-3">{error}</Alert>
        }
        {
          ready === false && (
            <div className="d-flex justify-content-around mt-3">
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="light" />
              <Spinner animation="border" variant="dark" />
            </div>
          )
        }
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Username</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
              sharedData.messages.map((message, index) => (
                <tr key={index}>
                  <td>{message.username}</td>
                  <td>{message.message}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};
