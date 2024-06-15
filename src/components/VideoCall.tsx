"use client"

// src/components/VideoCall.tsx
import React, { useRef, useState, useEffect } from 'react';

const VideoCall: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [room, setRoom] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');
    ws.onopen = () => {
      console.log('WebSocket connection established.');
    };
    ws.onerror = (error) => {
      console.error('WebSocket connection error:', error);
    };
    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };
    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      handleSignalingData(data);
    };
  
    setWebSocket(ws);
  
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
  
    pc.onicecandidate = (event) => {
      if (event.candidate && ws.readyState === WebSocket.OPEN) { // Check WebSocket state
        ws.send(JSON.stringify({ room, type: 'candidate', candidate: event.candidate }));
      }
    };
  
    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };
  
    setPeerConnection(pc);
  
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      if (ws.readyState === WebSocket.OPEN) { // Check WebSocket state
        stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      }
    });
  
    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
      if (pc.signalingState !== 'closed') { // Check signaling state before closing
        pc.close();
      }
    };
  }, [room]);
  
  const handleSignalingData = async (data: any) => {
    if (!peerConnection || peerConnection.signalingState === 'closed') return; // Check signaling state
  
    switch (data.type) {
      case 'offer':
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        webSocket?.send(JSON.stringify({ room, type: 'answer', answer }));
        break;
      case 'answer':
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
        break;
      case 'candidate':
        await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
        break;
      default:
        break;
    }
  };

  const callUser = async () => {
    if (!peerConnection) return;

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    webSocket?.send(JSON.stringify({ room, type: 'offer', offer }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className="border p-2 mb-4"
      />
      <div>
        <video ref={localVideoRef} autoPlay playsInline muted />
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
      <button onClick={callUser} disabled={!room}>Call</button>
    </div>
  );
};

export default VideoCall;
