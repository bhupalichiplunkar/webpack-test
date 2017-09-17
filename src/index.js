import _ from 'lodash';
import printMe from './print';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.onclick = printMe;
    btn.innerHTML = "Click me!!";
    element.appendChild(btn)
    return element;
  }
  
  document.body.appendChild(component());