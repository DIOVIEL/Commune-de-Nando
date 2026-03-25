var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CommunedeNando_1 = new ol.format.GeoJSON();
var features_CommunedeNando_1 = format_CommunedeNando_1.readFeatures(json_CommunedeNando_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedeNando_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeNando_1.addFeatures(features_CommunedeNando_1);
var lyr_CommunedeNando_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeNando_1, 
                style: style_CommunedeNando_1,
                popuplayertitle: 'Commune de Nando',
                interactive: true,
    title: 'Commune de Nando<br />\
    <img src="styles/legend/CommunedeNando_1_0.png" /> 23 - 92<br />\
    <img src="styles/legend/CommunedeNando_1_1.png" /> 92 - 162<br />\
    <img src="styles/legend/CommunedeNando_1_2.png" /> 162 - 231<br />\
    <img src="styles/legend/CommunedeNando_1_3.png" /> 231 - 301<br />\
    <img src="styles/legend/CommunedeNando_1_4.png" /> 301 - 370<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_CommunedeNando_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CommunedeNando_1];
lyr_CommunedeNando_1.set('fieldAliases', {'Nom': 'Nom', 'COMMUNE_NA': 'COMMUNE_NA', 'Sup km²': 'Sup km²', 'Densité': 'Densité', });
lyr_CommunedeNando_1.set('fieldImages', {'Nom': 'TextEdit', 'COMMUNE_NA': 'TextEdit', 'Sup km²': 'TextEdit', 'Densité': 'TextEdit', });
lyr_CommunedeNando_1.set('fieldLabels', {'Nom': 'inline label - always visible', 'COMMUNE_NA': 'inline label - always visible', 'Sup km²': 'inline label - always visible', 'Densité': 'inline label - always visible', });
lyr_CommunedeNando_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});