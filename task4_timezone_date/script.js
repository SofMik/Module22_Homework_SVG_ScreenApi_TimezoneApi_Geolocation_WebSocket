const status = document.querySelector('#status');
const result_timezone = document.querySelector('#result_timezone');
const result_date_time = document.querySelector('#result_date_time');
const btn = document.querySelector('.j-btn-get');

// function for an error
const error = () => {
  status.textContent = 'Location information is not available.';
  result_timezone.textContent = '';
  result_date_time.textContent = '';
}

// function for a success
const success = (position) => {
 // console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  const options = {
    method: 'GET',
  }
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`, options)
      .then(response => response.json())
      .then(json => {
      // console.log(json);
        result_timezone.textContent = `Timezone: ${json.timezone}.`;
        result_date_time.textContent = `Date and time: ${json.date_time_txt}.`;
      })
      .catch(error => console.error('Ошибка:', error));
}

btn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser.';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
