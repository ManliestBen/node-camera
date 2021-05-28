var fs = require('fs');
var gphoto2 = require('gphoto2');
var GPhoto = new gphoto2.GPhoto2();

GPhoto.list(function(list) {
    if (list.length === 0) return;
    var camera = list[0]
    console.log('Found', camera.model)
    camera.getConfig(function (er, settings) {
        console.log('Settings', settings)
    })
})