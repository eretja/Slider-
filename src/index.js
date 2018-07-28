import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var images1 = [
  "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_517706482.jpg",
   "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_39249523.jpg",
   "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_500270767.jpg",
   "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_328002392.jpg",
   "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_99294278.jpg"
 ];

 var images2 = [
   "https://www.nagel-group.com/media/bilder/72_dpi/standorte/Aachen_675x282.jpg",
    "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_5e63ff8d080db6600065d41970ef894b_0_aachen_dom__andreas_herrmann.jpg",
    "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/2_aachen_dom_marlene_bauz.jpg",
    "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_328002392.jpg",
    "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/4_aachen_westpark2_marlene_bauz.jpg"
  ];


ReactDOM.render(
  <div>
<App images={images1} index="0"/>
<App images={images2} index="1"/>
  </div>, document.getElementById('root'));
registerServiceWorker();
