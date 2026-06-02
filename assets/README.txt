BTD6 Farming Calculator Framework

Open index.html through a simple local server or upload everything to GitHub Pages.

Main files:
- index.html: layout
- style.css: visual design
- app.js: UI logic, drag/drop, calculator hooks
- data/images.js: image variable names
- data/towers.js: tower data/cost framework
- data/roundIncome.js: round income values 1-140

Where to add your math:
- app.js -> calculateTowerIncomeForRound(round)
- app.js -> generateOptimalPlan()

Where to add spreadsheet data:
- data/roundIncome.js

Where to add images:
- Put files in assets/icons or assets/towers
- Edit data/images.js to point variable names to those files

Example:
bananaFarm: { src: "assets/towers/banana-farm.png", fallback: "🍌" }

GitHub Pages:
Upload all files/folders to a public GitHub repo, then enable Pages from Settings -> Pages.
