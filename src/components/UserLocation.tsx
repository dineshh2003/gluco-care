import { useEffect } from "react";

const LocationTracker = () => {
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }, []);


    const showPosition = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
        sendLocation(latitude, longitude);
      };
    
      const showError = (error: GeolocationPositionError) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log('User denied the request for Geolocation.');
            break;
          case error.POSITION_UNAVAILABLE:
            console.log('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            console.log('The request to get user location timed out.');
            break;
        }

      };

      const sendLocation = async (latitude: number, longitude: number) => {
        const response = await fetch('/api/send-location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ latitude, longitude }),
        });
        const data = await response.json();
        console.log(data);
      };
    
      return <div>Tracking location...</div>;
    };
    
    export default LocationTracker;