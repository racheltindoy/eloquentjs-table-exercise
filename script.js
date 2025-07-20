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


const mountainCon = document.querySelector('#mountains');
const table = document.createElement('table');
mountainCon.appendChild(table);


const objKeys =  Object.keys(MOUNTAINS[0]);
const objLength = Object.keys(MOUNTAINS[0]).length;


function createTh() {
	const tr = document.createElement('tr');

	objKeys.forEach(objKey => {
		const th = document.createElement('th');
		th.textContent = objKey;
		tr.appendChild(th);
	});

	table.appendChild(tr);
}


function createTdForRow(tr, text) {
	const td = document.createElement('td');
	td.textContent = text;
	tr.appendChild(td);
}


function createTd() {
	MOUNTAINS.forEach(mountain => {
		// create row
		const tr = document.createElement('tr');

		createTdForRow(tr, mountain.name);
		createTdForRow(tr, mountain.height);
		createTdForRow(tr, mountain.place);

		table.append(tr);
	});
	
}


createTh();
createTd();