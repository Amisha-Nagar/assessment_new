# vue.js-assignment 7 (17 June 2025)
**How the Vue components were structured:**
- Vue is used on contact.html and app.js files.
- I used v-model for inputs and textarea for two-way data binding between these elements in my HTML and the app.js file.
- I tried to include the button component example shown in the live tutorial; however, I was unable to make it function correctly with the HTML.

**How validation and modal interaction works:**

Empty input fields:
- When a user clicks on an empty input or textarea, it will show the user that the information is required with an inline error message.

If information is inputted, but incorrect:
- First name input: Valid only if it contains alphabetic characters and no spaces.
- Email address input: Valid if it is a valid email address.
- Message textarea: Valid if the message is 10 or more characters.

Submit button and modal:
- The entire form uses @submit.prevent="handleSubmit" to prevent the default browser form submission.
- If all input fields and the textarea message are valid, then the user will receive a default browser alert showing that the form has been submitted, along with what the user has inputted for first name, email, and message, and that I will reach out to them soon.

**Testing notes:**
- I conducted testing on three browsers, i.e., Chrome, Edge, and Firefox.
- Chrome: The issues identified were related to HTML structure, the 'for' attribute was missing on label tags, and 'id' was missing on input and textarea tags. I also included autocomplete on email input as this was picked up as an issue. I included these in my HTML, and after doing so, no errors were shown in the console.
- Edge: The issues highlighted were the absence of meta charset and meta name in the header of my HTML, so I added them. There were also other issues identified related to capability, performance, and security, however, I am unsure how to fix these errors.
- Firefox: The issue picked up was related to a cookie warning, which I am also unsure how to fix.
  
**Challenges I faced and how they were resolved:**
- I was not unable Vue components into my project, as this was challenging. However, I ensured v-model was included, and for placeholders, I used native HTML attribute for placeholder.
- For the alert, the inputted elements were initially appearing as one long line or string, so I learned that adding \n introduced line breaks.
