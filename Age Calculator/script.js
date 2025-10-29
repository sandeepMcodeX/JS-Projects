const birthInput = document.querySelector('#date');
const calcBtn = document.querySelector('.btn');
const result = document.querySelector('#result');


birthInput.max = new Date().toISOString().split('T')[0];

calcBtn.addEventListener('click', calculateAge);

function calculateAge() {
  if (!birthInput.value) {
    return showMessage('Please select your birth date.', 'orange');
  }

  const birthDate = new Date(birthInput.value);
  const today = new Date();

  if (birthDate > today) {
    return showMessage('Birth date cannot be in the future.', 'red');
  }

  const age = getAgeDifference(birthDate, today);
  showMessage(
    `You are <strong>${age.years}</strong> years, <strong>${age.months}</strong> months, and <strong>${age.days}</strong> days old.`,
    'white'
  );
}

function getAgeDifference(birthDate, today) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += getDaysInMonth(today.getFullYear(), today.getMonth());
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function showMessage(message, color) {
  result.style.color = color;
  result.innerHTML = message;
}
