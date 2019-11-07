var defaultLayer = new L.StamenTileLayer("terrain-background");
defaultLayer.addTo(map);

var shrine = L.icon({
	iconUrl: 'https://cdn1.iconfinder.com/data/icons/japan-13/64/shrine-shinto-japanese-temple-pagoda-religion-japan-512.png',
	iconSize: [30, 30]
});

var mosque = L.icon({
	iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/islam-100384.png',
	iconSize: [30, 30]
});

var church = L.icon({
	iconUrl: 'https://www.pinclipart.com/picdir/big/26-267923_simpleicons-places-church-black-silhouette-with-a-cross.png',
	iconSize: [30, 30]
});

var abbey = L.icon({
	iconUrl: 'http://freevector.co/wp-content/uploads/2011/12/999-westminster-abbey-in-united-kingdom-eeuu1.png',
	iconSize: [30, 30]
});

var monastery = L.icon({
	iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/FrauenkircheDresdenSilhouette.svg/1200px-FrauenkircheDresdenSilhouette.svg.png',
	iconSize: [30, 30]
});

var gate = L.icon({
	iconUrl: 'https://i.dlpng.com/static/png/1406756_preview_preview.png',
	iconSize: [30, 20]
});

var bridge = L.icon({
	iconUrl: 'https://static.thenounproject.com/png/3512-200.png',
	iconSize: [30, 20]
});

var temple = L.icon({
	iconUrl: 'https://icon-library.net/images/buddha-icon/buddha-icon-14.jpg',
	iconSize: [30, 30]
});

var tomb = L.icon({
	iconUrl: 'https://icon-library.net/images/grave-icon/grave-icon-21.jpg',
	iconSize: [30, 30]
});	

var castle = L.icon({
	iconUrl: 'https://cdn2.iconfinder.com/data/icons/beach-solid/64/beach-06-512.png',
	iconSize: [30, 30]
});

var palace = L.icon({
	iconUrl: 'https://cdn0.iconfinder.com/data/icons/landmark-the-world-roamer/512/forbidden_city-512.png',
	iconSize: [30, 20]
});

var village = L.icon({
	iconUrl: 'https://cdn2.iconfinder.com/data/icons/africa-and-safari-solid-safari-world/512/African_hut-512.png',
	iconSize: [30, 30]
});

var academy = L.icon({
	iconUrl: 'https://static.thenounproject.com/png/5927-200.png',
	iconSize: [30, 30]
});

var amphitheatre = L.icon({
	iconUrl: 'https://cdn3.iconfinder.com/data/icons/world-landmarks-9/66/colloseum_rome_amphitheater_europe_gladiator_italy-512.png',
	iconSize: [30, 30]
});

var fort = L.icon({
	iconUrl: 'https://icon-library.net/images/fort-icon/fort-icon-18.jpg',
	iconSize: [30, 30]
});

var abbey10ad = L.featureGroup();
var abbey10bc = L.featureGroup();
var abbey11ad = L.featureGroup();
var abbey12ad = L.featureGroup();
var abbey13ad = L.featureGroup();
var abbey13bc = L.featureGroup();
var abbey14ad = L.featureGroup();
var abbey15ad = L.featureGroup();
var abbey16ad = L.featureGroup();
var abbey1ad = L.featureGroup();
var abbey2ad = L.featureGroup();
var abbey2bc = L.featureGroup();
var abbey31bc = L.featureGroup();
var abbey33bc = L.featureGroup();
var abbey37bc = L.featureGroup();
var abbey3ad = L.featureGroup();
var abbey4ad = L.featureGroup();
var abbey5ad = L.featureGroup();
var abbey5bc = L.featureGroup();
var abbey6ad = L.featureGroup();
var abbey6bc = L.featureGroup();
var abbey7ad = L.featureGroup();
var abbey8ad = L.featureGroup();
var abbey8bc = L.featureGroup();
var abbey9ad = L.featureGroup();
var academy10ad = L.featureGroup();
var academy10bc = L.featureGroup();
var academy11ad = L.featureGroup();
var academy12ad = L.featureGroup();
var academy13ad = L.featureGroup();
var academy13bc = L.featureGroup();
var academy14ad = L.featureGroup();
var academy15ad = L.featureGroup();
var academy16ad = L.featureGroup();
var academy1ad = L.featureGroup();
var academy2ad = L.featureGroup();
var academy2bc = L.featureGroup();
var academy31bc = L.featureGroup();
var academy33bc = L.featureGroup();
var academy37bc = L.featureGroup();
var academy3ad = L.featureGroup();
var academy4ad = L.featureGroup();
var academy5ad = L.featureGroup();
var academy5bc = L.featureGroup();
var academy6ad = L.featureGroup();
var academy6bc = L.featureGroup();
var academy7ad = L.featureGroup();
var academy8ad = L.featureGroup();
var academy8bc = L.featureGroup();
var academy9ad = L.featureGroup();
var amphitheatre10ad = L.featureGroup();
var amphitheatre10bc = L.featureGroup();
var amphitheatre11ad = L.featureGroup();
var amphitheatre12ad = L.featureGroup();
var amphitheatre13ad = L.featureGroup();
var amphitheatre13bc = L.featureGroup();
var amphitheatre14ad = L.featureGroup();
var amphitheatre15ad = L.featureGroup();
var amphitheatre16ad = L.featureGroup();
var amphitheatre1ad = L.featureGroup();
var amphitheatre2ad = L.featureGroup();
var amphitheatre2bc = L.featureGroup();
var amphitheatre31bc = L.featureGroup();
var amphitheatre33bc = L.featureGroup();
var amphitheatre37bc = L.featureGroup();
var amphitheatre3ad = L.featureGroup();
var amphitheatre4ad = L.featureGroup();
var amphitheatre5ad = L.featureGroup();
var amphitheatre5bc = L.featureGroup();
var amphitheatre6ad = L.featureGroup();
var amphitheatre6bc = L.featureGroup();
var amphitheatre7ad = L.featureGroup();
var amphitheatre8ad = L.featureGroup();
var amphitheatre8bc = L.featureGroup();
var amphitheatre9ad = L.featureGroup();
var bridge10ad = L.featureGroup();
var bridge10bc = L.featureGroup();
var bridge11ad = L.featureGroup();
var bridge12ad = L.featureGroup();
var bridge13ad = L.featureGroup();
var bridge13bc = L.featureGroup();
var bridge14ad = L.featureGroup();
var bridge15ad = L.featureGroup();
var bridge16ad = L.featureGroup();
var bridge1ad = L.featureGroup();
var bridge2ad = L.featureGroup();
var bridge2bc = L.featureGroup();
var bridge31bc = L.featureGroup();
var bridge33bc = L.featureGroup();
var bridge37bc = L.featureGroup();
var bridge3ad = L.featureGroup();
var bridge4ad = L.featureGroup();
var bridge5ad = L.featureGroup();
var bridge5bc = L.featureGroup();
var bridge6ad = L.featureGroup();
var bridge6bc = L.featureGroup();
var bridge7ad = L.featureGroup();
var bridge8ad = L.featureGroup();
var bridge8bc = L.featureGroup();
var bridge9ad = L.featureGroup();
var castle10ad = L.featureGroup();
var castle10bc = L.featureGroup();
var castle11ad = L.featureGroup();
var castle12ad = L.featureGroup();
var castle13ad = L.featureGroup();
var castle13bc = L.featureGroup();
var castle14ad = L.featureGroup();
var castle15ad = L.featureGroup();
var castle16ad = L.featureGroup();
var castle1ad = L.featureGroup();
var castle2ad = L.featureGroup();
var castle2bc = L.featureGroup();
var castle31bc = L.featureGroup();
var castle33bc = L.featureGroup();
var castle37bc = L.featureGroup();
var castle3ad = L.featureGroup();
var castle4ad = L.featureGroup();
var castle5ad = L.featureGroup();
var castle5bc = L.featureGroup();
var castle6ad = L.featureGroup();
var castle6bc = L.featureGroup();
var castle7ad = L.featureGroup();
var castle8ad = L.featureGroup();
var castle8bc = L.featureGroup();
var castle9ad = L.featureGroup();
var church10ad = L.featureGroup();
var church10bc = L.featureGroup();
var church11ad = L.featureGroup();
var church12ad = L.featureGroup();
var church13ad = L.featureGroup();
var church13bc = L.featureGroup();
var church14ad = L.featureGroup();
var church15ad = L.featureGroup();
var church16ad = L.featureGroup();
var church1ad = L.featureGroup();
var church2ad = L.featureGroup();
var church2bc = L.featureGroup();
var church31bc = L.featureGroup();
var church33bc = L.featureGroup();
var church37bc = L.featureGroup();
var church3ad = L.featureGroup();
var church4ad = L.featureGroup();
var church5ad = L.featureGroup();
var church5bc = L.featureGroup();
var church6ad = L.featureGroup();
var church6bc = L.featureGroup();
var church7ad = L.featureGroup();
var church8ad = L.featureGroup();
var church8bc = L.featureGroup();
var church9ad = L.featureGroup();
var fort10ad = L.featureGroup();
var fort10bc = L.featureGroup();
var fort11ad = L.featureGroup();
var fort12ad = L.featureGroup();
var fort13ad = L.featureGroup();
var fort13bc = L.featureGroup();
var fort14ad = L.featureGroup();
var fort15ad = L.featureGroup();
var fort16ad = L.featureGroup();
var fort1ad = L.featureGroup();
var fort2ad = L.featureGroup();
var fort2bc = L.featureGroup();
var fort31bc = L.featureGroup();
var fort33bc = L.featureGroup();
var fort37bc = L.featureGroup();
var fort3ad = L.featureGroup();
var fort4ad = L.featureGroup();
var fort5ad = L.featureGroup();
var fort5bc = L.featureGroup();
var fort6ad = L.featureGroup();
var fort6bc = L.featureGroup();
var fort7ad = L.featureGroup();
var fort8ad = L.featureGroup();
var fort8bc = L.featureGroup();
var fort9ad = L.featureGroup();
var gate10ad = L.featureGroup();
var gate10bc = L.featureGroup();
var gate11ad = L.featureGroup();
var gate12ad = L.featureGroup();
var gate13ad = L.featureGroup();
var gate13bc = L.featureGroup();
var gate14ad = L.featureGroup();
var gate15ad = L.featureGroup();
var gate16ad = L.featureGroup();
var gate1ad = L.featureGroup();
var gate2ad = L.featureGroup();
var gate2bc = L.featureGroup();
var gate31bc = L.featureGroup();
var gate33bc = L.featureGroup();
var gate37bc = L.featureGroup();
var gate3ad = L.featureGroup();
var gate4ad = L.featureGroup();
var gate5ad = L.featureGroup();
var gate5bc = L.featureGroup();
var gate6ad = L.featureGroup();
var gate6bc = L.featureGroup();
var gate7ad = L.featureGroup();
var gate8ad = L.featureGroup();
var gate8bc = L.featureGroup();
var gate9ad = L.featureGroup();
var monastery10ad = L.featureGroup();
var monastery10bc = L.featureGroup();
var monastery11ad = L.featureGroup();
var monastery12ad = L.featureGroup();
var monastery13ad = L.featureGroup();
var monastery13bc = L.featureGroup();
var monastery14ad = L.featureGroup();
var monastery15ad = L.featureGroup();
var monastery16ad = L.featureGroup();
var monastery1ad = L.featureGroup();
var monastery2ad = L.featureGroup();
var monastery2bc = L.featureGroup();
var monastery31bc = L.featureGroup();
var monastery33bc = L.featureGroup();
var monastery37bc = L.featureGroup();
var monastery3ad = L.featureGroup();
var monastery4ad = L.featureGroup();
var monastery5ad = L.featureGroup();
var monastery5bc = L.featureGroup();
var monastery6ad = L.featureGroup();
var monastery6bc = L.featureGroup();
var monastery7ad = L.featureGroup();
var monastery8ad = L.featureGroup();
var monastery8bc = L.featureGroup();
var monastery9ad = L.featureGroup();
var mosque10ad = L.featureGroup();
var mosque10bc = L.featureGroup();
var mosque11ad = L.featureGroup();
var mosque12ad = L.featureGroup();
var mosque13ad = L.featureGroup();
var mosque13bc = L.featureGroup();
var mosque14ad = L.featureGroup();
var mosque15ad = L.featureGroup();
var mosque16ad = L.featureGroup();
var mosque1ad = L.featureGroup();
var mosque2ad = L.featureGroup();
var mosque2bc = L.featureGroup();
var mosque31bc = L.featureGroup();
var mosque33bc = L.featureGroup();
var mosque37bc = L.featureGroup();
var mosque3ad = L.featureGroup();
var mosque4ad = L.featureGroup();
var mosque5ad = L.featureGroup();
var mosque5bc = L.featureGroup();
var mosque6ad = L.featureGroup();
var mosque6bc = L.featureGroup();
var mosque7ad = L.featureGroup();
var mosque8ad = L.featureGroup();
var mosque8bc = L.featureGroup();
var mosque9ad = L.featureGroup();
var palace10ad = L.featureGroup();
var palace10bc = L.featureGroup();
var palace11ad = L.featureGroup();
var palace12ad = L.featureGroup();
var palace13ad = L.featureGroup();
var palace13bc = L.featureGroup();
var palace14ad = L.featureGroup();
var palace15ad = L.featureGroup();
var palace16ad = L.featureGroup();
var palace1ad = L.featureGroup();
var palace2ad = L.featureGroup();
var palace2bc = L.featureGroup();
var palace31bc = L.featureGroup();
var palace33bc = L.featureGroup();
var palace37bc = L.featureGroup();
var palace3ad = L.featureGroup();
var palace4ad = L.featureGroup();
var palace5ad = L.featureGroup();
var palace5bc = L.featureGroup();
var palace6ad = L.featureGroup();
var palace6bc = L.featureGroup();
var palace7ad = L.featureGroup();
var palace8ad = L.featureGroup();
var palace8bc = L.featureGroup();
var palace9ad = L.featureGroup();
var shrine10ad = L.featureGroup();
var shrine10bc = L.featureGroup();
var shrine11ad = L.featureGroup();
var shrine12ad = L.featureGroup();
var shrine13ad = L.featureGroup();
var shrine13bc = L.featureGroup();
var shrine14ad = L.featureGroup();
var shrine15ad = L.featureGroup();
var shrine16ad = L.featureGroup();
var shrine1ad = L.featureGroup();
var shrine2ad = L.featureGroup();
var shrine2bc = L.featureGroup();
var shrine31bc = L.featureGroup();
var shrine33bc = L.featureGroup();
var shrine37bc = L.featureGroup();
var shrine3ad = L.featureGroup();
var shrine4ad = L.featureGroup();
var shrine5ad = L.featureGroup();
var shrine5bc = L.featureGroup();
var shrine6ad = L.featureGroup();
var shrine6bc = L.featureGroup();
var shrine7ad = L.featureGroup();
var shrine8ad = L.featureGroup();
var shrine8bc = L.featureGroup();
var shrine9ad = L.featureGroup();
var temple10ad = L.featureGroup();
var temple10bc = L.featureGroup();
var temple11ad = L.featureGroup();
var temple12ad = L.featureGroup();
var temple13ad = L.featureGroup();
var temple13bc = L.featureGroup();
var temple14ad = L.featureGroup();
var temple15ad = L.featureGroup();
var temple16ad = L.featureGroup();
var temple1ad = L.featureGroup();
var temple2ad = L.featureGroup();
var temple2bc = L.featureGroup();
var temple31bc = L.featureGroup();
var temple33bc = L.featureGroup();
var temple37bc = L.featureGroup();
var temple3ad = L.featureGroup();
var temple4ad = L.featureGroup();
var temple5ad = L.featureGroup();
var temple5bc = L.featureGroup();
var temple6ad = L.featureGroup();
var temple6bc = L.featureGroup();
var temple7ad = L.featureGroup();
var temple8ad = L.featureGroup();
var temple8bc = L.featureGroup();
var temple9ad = L.featureGroup();
var theatre10ad = L.featureGroup();
var theatre10bc = L.featureGroup();
var theatre11ad = L.featureGroup();
var theatre12ad = L.featureGroup();
var theatre13ad = L.featureGroup();
var theatre13bc = L.featureGroup();
var theatre14ad = L.featureGroup();
var theatre15ad = L.featureGroup();
var theatre16ad = L.featureGroup();
var theatre1ad = L.featureGroup();
var theatre2ad = L.featureGroup();
var theatre2bc = L.featureGroup();
var theatre31bc = L.featureGroup();
var theatre33bc = L.featureGroup();
var theatre37bc = L.featureGroup();
var theatre3ad = L.featureGroup();
var theatre4ad = L.featureGroup();
var theatre5ad = L.featureGroup();
var theatre5bc = L.featureGroup();
var theatre6ad = L.featureGroup();
var theatre6bc = L.featureGroup();
var theatre7ad = L.featureGroup();
var theatre8ad = L.featureGroup();
var theatre8bc = L.featureGroup();
var theatre9ad = L.featureGroup();
var tomb10ad = L.featureGroup();
var tomb10bc = L.featureGroup();
var tomb11ad = L.featureGroup();
var tomb12ad = L.featureGroup();
var tomb13ad = L.featureGroup();
var tomb13bc = L.featureGroup();
var tomb14ad = L.featureGroup();
var tomb15ad = L.featureGroup();
var tomb16ad = L.featureGroup();
var tomb1ad = L.featureGroup();
var tomb2ad = L.featureGroup();
var tomb2bc = L.featureGroup();
var tomb31bc = L.featureGroup();
var tomb33bc = L.featureGroup();
var tomb37bc = L.featureGroup();
var tomb3ad = L.featureGroup();
var tomb4ad = L.featureGroup();
var tomb5ad = L.featureGroup();
var tomb5bc = L.featureGroup();
var tomb6ad = L.featureGroup();
var tomb6bc = L.featureGroup();
var tomb7ad = L.featureGroup();
var tomb8ad = L.featureGroup();
var tomb8bc = L.featureGroup();
var tomb9ad = L.featureGroup();
var village10ad = L.featureGroup();
var village10bc = L.featureGroup();
var village11ad = L.featureGroup();
var village12ad = L.featureGroup();
var village13ad = L.featureGroup();
var village13bc = L.featureGroup();
var village14ad = L.featureGroup();
var village15ad = L.featureGroup();
var village16ad = L.featureGroup();
var village1ad = L.featureGroup();
var village2ad = L.featureGroup();
var village2bc = L.featureGroup();
var village31bc = L.featureGroup();
var village33bc = L.featureGroup();
var village37bc = L.featureGroup();
var village3ad = L.featureGroup();
var village4ad = L.featureGroup();
var village5ad = L.featureGroup();
var village5bc = L.featureGroup();
var village6ad = L.featureGroup();
var village6bc = L.featureGroup();
var village7ad = L.featureGroup();
var village8ad = L.featureGroup();
var village8bc = L.featureGroup();
var village9ad = L.featureGroup();

function addPoints(data, tabletop) {
	for(var row =0, row < data.length; row++){
		var marker = L.marker([
			data[row].lat,
			data[row].lng
		], {icon: window[data[row].Iconimage]})
		.addTo(window[data[row].groupfor]);
		.bindTooltip("" + data[row].Labelfor + "", direction = "auto");
		.bindPopup("<a href='" + data[row].Link + "'><img style='max-height: 300px; max-width: 300px;' src='" + data[row].PopupHTML + "'</img></a>", {width: 300, height: 300});
	}
}	

function init(){
	var scatlasKey = 'https://docs.google.com/spreadsheets/d/1L4L6ezp4Z38cfundpYUv1wEEkM-kDFClldq7kuZbEVw/edit?usp=sharing';
	Tabletop.init( { 
		key: scatlasKey,
		callback: addPoints,
		simpleSheet: true 
	} );
}
window.addEventListener('DOMContentLoaded', init);	

var overLayers = [
		{
			group: "BC 37th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey37bc
				},
				{
					name: "Academies",
					layer: academy37bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre37bc
				},
				{
					name: "Bridges",
					layer: bridge37bc
				},
				{
					name: "Castles",
					layer: castle37bc
				},
				{
					name: "Churches",
					layer: church37bc
				},
				{
					name: "Forts",
					layer: fort37bc
				},
				{
					name: "Gates",
					layer: gate37bc
				},
				{
					name: "Monasteries",
					layer: monastery37bc
				},
				{
					name: "Mosques",
					layer: mosque37bc
				},
				{
					name: "Palaces",
					layer: palace37bc
				},
				{
					name: "Shrines",
					layer: shrine37bc
				},
				{
					name: "Temples",
					layer: temple37bc
				},
				{
					name: "Theatres",
					layer: theatre37bc
				},
				{
					name: "Tombs",
					layer: tomb37bc
				},
				{
					name: "Villages",
					layer: village37bc
				}
			]
		},
		{
			group: "BC 33rd CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey33bc
				},
				{
					name: "Academies",
					layer: academy33bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre33bc
				},
				{
					name: "Bridges",
					layer: bridge33bc
				},
				{
					name: "Castles",
					layer: castle33bc
				},
				{
					name: "Churches",
					layer: church33bc
				},
				{
					name: "Forts",
					layer: fort33bc
				},
				{
					name: "Gates",
					layer: gate33bc
				},
				{
					name: "Monasteries",
					layer: monastery33bc
				},
				{
					name: "Mosques",
					layer: mosque33bc
				},
				{
					name: "Palaces",
					layer: palace33bc
				},
				{
					name: "Shrines",
					layer: shrine33bc
				},
				{
					name: "Temples",
					layer: temple33bc
				},
				{
					name: "Theatres",
					layer: theatre33bc
				},
				{
					name: "Tombs",
					layer: tomb33bc
				},
				{
					name: "Villages",
					layer: village33bc
				}
			]
		},
		{
			group: "BC 31st CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey31bc
				},
				{
					name: "Academies",
					layer: academy31bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre31bc
				},
				{
					name: "Bridges",
					layer: bridge31bc
				},
				{
					name: "Castles",
					layer: castle31bc
				},
				{
					name: "Churches",
					layer: church31bc
				},
				{
					name: "Forts",
					layer: fort31bc
				},
				{
					name: "Gates",
					layer: gate31bc
				},
				{
					name: "Monasteries",
					layer: monastery31bc
				},
				{
					name: "Mosques",
					layer: mosque31bc
				},
				{
					name: "Palaces",
					layer: palace31bc
				},
				{
					name: "Shrines",
					layer: shrine31bc
				},
				{
					name: "Temples",
					layer: temple31bc
				},
				{
					name: "Theatres",
					layer: theatre31bc
				},
				{
					name: "Tombs",
					layer: tomb31bc
				},
				{
					name: "Villages",
					layer: village31bc
				}
			]
		},
		{
			group: "BC 13th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey13bc
				},
				{
					name: "Academies",
					layer: academy13bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre13bc
				},
				{
					name: "Bridges",
					layer: bridge13bc
				},
				{
					name: "Castles",
					layer: castle13bc
				},
				{
					name: "Churches",
					layer: church13bc
				},
				{
					name: "Forts",
					layer: fort13bc
				},
				{
					name: "Gates",
					layer: gate13bc
				},
				{
					name: "Monasteries",
					layer: monastery13bc
				},
				{
					name: "Mosques",
					layer: mosque13bc
				},
				{
					name: "Palaces",
					layer: palace13bc
				},
				{
					name: "Shrines",
					layer: shrine13bc
				},
				{
					name: "Temples",
					layer: temple13bc
				},
				{
					name: "Theatres",
					layer: theatre13bc
				},
				{
					name: "Tombs",
					layer: tomb13bc
				},
				{
					name: "Villages",
					layer: village13bc
				}
			]
		},
		{
			group: "BC 10th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey10bc
				},
				{
					name: "Academies",
					layer: academy10bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre10bc
				},
				{
					name: "Bridges",
					layer: bridge10bc
				},
				{
					name: "Castles",
					layer: castle10bc
				},
				{
					name: "Churches",
					layer: church10bc
				},
				{
					name: "Forts",
					layer: fort10bc
				},
				{
					name: "Gates",
					layer: gate10bc
				},
				{
					name: "Monasteries",
					layer: monastery10bc
				},
				{
					name: "Mosques",
					layer: mosque10bc
				},
				{
					name: "Palaces",
					layer: palace10bc
				},
				{
					name: "Shrines",
					layer: shrine10bc
				},
				{
					name: "Temples",
					layer: temple10bc
				},
				{
					name: "Theatres",
					layer: theatre10bc
				},
				{
					name: "Tombs",
					layer: tomb10bc
				},
				{
					name: "Villages",
					layer: village10bc
				}
			]
		},
		{
			group: "BC 8th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey8bc
				},
				{
					name: "Academies",
					layer: academy8bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre8bc
				},
				{
					name: "Bridges",
					layer: bridge8bc
				},
				{
					name: "Castles",
					layer: castle8bc
				},
				{
					name: "Churches",
					layer: church8bc
				},
				{
					name: "Forts",
					layer: fort8bc
				},
				{
					name: "Gates",
					layer: gate8bc
				},
				{
					name: "Monasteries",
					layer: monastery8bc
				},
				{
					name: "Mosques",
					layer: mosque8bc
				},
				{
					name: "Palaces",
					layer: palace8bc
				},
				{
					name: "Shrines",
					layer: shrine8bc
				},
				{
					name: "Temples",
					layer: temple8bc
				},
				{
					name: "Theatres",
					layer: theatre8bc
				},
				{
					name: "Tombs",
					layer: tomb8bc
				},
				{
					name: "Villages",
					layer: village8bc
				}
			]
		},
		{
			group: "BC 6th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey6bc
				},
				{
					name: "Academies",
					layer: academy6bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre6bc
				},
				{
					name: "Bridges",
					layer: bridge6bc
				},
				{
					name: "Castles",
					layer: castle6bc
				},
				{
					name: "Churches",
					layer: church6bc
				},
				{
					name: "Forts",
					layer: fort6bc
				},
				{
					name: "Gates",
					layer: gate6bc
				},
				{
					name: "Monasteries",
					layer: monastery6bc
				},
				{
					name: "Mosques",
					layer: mosque6bc
				},
				{
					name: "Palaces",
					layer: palace6bc
				},
				{
					name: "Shrines",
					layer: shrine6bc
				},
				{
					name: "Temples",
					layer: temple6bc
				},
				{
					name: "Theatres",
					layer: theatre6bc
				},
				{
					name: "Tombs",
					layer: tomb6bc
				},
				{
					name: "Villages",
					layer: village6bc
				}
			]
		},
		{
			group: "BC 5th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey5bc
				},
				{
					name: "Academies",
					layer: academy5bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre5bc
				},
				{
					name: "Bridges",
					layer: bridge5bc
				},
				{
					name: "Castles",
					layer: castle5bc
				},
				{
					name: "Churches",
					layer: church5bc
				},
				{
					name: "Forts",
					layer: fort5bc
				},
				{
					name: "Gates",
					layer: gate5bc
				},
				{
					name: "Monasteries",
					layer: monastery5bc
				},
				{
					name: "Mosques",
					layer: mosque5bc
				},
				{
					name: "Palaces",
					layer: palace5bc
				},
				{
					name: "Shrines",
					layer: shrine5bc
				},
				{
					name: "Temples",
					layer: temple5bc
				},
				{
					name: "Theatres",
					layer: theatre5bc
				},
				{
					name: "Tombs",
					layer: tomb5bc
				},
				{
					name: "Villages",
					layer: village5bc
				}
			]
		},
		{
			group: "BC 2nd CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey2bc
				},
				{
					name: "Academies",
					layer: academy2bc
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre2bc
				},
				{
					name: "Bridges",
					layer: bridge2bc
				},
				{
					name: "Castles",
					layer: castle2bc
				},
				{
					name: "Churches",
					layer: church2bc
				},
				{
					name: "Forts",
					layer: fort2bc
				},
				{
					name: "Gates",
					layer: gate2bc
				},
				{
					name: "Monasteries",
					layer: monastery2bc
				},
				{
					name: "Mosques",
					layer: mosque2bc
				},
				{
					name: "Palaces",
					layer: palace2bc
				},
				{
					name: "Shrines",
					layer: shrine2bc
				},
				{
					name: "Temples",
					layer: temple2bc
				},
				{
					name: "Theatres",
					layer: theatre2bc
				},
				{
					name: "Tombs",
					layer: tomb2bc
				},
				{
					name: "Villages",
					layer: village2bc
				}
			]
		},
		{
			group: "1st CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey1ad
				},
				{
					name: "Academies",
					layer: academy1ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre1ad
				},
				{
					name: "Bridges",
					layer: bridge1ad
				},
				{
					name: "Castles",
					layer: castle1ad
				},
				{
					name: "Churches",
					layer: church1ad
				},
				{
					name: "Forts",
					layer: fort1ad
				},
				{
					name: "Gates",
					layer: gate1ad
				},
				{
					name: "Monasteries",
					layer: monastery1ad
				},
				{
					name: "Mosques",
					layer: mosque1ad
				},
				{
					name: "Palaces",
					layer: palace1ad
				},
				{
					name: "Shrines",
					layer: shrine1ad
				},
				{
					name: "Temples",
					layer: temple1ad
				},
				{
					name: "Theatres",
					layer: theatre1ad
				},
				{
					name: "Tombs",
					layer: tomb1ad
				},
				{
					name: "Villages",
					layer: village1ad
				}
			]
		},
		{
			group: "2nd CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey2ad
				},
				{
					name: "Academies",
					layer: academy2ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre2ad
				},
				{
					name: "Bridges",
					layer: bridge2ad
				},
				{
					name: "Castles",
					layer: castle2ad
				},
				{
					name: "Churches",
					layer: church2ad
				},
				{
					name: "Forts",
					layer: fort2ad
				},
				{
					name: "Gates",
					layer: gate2ad
				},
				{
					name: "Monasteries",
					layer: monastery2ad
				},
				{
					name: "Mosques",
					layer: mosque2ad
				},
				{
					name: "Palaces",
					layer: palace2ad
				},
				{
					name: "Shrines",
					layer: shrine2ad
				},
				{
					name: "Temples",
					layer: temple2ad
				},
				{
					name: "Theatres",
					layer: theatre2ad
				},
				{
					name: "Tombs",
					layer: tomb2ad
				},
				{
					name: "Villages",
					layer: village2ad
				}
			]
		},
		{
			group: "3rd CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey3ad
				},
				{
					name: "Academies",
					layer: academy3ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre3ad
				},
				{
					name: "Bridges",
					layer: bridge3ad
				},
				{
					name: "Castles",
					layer: castle3ad
				},
				{
					name: "Churches",
					layer: church3ad
				},
				{
					name: "Forts",
					layer: fort3ad
				},
				{
					name: "Gates",
					layer: gate3ad
				},
				{
					name: "Monasteries",
					layer: monastery3ad
				},
				{
					name: "Mosques",
					layer: mosque3ad
				},
				{
					name: "Palaces",
					layer: palace3ad
				},
				{
					name: "Shrines",
					layer: shrine3ad
				},
				{
					name: "Temples",
					layer: temple3ad
				},
				{
					name: "Theatres",
					layer: theatre3ad
				},
				{
					name: "Tombs",
					layer: tomb3ad
				},
				{
					name: "Villages",
					layer: village3ad
				}
			]
		},
		{
			group: "4th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey4ad
				},
				{
					name: "Academies",
					layer: academy4ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre4ad
				},
				{
					name: "Bridges",
					layer: bridge4ad
				},
				{
					name: "Castles",
					layer: castle4ad
				},
				{
					name: "Churches",
					layer: church4ad
				},
				{
					name: "Forts",
					layer: fort4ad
				},
				{
					name: "Gates",
					layer: gate4ad
				},
				{
					name: "Monasteries",
					layer: monastery4ad
				},
				{
					name: "Mosques",
					layer: mosque4ad
				},
				{
					name: "Palaces",
					layer: palace4ad
				},
				{
					name: "Shrines",
					layer: shrine4ad
				},
				{
					name: "Temples",
					layer: temple4ad
				},
				{
					name: "Theatres",
					layer: theatre4ad
				},
				{
					name: "Tombs",
					layer: tomb4ad
				},
				{
					name: "Villages",
					layer: village4ad
				}
			]
		},
		{
			group: "5th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey5ad
				},
				{
					name: "Academies",
					layer: academy5ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre5ad
				},
				{
					name: "Bridges",
					layer: bridge5ad
				},
				{
					name: "Castles",
					layer: castle5ad
				},
				{
					name: "Churches",
					layer: church5ad
				},
				{
					name: "Forts",
					layer: fort5ad
				},
				{
					name: "Gates",
					layer: gate5ad
				},
				{
					name: "Monasteries",
					layer: monastery5ad
				},
				{
					name: "Mosques",
					layer: mosque5ad
				},
				{
					name: "Palaces",
					layer: palace5ad
				},
				{
					name: "Shrines",
					layer: shrine5ad
				},
				{
					name: "Temples",
					layer: temple5ad
				},
				{
					name: "Theatres",
					layer: theatre5ad
				},
				{
					name: "Tombs",
					layer: tomb5ad
				},
				{
					name: "Villages",
					layer: village5ad
				}
			]
		},
		{
			group: "6th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey6ad
				},
				{
					name: "Academies",
					layer: academy6ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre6ad
				},
				{
					name: "Bridges",
					layer: bridge6ad
				},
				{
					name: "Castles",
					layer: castle6ad
				},
				{
					name: "Churches",
					layer: church6ad
				},
				{
					name: "Forts",
					layer: fort6ad
				},
				{
					name: "Gates",
					layer: gate6ad
				},
				{
					name: "Monasteries",
					layer: monastery6ad
				},
				{
					name: "Mosques",
					layer: mosque6ad
				},
				{
					name: "Palaces",
					layer: palace6ad
				},
				{
					name: "Shrines",
					layer: shrine6ad
				},
				{
					name: "Temples",
					layer: temple6ad
				},
				{
					name: "Theatres",
					layer: theatre6ad
				},
				{
					name: "Tombs",
					layer: tomb6ad
				},
				{
					name: "Villages",
					layer: village6ad
				}
			]
		},
		{
			group: "7th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey7ad
				},
				{
					name: "Academies",
					layer: academy7ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre7ad
				},
				{
					name: "Bridges",
					layer: bridge7ad
				},
				{
					name: "Castles",
					layer: castle7ad
				},
				{
					name: "Churches",
					layer: church7ad
				},
				{
					name: "Forts",
					layer: fort7ad
				},
				{
					name: "Gates",
					layer: gate7ad
				},
				{
					name: "Monasteries",
					layer: monastery7ad
				},
				{
					name: "Mosques",
					layer: mosque7ad
				},
				{
					name: "Palaces",
					layer: palace7ad
				},
				{
					name: "Shrines",
					layer: shrine7ad
				},
				{
					name: "Temples",
					layer: temple7ad
				},
				{
					name: "Theatres",
					layer: theatre7ad
				},
				{
					name: "Tombs",
					layer: tomb7ad
				},
				{
					name: "Villages",
					layer: village7ad
				}
			]
		},
		{
			group: "8th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey8ad
				},
				{
					name: "Academies",
					layer: academy8ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre8ad
				},
				{
					name: "Bridges",
					layer: bridge8ad
				},
				{
					name: "Castles",
					layer: castle8ad
				},
				{
					name: "Churches",
					layer: church8ad
				},
				{
					name: "Forts",
					layer: fort8ad
				},
				{
					name: "Gates",
					layer: gate8ad
				},
				{
					name: "Monasteries",
					layer: monastery8ad
				},
				{
					name: "Mosques",
					layer: mosque8ad
				},
				{
					name: "Palaces",
					layer: palace8ad
				},
				{
					name: "Shrines",
					layer: shrine8ad
				},
				{
					name: "Temples",
					layer: temple8ad
				},
				{
					name: "Theatres",
					layer: theatre8ad
				},
				{
					name: "Tombs",
					layer: tomb8ad
				},
				{
					name: "Villages",
					layer: village8ad
				}
			]
		},
				{
			group: "9th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey9ad
				},
				{
					name: "Academies",
					layer: academy9ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre9ad
				},
				{
					name: "Bridges",
					layer: bridge9ad
				},
				{
					name: "Castles",
					layer: castle9ad
				},
				{
					name: "Churches",
					layer: church9ad
				},
				{
					name: "Forts",
					layer: fort9ad
				},
				{
					name: "Gates",
					layer: gate9ad
				},
				{
					name: "Monasteries",
					layer: monastery9ad
				},
				{
					name: "Mosques",
					layer: mosque9ad
				},
				{
					name: "Palaces",
					layer: palace9ad
				},
				{
					name: "Shrines",
					layer: shrine9ad
				},
				{
					name: "Temples",
					layer: temple9ad
				},
				{
					name: "Theatres",
					layer: theatre9ad
				},
				{
					name: "Tombs",
					layer: tomb9ad
				},
				{
					name: "Villages",
					layer: village9ad
				}
			]
		},
				{
			group: "10th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey10ad
				},
				{
					name: "Academies",
					layer: academy10ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre10ad
				},
				{
					name: "Bridges",
					layer: bridge10ad
				},
				{
					name: "Castles",
					layer: castle10ad
				},
				{
					name: "Churches",
					layer: church10ad
				},
				{
					name: "Forts",
					layer: fort10ad
				},
				{
					name: "Gates",
					layer: gate10ad
				},
				{
					name: "Monasteries",
					layer: monastery10ad
				},
				{
					name: "Mosques",
					layer: mosque10ad
				},
				{
					name: "Palaces",
					layer: palace10ad
				},
				{
					name: "Shrines",
					layer: shrine10ad
				},
				{
					name: "Temples",
					layer: temple10ad
				},
				{
					name: "Theatres",
					layer: theatre10ad
				},
				{
					name: "Tombs",
					layer: tomb10ad
				},
				{
					name: "Villages",
					layer: village10ad
				}
			]
		},
				{
			group: "11th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey11ad
				},
				{
					name: "Academies",
					layer: academy11ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre11ad
				},
				{
					name: "Bridges",
					layer: bridge11ad
				},
				{
					name: "Castles",
					layer: castle11ad
				},
				{
					name: "Churches",
					layer: church11ad
				},
				{
					name: "Forts",
					layer: fort11ad
				},
				{
					name: "Gates",
					layer: gate11ad
				},
				{
					name: "Monasteries",
					layer: monastery11ad
				},
				{
					name: "Mosques",
					layer: mosque11ad
				},
				{
					name: "Palaces",
					layer: palace11ad
				},
				{
					name: "Shrines",
					layer: shrine11ad
				},
				{
					name: "Temples",
					layer: temple11ad
				},
				{
					name: "Theatres",
					layer: theatre11ad
				},
				{
					name: "Tombs",
					layer: tomb11ad
				},
				{
					name: "Villages",
					layer: village11ad
				}
			]
		},
				{
			group: "12th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey12ad
				},
				{
					name: "Academies",
					layer: academy12ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre12ad
				},
				{
					name: "Bridges",
					layer: bridge12ad
				},
				{
					name: "Castles",
					layer: castle12ad
				},
				{
					name: "Churches",
					layer: church12ad
				},
				{
					name: "Forts",
					layer: fort12ad
				},
				{
					name: "Gates",
					layer: gate12ad
				},
				{
					name: "Monasteries",
					layer: monastery12ad
				},
				{
					name: "Mosques",
					layer: mosque12ad
				},
				{
					name: "Palaces",
					layer: palace12ad
				},
				{
					name: "Shrines",
					layer: shrine12ad
				},
				{
					name: "Temples",
					layer: temple12ad
				},
				{
					name: "Theatres",
					layer: theatre12ad
				},
				{
					name: "Tombs",
					layer: tomb12ad
				},
				{
					name: "Villages",
					layer: village12ad
				}
			]
		},
				{
			group: "13th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey13ad
				},
				{
					name: "Academies",
					layer: academy13ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre13ad
				},
				{
					name: "Bridges",
					layer: bridge13ad
				},
				{
					name: "Castles",
					layer: castle13ad
				},
				{
					name: "Churches",
					layer: church13ad
				},
				{
					name: "Forts",
					layer: fort13ad
				},
				{
					name: "Gates",
					layer: gate13ad
				},
				{
					name: "Monasteries",
					layer: monastery13ad
				},
				{
					name: "Mosques",
					layer: mosque13ad
				},
				{
					name: "Palaces",
					layer: palace13ad
				},
				{
					name: "Shrines",
					layer: shrine13ad
				},
				{
					name: "Temples",
					layer: temple13ad
				},
				{
					name: "Theatres",
					layer: theatre13ad
				},
				{
					name: "Tombs",
					layer: tomb13ad
				},
				{
					name: "Villages",
					layer: village13ad
				}
			]
		},
				{
			group: "14th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey14ad
				},
				{
					name: "Academies",
					layer: academy14ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre14ad
				},
				{
					name: "Bridges",
					layer: bridge14ad
				},
				{
					name: "Castles",
					layer: castle14ad
				},
				{
					name: "Churches",
					layer: church14ad
				},
				{
					name: "Forts",
					layer: fort14ad
				},
				{
					name: "Gates",
					layer: gate14ad
				},
				{
					name: "Monasteries",
					layer: monastery14ad
				},
				{
					name: "Mosques",
					layer: mosque14ad
				},
				{
					name: "Palaces",
					layer: palace14ad
				},
				{
					name: "Shrines",
					layer: shrine14ad
				},
				{
					name: "Temples",
					layer: temple14ad
				},
				{
					name: "Theatres",
					layer: theatre14ad
				},
				{
					name: "Tombs",
					layer: tomb14ad
				},
				{
					name: "Villages",
					layer: village14ad
				}
			]
		},
				{
			group: "15th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey15ad
				},
				{
					name: "Academies",
					layer: academy15ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre15ad
				},
				{
					name: "Bridges",
					layer: bridge15ad
				},
				{
					name: "Castles",
					layer: castle15ad
				},
				{
					name: "Churches",
					layer: church15ad
				},
				{
					name: "Forts",
					layer: fort15ad
				},
				{
					name: "Gates",
					layer: gate15ad
				},
				{
					name: "Monasteries",
					layer: monastery15ad
				},
				{
					name: "Mosques",
					layer: mosque15ad
				},
				{
					name: "Palaces",
					layer: palace15ad
				},
				{
					name: "Shrines",
					layer: shrine15ad
				},
				{
					name: "Temples",
					layer: temple15ad
				},
				{
					name: "Theatres",
					layer: theatre15ad
				},
				{
					name: "Tombs",
					layer: tomb15ad
				},
				{
					name: "Villages",
					layer: village15ad
				}
			]
		},
				{
			group: "16th CE",
			collapsed: true,
			layers: [
				{
					name: "Abbeys",
					layer: abbey16ad
				},
				{
					name: "Academies",
					layer: academy16ad
				},
				{
					name: "Amphitheatres",
					layer: amphitheatre16ad
				},
				{
					name: "Bridges",
					layer: bridge16ad
				},
				{
					name: "Castles",
					layer: castle16ad
				},
				{
					name: "Churches",
					layer: church16ad
				},
				{
					name: "Forts",
					layer: fort16ad
				},
				{
					name: "Gates",
					layer: gate16ad
				},
				{
					name: "Monasteries",
					layer: monastery16ad
				},
				{
					name: "Mosques",
					layer: mosque16ad
				},
				{
					name: "Palaces",
					layer: palace16ad
				},
				{
					name: "Shrines",
					layer: shrine16ad
				},
				{
					name: "Temples",
					layer: temple16ad
				},
				{
					name: "Theatres",
					layer: theatre16ad
				},
				{
					name: "Tombs",
					layer: tomb16ad
				},
				{
					name: "Villages",
					layer: village16ad
				}
			]
		}
	];
	
var panelLayers = new L.Control.layers(null, overLayers, {
	collapsed: false,
	collapsibleGroups: true
});

map.addControl(panelLayers);


