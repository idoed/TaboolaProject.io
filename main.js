var icemovie= $('.icemovie');

icemovie.on('mouseenter',function() {
icemovie.get(0).play();
});

icemovie.on('mouseout',function() {
icemovie.get(0).pause();
});
