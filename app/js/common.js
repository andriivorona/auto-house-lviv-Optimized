// mobile nav
(function ($) {

	$(function () {
		$('.menu__icon').on('click', function () {


			$(this).closest('.menu').toggleClass('menu_state_open');

		});

	});

})(jQuery)

$(function () {

	// Custom JS

});


var markersData = [
	{
		lat: 49.828254,
		lng: 23.994680,
		name: "Lviv",
		address: "м. Львів, вул.Антоновича"
	},
	// {
	// 	lat: 48.469014,
	// 	lng: 35.045403,
	// 	name: "Dnepr",
	// 	address: "м. Дніпро, вул. Князя В. Великого, 9"
	// },
	// {
	// 	lat: 48.620800,
	// 	lng: 22.287883,
	// 	name: "Uzhgorod",
	// 	address: " м. Ужгород, пл. Ш.Петефі, 28"
	// },

];


var map, infoWindow;
var centerLatLng = new google.maps.LatLng(49.265608, 23.843134);
var mapOptions = {
	center: centerLatLng,
	zoom: 6
};
map = new google.maps.Map(document.getElementById("map"), mapOptions);
infoWindow = new google.maps.InfoWindow();

google.maps.event.addListener(map, "click", function () {

	infoWindow.close();
});

for (var i = 0; i < markersData.length; i++) {
	var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
	var name = markersData[i].name;
	var address = markersData[i].address;

	addMarker(latLng, name, address);
}



function addMarker(latLng, name, address) {
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		title: name
	});

	google.maps.event.addListener(marker, "click", function () {

		var contentString = '<div class="infowindow">' +
			'<h3>' + name + '</h3>' +
			'<p>' + address + '</p>' +
			'</div>';

		infoWindow.setContent(contentString);

		infoWindow.open(map, marker);
	});
}

