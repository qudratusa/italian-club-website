# Italian Club Website

A multi-page website prototype for an Italian Club at UNC Charlotte, built with HTML, CSS, and JavaScript.

The project was created as a final course project in April 2025 and focuses on clear navigation, event information, membership content, and interactive front-end features.

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
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── pasta-night.jpg
│   ├── film-night.png
│   └── culture-festival.jpg
├── .gitignore
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

This project can be hosted as a static site with GitHub Pages. The HTML, CSS, JavaScript, carousel, modal, accordion, dark mode, and other browser-side interactions can be served directly from the repository.

### Membership form note

The membership page contains a form whose original action points to `submit-membership.php`. A PHP backend handler was not included with the project files, so the form submission itself is not functional on a static GitHub Pages deployment. The rest of the front-end can still be demonstrated normally.

## Project Goals

The site was designed for students and faculty interested in Italian culture at UNC Charlotte. The project emphasizes simple navigation, community information, event discovery, membership engagement, and interactive UI elements.

Potential future enhancements include a larger photo gallery, cultural blog content, and email notifications for event RSVPs.

## Notes on Images

The event images in this repository were part of the original project assets. Before publishing this repository publicly, verify that you have permission or an appropriate license to redistribute each image. Replace any image you do not have rights to publish.

## Author

Qudrat Siyal
