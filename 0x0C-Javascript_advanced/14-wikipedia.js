let XMLHttpRequest = require('xhr2');

const createElement = (data) => {
  let paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.append(paragraph);
}

const queryWikipedia = (callback) => {
  function success() {
    let response = JSON.parse(this.responseText);
    let data = response.query.pages['21721040'];
    callback(data.extract)
  }
  function error(err) {
    console.log('Error Occurred :', err);
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = success;
  xhr.onerror = error;
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  xhr.send();
}

queryWikipedia(createElement);


// if you want check in HTML copy an paste the next code within Body
{/* <h2>Fetch API</h2>
    <p id="text"></p>

    <script>
       
      const createElement = (data) => {
        console.log(data)
        let paragraph = document.getElementById('text').innerHTML = data
      }

      const queryWikipedia = (callback) => {
        function success() {
          let response = JSON.parse(this.responseText);
          let data = response.query.pages['21721040'];
          callback(data.extract)
        }
        function error(err) {
          console.log('Error Occurred :', err);
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = success;
        xhr.onerror = error;
        xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
        xhr.send();
      }

      queryWikipedia(createElement);
    </script> */}