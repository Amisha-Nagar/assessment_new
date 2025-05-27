# js-assignment (27 May 2025)
**What the popup does:**
- I added a new section to my website with a downloadable UI Cheatsheet to give the popup interaction more purpose. When you click the "Learn more" button, it opens a popup with more details about the Cheatsheet and a button to download it (the download button doesn't work yet, it’s just a placeholder for now).

**What user action triggers it:**
- When you click on the "Learn more" button, the overlay and popup shows up. Clicking on the close icon or outside the popup container/ on the overlay section will close the popup.

**Why I chose this interaction:**
- I chose a pop-up because it seemed simple to execute and by adding a new section to my website it made sense to the UX.

**Challenges or decisions I made while working with JavaScript:**
- I tried to use a pop-up example from She Can Code, but realised that it had no event listeners, so I went back to the example provided in the tutorial. So there was plenty of times where the pop-up did not want to show because my naming was not linked properly.
- My CSS is a mix of the examples I've seen and trying to align to my brands UI.
- I also struggled for the popup to have padding on smaller screen sizes.

# advanced-css-assignment (20 May 2025)
**How I approached responsiveness:**
- I first designed my layout in Figma so that I could visualise what I wanted in code. I started with mobile first, and used smaller fonts styles, narrower padding and layout (i.e vertical stacked view for tiles) for smaller screens. I, then, scaled up the font sizes and changed layout (i.e horizontal tiles) and added more padding to create more breathing room at a breakpoint of 768px for tablets and desktops. 


**Where and why I used layout tools like Flexbox or Grid:**
- I used both flexbox and grid.
- Flexbox was used in the navigation bar, the hero section, and the about section. On the larger screen sizes it allowed me align content side-by-side.
- Grid was used in the _What I Offer_ section to display the tiles in a vertical stack smaller screens, and then three tiles in a row (horizontally) on larger screens.


**What design decisions I made for navigation, structure, and interactivity:**
- Navigation: I decided to add a menu icon for smaller screens (I still need to figure out how to add the interaction that opens the navigation menu), and on larger screens this expands into navigation bar with tabs/ links.

- Structure: This is something I tried to improve from the previous version of my html and css, and tried to use more common conventions when it comes to website layout, like adding a Hero section, and then separating each section with alternating colours.

- Interactivity: I added animation effects to hover state of the call to action - this included background colour change and shadow effect, as well as replace the normal bullet point list with emojis in the _contact_ section.

**Any challenges I faced or ideas I tested:**

Challenges:
- I struggled figuring out how to layout content inside content, but what helped was actually drawing boxes on a piece of paper and labelling it, e.g. "section" wraps "heading" and "container", and then container wraps "content and image".
- Something I haven't yet figured out is why the padding on the right isn't displaying as expected, it is as if there is no padding applied. It could be because of flex properties applied and I still need to do more testing.
- I also struggled with displaying the illustrations and images at appropriate sizes so that it scales better on the different breakpoints.
- I wanted to add border to my profile image but it is not being displayed when tested.

Ideas I tried out:
- I used embedded menu icon from Google Symbols by adding the embed code to html head tag.
- I wanted to improve my website layout, so for this assignment, I first started off in Figma, so that when it came to coding it would look decent and more like a commonly made website page. Although, it did not come out 100% as the Figma design, I came pretty close, so I'm glad I started with design first.
