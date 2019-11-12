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
                calendarUrl: "https://www.googleapis.com/calendar/v3/calendars/newschool.edu_08s6u2811f1ag7kfd9c5jmm9ho@group.calendar.google.com/events",
                past: false,
                upcomingHeading: '<h2 class="upcoming">Upcoming events</h2>',
                pastHeading: '',
            });
        }
	}
}

new Main();
