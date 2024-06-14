// server/signaling-server.js
const WebSocket = require('ws');
const express = require('express');

const app = express();
const port = 8000;

const server = app.listen(port, () => {
  console.log(`Signaling server running at http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

const rooms = {};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    const { room, type } = data;

    if (!rooms[room]) {
      rooms[room] = [];
    }

    if (!rooms[room].includes(ws)) {
      rooms[room].push(ws);
    }

    rooms[room].forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });

    ws.on('close', () => {
      rooms[room] = rooms[room].filter((client) => client !== ws);
      if (rooms[room].length === 0) {
        delete rooms[room];
      }
    });
  });
});

console.log('WebSocket signaling server is running on ws://localhost:8000');
