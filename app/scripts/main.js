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
  
  /*
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
*/

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  speechBtn.addEventListener('click', toggleItem);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();


