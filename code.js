const boykoDiv = document.getElementById('boyko');
const infoDiv = document.getElementById('info');

// Add a click event listener to the 'boyko' div
boykoDiv.addEventListener('click', function() {
  infoDiv.html= 'This is Mr. Boykos info';
});
