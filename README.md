Do both of these following tasks in Javascript or Typescript. Do all of you work within a git repository and send
the repository link to submit these tasks.
Interview Task 1
Your Task
Create a command line application that interfaces with an existing API.
This task should take under an hour to complete.
Requirements

1. Prompt the user for a string input
2. Ping the /books/search endpoint with the string as the title value
3. If the book is found
   a. Pings the /authors/:authorId endpoint for each author id of the book
   b. Retrieves the names of each author
4. Then displays the book title, description, and the full name and middle initial of the authors.
   a. OR if the book could not be found indicate that the book could not be found
5. Ask the user for input again and repeat indefinitely

Documentation
https://documenter.getpostman.com/view/15757300/UzXNVJCg
Make sure to look at all the examples:

Click at red underline on documentation page to view all example across both endpoints
Notes

● All example requests in the documentation are fully functional and will work as described if
passed the same data.
● All other requests will return gibberish, but still be fully valid according to the schema.
● /books/search Has a 50% of returning a book, and a 50% chance of failing
○ This is completely random meaning for the string “lkajs” you could get book not found,
then do it again right away and find a book.

● /authors/:authorId will return a random author name for any authorId

Interview Task 2

Your Task
Create a web server and website with some basic functionality.
This task should take under an hour to complete.
Requirements

1. The website should have one website page on the root “/” endpoint
   a. This page should display a number count and a button.
   b. The count should start at 0 and persist across page reloads.
   c. The button should increment the count by one.
2. The website should have a post route on the “/increment” endpoint
   a. This route should increment the count by a value that is passed to the endpoint in the
   body of the request
   b. It should then return what the new count is
   c. This route should be what the button uses to increment the count
   d. This route should validate the body and return an error when the body is invalid
3. The website should have a get route on the “/count” endpoint
   a. This route should return the current count
4. DO NOT use any UI framework like react or vue, use only vanilla javascript(or typescript), html,
   and css.
5. The only required set up to start the server should be “npm install” and “npm start”
