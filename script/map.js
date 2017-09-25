function mapa(){
	var mymap = L.map('mapid').setView([-22.8583300, -47.2200000], 12);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	L.marker([-22.863933, -47.214359]).addTo(mymap)
		.bindPopup("<b>Shopping</b><br />Shopping Hortolândia.").openPopup();
		
	L.marker([-22.871681, -47.195739]).addTo(mymap)
		.bindPopup("<b>Parque</b><br />Parque Ambiental Remanso das Águas").openPopup();

	L.marker([-22.889987, -47.199387]).addTo(mymap)
		.bindPopup("<b>Parque</b><br />Parque da Lagoa Santa Clara").openPopup();

	L.marker([-22.865459, -47.221321]).addTo(mymap)
		.bindPopup("<b>Parque</b><br />Parque Chico Mendes").openPopup();

	L.marker([-22.860102, -47.219333]).addTo(mymap)
		.bindPopup("<b>Museu</b><br />Centro de Memória").openPopup();

	L.marker([-22.894246, -47.174218]).addTo(mymap)
		.bindPopup("<b>Praça</b><br />Praça Poderosa").openPopup();

	L.marker([-22.896311, -47.169424]).addTo(mymap)
		.bindPopup("<b>Parque</b><br />Parque Socioambiental Irmã Dorothy Stang").openPopup();

		

		
		
	
}
