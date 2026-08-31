# Italian Club Website

A multi-page front-end website prototype for an Italian Club at UNC Charlotte, built with HTML, CSS, and JavaScript.

The project was created as a final course project in April 2025 and focuses on clear navigation, event information, membership content, accessibility-minded controls, and interactive front-end features.

## Features

- Multi-page navigation across Home, About Us, Events, and Membership pages
- Italian-themed gradient header and responsive layout
- Dark/light mode toggle with a changing button label
- Expandable accordion for club history
- RSVP confirmation modal for events
- Auto-advancing and manually controlled event image carousel
- Membership form UI
- Fetch API integration that displays a randomly selected dog breed as a club mascot
- Button hover effects and secondary button styling

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Fetch API
- Font Awesome
- Dog API (`dogapi.dog`)

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
- Dark mode
- Accordion interaction
- RSVP confirmation modal
- Event carousel
- Fetch API mascot feature

### Membership form note

The membership page contains a form whose original action points to `submit-membership.php`. A PHP backend handler was not included with the original project files, so the form submission itself is not functional on a static GitHub Pages deployment. A note is displayed on the Membership page so visitors understand that it is a portfolio prototype.

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
- REST API integration with `fetch`
- Basic asynchronous JavaScript
- Error handling for API requests
- UI design and usability improvements

## Notes on Images

The event images in this repository were part of the original project assets. Before reusing or redistributing them outside this academic portfolio project, verify that you have permission or an appropriate license for each image.

## Project Status

**Academic final project / front-end prototype**

The repository preserves the original project structure and functionality while correcting file paths so the website can be viewed and demonstrated more reliably.

## Author

Qudrat Siyal
