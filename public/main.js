// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from './utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const jokeHTML = () => {
  document.querySelector('#app').innerHTML = `
  <h2>READY FOR A JOKEE</h2>
  <button class="btn btn-danger" id="clicketh">HEHEHEHEHEHEHE CLICKETH ME</button><br />
    <hr />
    <div id="text">
    </div>
    <div id="punch"> 
    </div>
  `;

  let punchline = '';

  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target && e.target.id === 'clicketh') {
      getRequest().then((response) => {
        document.querySelector('#punch').innerHTML = '';
        document.querySelector('#text').innerHTML = response.setup;
        e.target.innerHTML = 'Get Punchline';
        e.target.setAttribute('id', 'punchline');
        punchline = response.delivery;
      });
    } else if (e.target && e.target.id === 'punchline') {
      document.querySelector('#punch').innerHTML = punchline;
      e.target.setAttribute('id', 'clicketh');
      e.target.innerHTML = 'Get Another Joke';
    }
  });
};

jokeHTML();
