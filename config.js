(function() {

    BR.conf = {};

    BR.conf.profiles = [
        'trekking',
        'fastbike',
        'car-test',
        'safety',
        'shortest',
        'trekking-ignore-cr',
        'trekking-steep',
        'trekking-noferries',
        'trekking-nosteps',
        'moped',
        'rail',
        'river',
        'vm-forum-liegerad-schnell',
        'vm-forum-velomobil-schnell',
        'fastbike-lowtraffic',
        'fastbike-asia-pacific',
        'hiking-beta'
    ];

    BR.conf.host = 'http://localhost:17777';

    BR.conf.profilesUrl = 'http://localhost:80/profiles/';

    // COPYING: Please get your own Bing maps key at http://www.microsoft.com/maps/default.aspx
    //BR.conf.bingKeyUrl = 'bingkey.txt';
    // External URL for key retrieval, does not work locally on desktop
    BR.conf.bingKeyUrl = 'http://norbertrenner.de/key/bing.php';

    // Add custom tile layers
    // URL template see http://leafletjs.com/reference.html#tilelayer
    // Multiple entries separated by comma (,)
    BR.conf.baseLayers = {
        // 'display name': 'url'[,]
        // e.g. for offline tiles with https://github.com/develar/mapsforge-tile-server
        //'Mapsforge Tile Server': 'http://localhost:6090/{z}/{x}/{y}.png'
    };

    // Minimum transparency slider value on load, values between 0 and 1 (0=invisible).
    // 0 = no minimum, use stored setting; 1 = always reset to full visibility on load
    BR.conf.minOpacity = 0.3;
})();
