## Website Performance Optimization portfolio project

----
## To run the project:
Navigate to:  [FEND P4: Website Performance Optimization](http://eee003.github.io/frontend-nanodegree-mobile-portfolio/dist/)


Alternatively to look at the src and dist folders within the project, 
navigate to: [My github repository](https://github.com/eee003/frontend-nanodegree-mobile-portfolio)

Once there, you can:
##
1. Check out the repository
2. To inspect the site , you can run a local server

```bash
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
```
##
1. Open a browser and visit localhost:8080
2. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.  Note that I needed to add http infront of ngrok 8080 on my system unlike the original directions given for this assignment

``` bash
$> cd /path/to/your-project-folder
$> http ngrok 8080
```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! 


## How to build the project 

The project has already been configured with a package.json and a Gruntfile. 
1. Change to the project's root directory.
2. Install project dependencies with npm install.
3. Convert images to .webp format using www.online-convert.com and store the converted image files in the orginal folders along with the originals.  The code has been updated to use the .webp files.
4. Run Grunt with grunt.


## Optimizations Used:
1. Converted images to .webp format (www.online-convert.com)
2. Minimized critical css. (grunt-contrib-cssmin)
3. Inlined minimized css except for the print.min.css
4. JS that does not affect the DOM was changed to Async
5. HTML was minimized (grunt-contrib-cssmin)
6. JS files were minimized. (grunt-contrib-uglify)
7. Moved unnecssary work from 'for' looks in main.js
8. Reduced the number of pizzas


### Optimization Tips and Tricks and Resources
* John Mav Hang-out on using Grunt - Thank you John!!!
* FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks)
* [Critical Rendering Path course](https://www.udacity.com/course/ud884).
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

