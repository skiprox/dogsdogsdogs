'use strict';

/***********************
*
* REQUIRE ALL MODULES
*
************************/

// Greensock
require('tween-lite');
require('ease-pack');
require('css-plugin');
require('scroll-to-plugin');
require('timeline-lite');
// Custom modules
const DogsLogo = require('./modules/dogs-logo');
const GoogleCalendar = require('./modules/google-calendar');

/***********************
*
* INITIATE ALL MODULES
*
************************/
class Main {
	constructor() {
		this.initializeModules();
	}
	initializeModules() {
		new DogsLogo();
        if (document.body.classList.contains('calendar')) {
            GoogleCalendar.init({
                calendarUrl: "https://calendar.google.com/calendar?cid=Y19yZWg4bTNjbTZibWV2bjVjaDVuMjc0b2lmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
                past: false,
                upcomingHeading: '<h2 class="upcoming">upcoming events</h2>',
                pastHeading: '',
            });
        }
	}
}

new Main();
