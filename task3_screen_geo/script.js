const status = document.querySelector('#status');
const screen = document.querySelector('#screen');
const btn = document.querySelector('.j-btn-get');
const screenWidth = window.screen.width 
const screenHeight = window.screen.height
//console.log('screenWidth', screenWidth);
//console.log('screenHeight', screenHeight);

// function for an error
const error = () => {
  status.textContent = '2. Location information is not available.';
}

// function for a success
const success = (position) => {
 // console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  status.textContent = `2. Latitude is ${latitude}°. Longitude is ${longitude}°.`;
}

btn.addEventListener('click', () => {
  screen.textContent = `1. Width of the screen is ${screenWidth} px. Height of the screen is ${screenHeight} px.`;
  if (!navigator.geolocation) {
    status.textContent = '2. Geolocation is not supported by your browser.';
  } else {
    status.textContent = '2. Location determination…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
