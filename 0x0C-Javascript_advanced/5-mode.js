const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let paragraph = document.createElement('p');
  paragraph.innerHTML = "Welcome Holberton!";
  document.body.append(paragraph);

  let spookyButton = document.createElement('button');
  spookyButton.id = 'spookyButton';
  spookyButton.innerText("Spooky");
  document.body.append(spookyButton);

  let darkModeButton = document.createElement('button');
  darkModeButton.id = 'darkModeButton';
  darkModeButton.innerText("Dark mode");
  document.body.append(darkModeButton);

  let screamModeButton = document.createElement('button');
  screamModeButton.id = 'screamModeButton';
  screamModeButton.innerText("Scream mode");
  document.body.append(screamModeButton);

  document.getElementById('spookyButton').onclick = spooky;
  document.getElementById('darkModeButton').onclick = darkMode;
  document.getElementById('screamModeButton').onclick = screamMode;
}

main();

// if you want to check in HTML check this code
// copy and paste the next code within HTML Body(<body>here!</body>)
{/* <h2>Change background color</h2>
<p id="text"></p>

<button id="spookyButton">Spooky</button>
<button id="darkModeButton">Dark mode</button>
<button id="screamModeButton">Scream mode</button>

<script>
  const changeMode = (size, weight, transform, background, color) => {
    return () => {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  };


  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  document.getElementById('text').innerHTML = "Welcome Holberton!";

  document.getElementById('spookyButton').onclick = spooky;
  document.getElementById('darkModeButton').onclick = darkMode;
  document.getElementById('screamModeButton').onclick = screamMode;
</script> */}

