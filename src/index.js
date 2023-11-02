import _ from 'lodash';
import './style.css';
import Snowman from './muneco-de-nieve.png';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const mySnowman = document.createElement('img');
  mySnowman.src = Snowman;
  
  element.appendChild(mySnowman);

  return element;
}

document.body.appendChild(component());
