# Italian Club Website

A multi-page front-end website prototype for an Italian Club at UNC Charlotte, built with HTML, CSS, and JavaScript.

The project was created as a final course project in April 2025 and focuses on clear navigation, event information, membership content, accessibility-minded controls, and interactive front-end features.

## Features

- Multi-page navigation across Home, About Us, Events, and Membership pages
- Italian-themed header, homepage photo, and responsive layouts
- Persistent dark/light mode with accessible controls and system-theme support
- Expandable accordion for club history
- Clearly labeled RSVP preview with a keyboard-accessible modal
- Event image carousel with manual controls, pause/play, and reduced-motion support
- Membership form preview with validation; no data is sent or saved
- Italian phrase feature with English translations
- Visible keyboard focus, skip navigation, and active-page indicators

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
italian-club-website/
├── index.html
├── about.html
├── events.html
├── membership.html
├── styles.css
├── script.js
├── pasta-night.jpg
├── film-night.png
├── culture-festival.jpg
└── README.md
```

## Run Locally

Because this is a static front-end project, you can open `index.html` directly in a browser. For more reliable Fetch API behavior, run a simple local web server from the project folder.

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

This project is suitable for GitHub Pages because the main site is built with static HTML, CSS, and JavaScript.

The following browser-side features can run on a GitHub Pages deployment:

- Multi-page navigation
- Persistent dark mode
- Accordion interaction
- RSVP preview modal
- Event carousel
- Italian phrase feature

### Membership form note

The membership form is an explicit front-end demonstration. JavaScript prevents submission, displays a demo message, and clears the fields. It has no PHP handler, backend, or membership storage. The submit button stays disabled when JavaScript is unavailable. Use fictional details when trying it.

RSVP buttons also demonstrate the interface only; no registration is made. Events, leadership, meeting details, and history are labeled as original 2025 project content rather than verified current club information.

The only saved preference is the selected color theme in browser local storage. Membership details and RSVP actions are not stored.

## Project Goals

The site was designed for students and faculty interested in Italian culture at UNC Charlotte. The project emphasizes simple navigation, community information, event discovery, membership engagement, and interactive UI elements.

The original final-project documentation identified future enhancements such as a larger gallery of club-event photos, cultural blog content, and email notifications for members who RSVP to events.

## Skills Demonstrated

- Front-end web development
- HTML structure and multi-page navigation
- CSS styling and responsive layout
- JavaScript DOM manipulation
- Event handling
- Modal and carousel interactions
- Dark mode implementation
- Browser preference storage with `localStorage`
- Client-side form validation and demo submission handling
- Keyboard-accessible modal and reduced-motion behavior
- UI design and usability improvements

## Notes on Images

The event images in this repository were part of the original project assets. Before reusing or redistributing them outside this academic portfolio project, verify that you have permission or an appropriate license for each image.

## Project Status

**Academic final project / front-end prototype**

The repository preserves the original academic scope, pages, and image assets while improving readability, accessibility, mobile layout, and the honesty of demo interactions. No production membership or RSVP service is included. The original dog API demo was replaced by an Italian phrase feature to better fit the club theme.

## Author

Qudrat Siyal
