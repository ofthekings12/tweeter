# Tweeter Project

Tweeter (or Quacker, with a slight rebrand 😇) is a simple, single-page Twitter clone.

Student forked and cloned a repository with starter code then built upon it using their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Take a look at the GIF below demonstrating the following features:
- Fixed Navigation Bar
- When a user hovers over a tweet, that tweet displays a box shadow
When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)
- When a user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon changes colour.
The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed
- Responsive design for various screen and display sizes.

!["Demo Gif of Quacker"](https://github.com/ofthekings12/tweeter/blob/master/docs/quacker.gif?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Body-Parser
- TimeAgo
- Chance
- Node 5.10.x or above
