const apiURL = 'https://dock-booking-logisticsbooking.koyeb.app/';

export function fetchAppointments() {
  return fetch(`${apiURL}bookings`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}