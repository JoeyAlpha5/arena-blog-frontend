# Arena Blog

The Arena Blog curates travel stories from travellers from all parts of the world. If you're planning a trip to any part of the world, be sure to checkout what others have to say about the location.

This documentation provides a breakdown of the Frontend code for this application. I took inspiration from [Unsplash's](https://unsplash.com/) homepage layout and [Substack's](https://snyder.substack.com/p/what-questions-should-i-answer-about/comments?s=r) minimal blog post design when designing my application.

Use the sections listed below to get started with running the application on your machine. 

## Documentation sections
- [Setting up the app](#setting-up-the-app)
- [Third party libraries and packages use](#third-party-libraries)
- [Application Preview](#application-preview)
- [Future improvements](#future-improvement)


### Setting up the app

1. To get started, clone this repository using the following git command
```
git clone https://github.com/JoeyAlpha5/arena-blog-frontend.git
```

2. Once the repo has been cloned, in your terminal cd into the project folder and run the command below

```
npm install
```

3. Once all the dependencies have been installed, start the app by running the command below

```
npm start
```


### Third party libraries

This section lists all the third party libraries, dependencies and images that have been used and the reasons for including them.

1. [React Router](https://reactrouter.com/) has been added to provide frontend routing.

2. [React Icons](https://react-icons.github.io/react-icons/). The Material menu and search icons have been imported from the React Icons library.

3. [Bootstrap](https://getbootstrap.com/). The Arena Blog uses Bootstrap to achieve its minmal and responsive layout.

4. [React Date Formatter](https://www.npmjs.com/package/react-date-formatter). This is a JavaScript package I built and published on NPM 6 months ago. It provides an easy way to format dates by simply providing the date string and specifying the format.

5. [Article Images](https://unsplash.com/@jalome). I've used my own stock images that I have published on Unsplash.


### Application preview

Below are the app UI screenshots. These were designed in Adobe XD. The banner has been modified slightly in the actual application. Everything else remains the same. The AdobeXD file has been included in this project in the [assets](https://github.com/JoeyAlpha5/arena-blog-frontend/tree/development/src/assets) folder.

To switch between dark mode and light mode you can toggle your system theme on your device.


#### Browser Screenshots
Home screen
![Arena Blog](src/assets/screenshots/Home-light-mode.png?raw=true "Arena Blog - Home screen")
![Arena Blog](src/assets/screenshots/Home-dark-mode.png?raw=true "Arena Blog - Home screen")

Article Screen
![Arena Blog](src/assets/screenshots/Article-light-mode.png?raw=true "Arena Blog - Article screen")
![Arena Blog](src/assets/screenshots/Article-dark-mode.png?raw=true "Arena Blog - Article screen")


### Future improvements

The application is far from perfect. The app could do with a slightly better font, additional features on the article screen such as a comment section and social media share options. The app is also missing a footer.

As the application grows, adding TypeScript would also be beneficial so that error warnings are seen during development and not at runtime. Defining the data types coming from the API will also be beneficial.