(function(){

  const btn = document.querySelector('.btn');
  const results = document.querySelector('.well');

  let getCoords = function() {

    if (!navigator.geolocation) {

      results.innerText = 'Twoja przegladarka nie wspiera geolokacji';
      btn.setAttribute('disabled','');

    } else {

      let lat;
      let lon;
      let link;

      results.innerHTML = '';
      
      navigator.geolocation.getCurrentPosition(
        function(e){
          lat = e.coords.latitude;
          lon = e.coords.longitude;

          link = document.createElement('a');
          link.innerText = `http://bing.com/maps/default.aspx?cp=${lat}~${lon}`;
          link.setAttribute('href',`http://bing.com/maps/default.aspx?cp=${lat}~${lon}`);
          results.appendChild(link);

        });
    }
  };

  btn.addEventListener('click', getCoords);

})();
