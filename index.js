
// Validate the appointment booking form
function validateAppointmentForm() {
  const name = document.querySelector('#book-appointment input[name="name"]');
  const email = document.querySelector('#book-appointment input[name="email"]');
  const phone = document.querySelector('#book-appointment input[name="phone"]');
  const service = document.querySelector('#book-appointment select[name="service"]');
  const date = document.querySelector('#book-appointment input[name="date"]');
  const time = document.querySelector('#book-appointment input[name="time"]');

  // Check if the name field is empty
  if (name.value === '') {
    alert('Please enter your name.');
    return false;
  }

  // Check if the email field is empty
  if (email.value === '') {
    alert('Please enter your email address.');
    return false;
  }

  // Validate the email address
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Check if the phone field is empty
  if (phone.value === '') {
    alert('Please enter your phone number.');
    return false;
  }

  // Check if the service field is selected
  if (service.value === '') {
    alert('Please select a service.');
    return false;
  }

  // Check if the date field is empty
  if (date.value === '') {
    alert('Please select an appointment date.');
    return false;
  }

  // Check if the time field is empty
  if (time.value === '') {
    alert('Please select an appointment time.');
    return false;
  }

  // All fields are valid, so submit the form
  return true;
}

// Submit the appointment booking form
function submitAppointmentForm() {
  const form = document.querySelector('#book-appointment form');

  // Validate the form
  if (!validateAppointmentForm()) {
    return;
  }

  // Submit the form
  form.submit();
}

// Attach the submit event listener to the appointment booking form
document.querySelector('#book-appointment form').addEventListener('submit', submitAppointmentForm);

