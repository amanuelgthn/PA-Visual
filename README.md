# This is frontend (NEXT.JS) repository
## If you run `npm rum prepare` (just once!!), the pre-commit will install. It will check & format your code for you before committing :)

### Project uses:
 - https://ant.design/
 - https://sass-lang.com/guide/


### Some rules to follow:
- When possible you are suppose to NEVER use class functions declarations, instead you should use ARROW FUNCTIONS
<br/> These are very simple to learn: <a href="https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/">Link for tutorial</a>
- Component names (Folders and Component Functions) always Pascal Case<br/>
<img src="https://khalilstemmler.com/img/blog/camel-snake-pascal-case/camel-case-snake-case-pascal-case.png" height=200/><br/>
- When possibile use named exports instead of default exports
<br/>(Should be possible almost everywhere except ```page.tsx``` files)
<br/><img src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs82i6fitzwlcc9k700uh.png" height="300"/>
```
Example Chart.tsx component:
=====================
export const Chart = () => {
}
    ^^ THIS IS VERY GOOD :) 

=====================
export function Chart() {
}
    ^^ THIS IS BAD !1!11!!

=====================
function Chart() {
}
export default Chart;
^^ THIS IS VERY VERY VERY BAD !1!11!!

===============================================================

Example page.tsx for sub page /Dashboard:
=====================
const Dashboard = () => {
}
export default Dashboard;

^^ SO SIMPLE :) ^^

```

- More will be added in the future. Please stay updated :)
<br/>
<hr/>
<br/>
<br/>

```
Example folder structure you should follow
.
├── /public/                    # Resources available to public for example: photos, videos, icons
├── /src/                       # Main folder
├────── /app/                   # Main folder
├───────── /About/              # Example page folder. Such folder will result: /About
├──────────── page.tsx        # page.tsx is mandatory for page to exist.
├──────────── About.scss      # About.scss is the main style file for page you are creating.
#^^ IMPORTANT: You are not allowed to have more than 2 files in this folder (only page.tsx and About.scss) ^^
├───────── /Components/         # Components folder
├───────────── /About/           # All the components for /About page
├────────────────── /Header/    # About page's component folder
├──────────────────────── Header.tsx  # Header's component component file (.tsx)
├──────────────────────── Header.scss # Header's component styles file (.scss)
├───────── /Utils/
├───────────── /config/                     # Configurations folder
├────────────────── Constants.ts            # This component contains only values (strings, numbers etc.) that are used across multiple components and that MAY change in the future.
├───────────── /services/               # Services folder
├────────────────── GlobalPropertyAPI.tsx           # API service component. Contains all the API-related stuff.
├───────────── Validators.tsx # Utility component. For example functions that are used across multiple components
├── globals.css # Global style file. Please dont touch it if you dont need to.
├── layout.tsx # Main layout file. Please dont touch it
├── favicon.ico # Web icon :)
├── page.tsx # Home page file. Route ./ 
```
# Tutorials
### 1. How to start new sub-page?
Let's say we are making page ```Dashboard```

- 1. We go to ``` PA-visual/src/app/``` and create folder ```Dashboard```.<br/>*So it should look like: ```PA-visual/src/app/Dashobard```*
- 2. While we are in the folder we just created we create two new files: ```page.tsx``` and ```Dashboard.scss```.
<br/>*!! That will be all the files that are suppose to be in this folder. !!*


### 2. How to add/create new component for my ```Dashboard``` page?
- 1. We go to ``` PA-visual/src/app/components``` and create folder ```Dashboard```.<br/>*So it should look like: ```PA-visual/src/app/components/Dashobard```*
- 2. In folder ```(...) /components/Dashboard``` we create a folder for EACH component we want our sub-page to have.<br/> For example: We want to have 2 components: ```Chart.tsx``` and ```Header.tsx```.<br/>
In folder ```(...) /components/Dashboard``` we create two seperate folder ```/Chart/``` and ```/Header/```.<br/>
Each component folder supose to have only two files !!! ```Chart.tsx <-- (your component name)``` and ```Chart.scss <-- (your component styles name)```<br/>
```
The result should look like:
.app/
├─ /Dashboard/
├─── page.tsx # page component (HAS TO BE CALLED page.tsx)
├─── Dashboard.scss # page styles (HAS TO BE CALLED "page name.scss")
├──── /components/
├──────── /Dashboard/ # sub-page name 
├──────────── /Chart/
├──────────────── Chart.tsx   # Component name .tsx (HAS TO BE CALLED "component name.tsx")
├──────────────── Chart.scss  # Component name .scss (HAS TO BE CALLED "component name.scss")
├──────────── /Header/
├──────────────── Header.tsx  # Component name .tsx (HAS TO BE CALLED "component name.tsx")
├──────────────── Header.scss #  Component name .scss (HAS TO BE CALLED "component name.scss")
```


### _How to run the app_

```
npm install
```

```
npm run dev
```

### _How to build the app_
## Before merging to PROD please run it so you make sure build wont fail!

```
npm install
```

```
npm run build
```



#### It uses pre-commit!
