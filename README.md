# eloquentjs-table-exercise
Eloquent JavaScript (Chapter 13 DOM) exercise — Build table from data using JavaScript and DOM manipulation.

# 🏔️ Eloquent JavaScript: Build Table from Data (Chapter 13 - DOM)

## 📖 About  
This is a small exercise from [Eloquent JavaScript, Chapter 13: The Document Object Model](http://eloquentjavascript.net/13_dom.html).  
The goal of this exercise is to practice DOM manipulation by dynamically generating an HTML table using JavaScript.

---

## 🗂️ Project Purpose  
- Practice creating and manipulating DOM elements with JavaScript.
- Build an HTML table based on a predefined data array.
- Reinforce understanding of objects, arrays, and the relationship between JavaScript and the DOM.

---

## 🏔️ Data Used  
```javascript
const MOUNTAINS = [
    { name: "Mount Everest", height: 8848, place: "Nepal/China" },
    { name: "K2", height: 8611, place: "Pakistan/China" },
    { name: "Kangchenjunga", height: 8586, place: "Nepal/India" },
    { name: "Lhotse", height: 8516, place: "Nepal/China" },
    { name: "Makalu", height: 8485, place: "Nepal/China" },
    { name: "Cho Oyu", height: 8188, place: "Nepal/China" },
    { name: "Dhaulagiri", height: 8167, place: "Nepal" },
    { name: "Manaslu", height: 8163, place: "Nepal" },
    { name: "Nanga Parbat", height: 8126, place: "Pakistan" },
    { name: "Annapurna I", height: 8091, place: "Nepal" },
    { name: "Mount Elbrus", height: 5642, place: "Russia" },
    { name: "Mount Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Mount Denali", height: 6190, place: "United States (Alaska)" },
    { name: "Mont Blanc", height: 4807, place: "France/Italy" },
    { name: "Mount Fuji", height: 3776, place: "Japan" }
];
