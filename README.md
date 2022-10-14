# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Built with HTML, CSS, JS, JQuery, AJAX, Express, and Node.

## Functionality

### Nav Bar
Fixed Nav bar at the top of the page compatible with tablet/mobile and large screen sizes.

### Compose Tweets
Below the Nav bar consists of the compose tweets and includes our users avatar profile picture and username. On mobile the avatar and username is right below the Nav bar and on large devices the page is split in the middle where our avatar and username resides on the left and the right contains our compose tweet form input.

Input form consists of a character counter indicating how many characters the user has left up to a maximum of 140 characters per tweet. The counter turns red once it has reached past the maximum characters. 

If the form is empty OR over the maximum characters and the user attempts to submit the form, appropriate errors will be alerted. Successful tweet will refresh our list displaying the new tweet at the top sorted by date posted.

### Tweets List

The tweets list contains all of our tweets that were tweeted! The container includes a avatar and username along with our users @ handle. At the bottom of the container contains our created at information along with a flag, retweet, and heart icon that are contain hover effect.

### Screenshots and GIFs
Screenshot of Tweeter main page

!["Main page of Tweeter"](https://github.com/kruciall/tweeter/blob/master/docs/tweeter-screenshot.png)

Composing a valid tweet
!["Composing a tweet"](https://github.com/kruciall/tweeter/blob/master/docs/tweeter-gif-1-tweet-submit.gif)

Shrinking our screen size to a mobile screen size
!["Large screen device shrinking to mobile size"](https://github.com/kruciall/tweeter/blob/master/docs/tweeter-gif-2-shrink.gif)

Catching our errors for no input and too many characters.
!["Displaying Errors"](https://github.com/kruciall/tweeter/blob/master/docs/tweeter-gif-3-errors.gif)


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
