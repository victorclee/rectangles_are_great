# Tovala front end web developer challenge

The challenge is to build a single­page javascript application that lets users drag colored rectangles around an area. The application should be as simple as possible but also needs to work robustly and intuitively. It is fine to include documentation on use. It is better if the application itself gives the user enough feedback to figure out all the possible activities.
</br>
Here is the requested feature set:
* Add a new rectangle to the area
* Remove a rectangle
* Resize a rectangle using direct mouse manipulations
* Move a rectangle using direct mouse manipulations
* Change the color of a rectangle
* Clear the area
* Save the current area layout (the position, size, and color of each rectangle in the area)
* Name a saved layout
* Return to a saved layout
* Delete a saved layout from the set of saved layouts
The layouts should be stored per­ user & should persist though a page refresh.
</br>
Please use any toolkit(s) that you like in implementing this application, then put the application up on a server so that we can play with it “live”, and provide a link to download all of the code that you have written. Please document which browsers you have used to test your code.

# Victor's documentation 
</br>
Initial thoughts on how to approach this app:
</br>
I think I need to research:
* SVG
* SVG path
* SVG container
* SVG rect
* svg g
* HTML DOM
* Removing an SVG element from the DOM using jQuery
* HTML Local Storage

Raphaël JavaScript Library is a lifesaver 
https://dmitrybaranovskiy.github.io/raphael/


