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
  var lastBtn = querySelector('.lstFM');
  var speechBtn = querySelector('.speech-container');
  var main = querySelector('main');

  
  var LastfmAPI = require('lastfmapi');
  var lfm = new LastfmAPI({
      'api_key' : '466b7cdb9035dacd8e8083b1d5ae9448',
      'secret' : 'c5780c66cecb43fa84b86f3e9c68cf0f'
    });


  function getLastFM() {
    console.log("here");
    alert("click");
    lfm.track.getInfo({
      'artist' : 'Shakira',
      'track' : 'Waka Waka'
    }, function (err, track) {
      if (err) { throw err; }
      console.log(track);
    });

  }

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


  lastBtn.addEventListener('click', getLastFM);
  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  //speechBtn.addEventListener('click', toggleItem);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();


