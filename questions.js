// 16 weeks x 5 questions. Each question: [question, [4 options], index of correct option (0-3)]
window.WEEKS = [
 {t:"How the web works", q:[
  ["What does a web browser do?",["Stores websites permanently","Requests web pages and displays them","Writes HTML for you","Connects your computer to power"],1],
  ["What does URL stand for?",["Universal Resource Link","Uniform Resource Locator","User Request Line","Unified Routing List"],1],
  ["Which protocol adds encryption to web traffic?",["HTTP","FTP","HTTPS","SMTP"],2],
  ["What is a web server?",["A computer that stores and sends website files","A type of browser","A coding language","A search engine"],0],
  ["What does DNS do?",["Designs web pages","Turns domain names into IP addresses","Speeds up your Wi-Fi","Checks spelling in code"],1]]},
 {t:"HTML basics", q:[
  ["What does HTML stand for?",["HyperText Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlink Text Making Language"],0],
  ["Which line should start every HTML5 page?",["<html5>","<!DOCTYPE html>","<start>","<head>"],1],
  ["Where does the visible page content go?",["<head>","<title>","<body>","<meta>"],2],
  ["Which tag makes the largest heading?",["<h6>","<heading>","<h1>","<big>"],2],
  ["What is an HTML element usually made of?",["Only a closing tag","An opening tag, content and a closing tag","A CSS rule","A JavaScript function"],1]]},
 {t:"Text, links and images", q:[
  ["Which tag creates a paragraph?",["<p>","<para>","<text>","<pg>"],0],
  ["Which attribute holds a link's destination?",["src","link","href","to"],2],
  ["Which tag shows an image?",["<picture-src>","<img>","<image>","<photo>"],1],
  ["Why is the alt attribute on images important?",["It makes images load faster","It describes the image for screen readers and if it fails to load","It adds a border","It changes the image size"],1],
  ["Which tag gives text strong importance (usually bold)?",["<b>","<strong>","<em>","<i>"],1]]},
 {t:"Lists and tables", q:[
  ["Which tag makes a numbered list?",["<ul>","<ol>","<dl>","<nl>"],1],
  ["Which tag makes a bulleted list?",["<ul>","<ol>","<li>","<bl>"],0],
  ["Each item inside a list uses which tag?",["<item>","<li>","<lt>","<td>"],1],
  ["Which tag creates a row in a table?",["<td>","<th>","<tr>","<row>"],2],
  ["Which tag is for a table header cell?",["<th>","<thead-cell>","<head>","<td>"],0]]},
 {t:"Forms", q:[
  ["Which tag wraps a whole form?",["<input>","<form>","<fieldset>","<submit>"],1],
  ["Which input type hides the characters you type?",["hidden","secret","password","text"],2],
  ["What does a <label> do?",["Adds colour to inputs","Names an input so users and screen readers know what it is","Submits the form","Validates email"],1],
  ["Which input type is best for an email address?",["type=\"text\"","type=\"mail\"","type=\"email\"","type=\"address\""],2],
  ["Which attribute makes a field required?",["must","required","needed","validate"],1]]},
 {t:"Semantic HTML and accessibility", q:[
  ["Which tag is best for a site's main navigation links?",["<div>","<nav>","<menu-bar>","<links>"],1],
  ["Which tag holds the main content of a page?",["<main>","<body-content>","<section-main>","<center>"],0],
  ["Why use semantic tags like <header> and <footer>?",["They load faster","They describe the meaning of content for browsers, search engines and assistive tech","They are required by CSS","They add styles automatically"],1],
  ["What is web accessibility about?",["Making sites usable by everyone, including people with disabilities","Making sites free to visit","Adding passwords","Using bright colours"],0],
  ["Which is the better choice for a clickable action?",["<div onclick>","<span>","<button>","<p>"],2]]},
 {t:"CSS basics and selectors", q:[
  ["What does CSS stand for?",["Creative Style Sheets","Cascading Style Sheets","Computer Style System","Colorful Style Syntax"],1],
  ["How do you link an external CSS file?",["<style src=\"style.css\">","<link rel=\"stylesheet\" href=\"style.css\">","<css>style.css</css>","<script href=\"style.css\">"],1],
  ["Which selector targets class=\"card\"?",["#card","card",".card","*card"],2],
  ["Which selector targets id=\"menu\"?",["#menu",".menu","menu","@menu"],0],
  ["Which property changes text colour?",["font-color","text-color","color","fill"],2]]},
 {t:"The box model", q:[
  ["What are the parts of the CSS box model, inside to outside?",["Margin, border, padding, content","Content, padding, border, margin","Padding, content, margin, border","Border, content, margin, padding"],1],
  ["Which property adds space inside the border?",["margin","padding","gap","spacing"],1],
  ["Which property adds space outside the border?",["padding","outline","margin","border-space"],2],
  ["What does box-sizing: border-box do?",["Removes the border","Includes padding and border in the width you set","Adds a shadow","Centres the box"],1],
  ["What is the default display value of a <div>?",["inline","block","flex","none"],1]]},
 {t:"Colours, fonts and units", q:[
  ["Which is a valid hex colour?",["#12G45Z","#1d2bd8","rgb#123","##fff"],1],
  ["Which property sets the typeface?",["font-family","font-style","typeface","text-font"],0],
  ["The rem unit is relative to…",["The parent element's width","The root (html) font size","The screen height","Pixels only"],1],
  ["What does 50vw mean?",["50 pixels","Half of the viewport width","50% of the font size","50 view weights"],1],
  ["Which property makes text bold?",["font-weight","text-bold","font-style","weight"],0]]},
 {t:"Flexbox", q:[
  ["How do you turn an element into a flex container?",["display: flex","flex: on","position: flex","layout: flex"],0],
  ["Which property spaces items along the main axis?",["align-items","justify-content","flex-wrap","text-align"],1],
  ["Which property aligns items on the cross axis?",["align-items","justify-content","flex-direction","order"],0],
  ["What does flex-direction: column do?",["Stacks items vertically","Puts items in a row","Hides items","Reverses colours"],0],
  ["Which property lets flex items move onto new lines?",["flex-wrap: wrap","overflow: wrap","line-break: flex","wrap: true"],0]]},
 {t:"CSS Grid", q:[
  ["How do you start a grid layout?",["display: grid","grid: on","display: table","layout: grid"],0],
  ["Which property defines column sizes?",["grid-columns","grid-template-columns","columns-size","grid-cols"],1],
  ["What does 1fr mean in a grid?",["One pixel","One fraction of the free space","One font size","One row"],1],
  ["Which property sets space between grid cells?",["gap","margin","padding","spacing"],0],
  ["What does repeat(3, 1fr) create?",["Three equal columns","One column repeated 1 time","Three rows of 1px","A 3-pixel gap"],0]]},
 {t:"Responsive design", q:[
  ["What is responsive design?",["A site that answers questions","A layout that adapts to different screen sizes","A site that loads instantly","A design with animations"],1],
  ["Which tag is needed in <head> for mobile-friendly pages?",["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","<mobile>","<meta charset=\"mobile\">","<link rel=\"phone\">"],0],
  ["Which CSS feature applies styles at certain screen widths?",["Media queries","Variables","Keyframes","Selectors"],0],
  ["What does \"mobile-first\" mean?",["Only build for phones","Write styles for small screens first, then add for larger ones","Test on a phone last","Use apps instead of sites"],1],
  ["How do you stop images overflowing their container?",["img { max-width: 100%; }","img { width: 2000px; }","img { overflow: none; }","img { size: auto; }"],0]]},
 {t:"JavaScript basics", q:[
  ["Which keyword declares a variable that can't be reassigned?",["var","let","const","fixed"],2],
  ["What does console.log(\"Hi\") do?",["Shows a pop-up","Prints Hi in the browser console","Saves Hi to a file","Changes the page title"],1],
  ["Which is an array?",["{name: \"Ana\"}","[1, 2, 3]","\"1, 2, 3\"","(1, 2, 3)"],1],
  ["What is the result of 2 + \"2\" in JavaScript?",["4","\"22\"","Error","NaN"],1],
  ["Which operator checks equal value AND type?",["=","==","===","!="],2]]},
 {t:"The DOM and events", q:[
  ["What is the DOM?",["A database","The browser's tree of objects representing the page","A CSS framework","A server"],1],
  ["Which method finds the first element matching a CSS selector?",["document.querySelector()","document.find()","document.getCSS()","document.select()"],0],
  ["How do you run code when a button is clicked?",["button.onLoad()","button.addEventListener(\"click\", fn)","button.click = true","button.run(fn)"],1],
  ["Which property safely changes an element's text?",["innerText or textContent","value()","style","src"],0],
  ["What does element.classList.add(\"active\") do?",["Deletes the element","Adds the class active to the element","Creates a new element","Adds a CSS file"],1]]},
 {t:"Git and GitHub", q:[
  ["What is Git?",["A web browser","A version control system that tracks code changes","A hosting company only","A text editor"],1],
  ["Which command saves a snapshot of staged changes?",["git save","git commit","git push","git snap"],1],
  ["Which command stages a file for the next commit?",["git add","git stage-file","git commit","git keep"],0],
  ["What does git push do?",["Downloads changes","Sends your commits to a remote repository like GitHub","Deletes a branch","Undoes a commit"],1],
  ["What is a branch used for?",["Working on changes separately from the main code","Deleting files","Hosting a site","Writing CSS"],0]]},
 {t:"Publishing and review", q:[
  ["Which service can host a static site for free from a GitHub repo?",["GitHub Pages","Microsoft Word","Photoshop","Excel"],0],
  ["What should the home page file usually be called?",["home.htm","index.html","main.page","start.html"],1],
  ["Where can you inspect HTML and CSS of a live page?",["Browser developer tools","The address bar","The task manager","The file explorer"],0],
  ["What does an HTML validator do?",["Checks your HTML for errors","Makes your site faster","Buys a domain","Writes JavaScript"],0],
  ["Which three languages form the core of front-end web development?",["Python, Java, C","HTML, CSS, JavaScript","SQL, PHP, Ruby","XML, JSON, YAML"],1]]}
];
