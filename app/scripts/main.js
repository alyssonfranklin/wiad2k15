/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);
  var querySelectorAll = document.querySelectorAll.bind(document);

  var stickyContainer = document.getElementById("sticky");
  var fluidContainer = document.getElementById("fluid");
  var navdrawerContainer = querySelector('.navdrawer-container');
  var speakDetailsContainer = querySelectorAll('.tracks-about');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var speechBtn = querySelector('.speech-container');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  function toggleItem() {
    speakDetailsContainer.classList.toggle('opened');
  }
  
  
  //sticky
  var stuck = false;
  var stickPoint = getDistance();

  function getDistance() {
    var topDist = stickyContainer.offsetTop;
    return topDist;
  }

  window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    fluidContainer.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
    if ( (distance <= 0) && !stuck) {
      stickyContainer.style.position = 'fixed';
      stickyContainer.style.top = '0px';
      stuck = true;
    } else if (stuck && (offset <= stickPoint)){
      stickyContainer.style.position = 'static';
      stuck = false;
    }
  }

  //gMaps
      function initialize() {
        var myLatlng = new google.maps.LatLng(19.372090, -99.261421);
        var mapOptions = {
          center: myLatlng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        
        var contentString = '<div id="content" style="width:300px; height:280px;">'+
        '<h3 style="white-space:nowrap;">WIAD CDMX 2015</h3><h4>IBM de México<br /><small>S. de R.L de C.V</small></h4>'+
        'Alfonso Nápoles Gándara No. 3111<br />Col. Parque Corporativo de Peña Blanca<br />Delegación Alvaro Obregón<br />C.P. 01210'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'WIAD CDMX 2015'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        google.maps.event.addDomListener(window, 'load', initialize);

      }


  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  speechBtn.addEventListener('click', toggleItem);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();


