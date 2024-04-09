var config = {
    style: 'mapbox://styles/jobeepan/cluqp09y100sb01ntbf4fcstc',
    accessToken: 'pk.eyJ1Ijoiam9iZWVwYW4iLCJhIjoiY2tuem9qMGltMDZtYzJvbnNyNTc3cjRvbCJ9.s9iMy72LmnzYVB1ci4QWGg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Solar Photovoltaic Electricty Tracker in Singapore',
    subtitle: 'Pan Xiongjie A0283709U     Li Mengzhao A02803760Y',
    byline: 'Continue scrolling for data driven narratives',
    footer: 'Source: <a href="https://beta.data.gov.sg/" target="_blank">https://beta.data.gov.sg/</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [103.38950, 1.45380],
                zoom: 9.29,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'singapore-industrial-building',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'energy-demand',
                    opacity: 0,
                    duration: 0                
                },
                {
                    layer: 'singapore-regional-map-solar',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'solar-panel-between-non-resid',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'solar-panel-only-residents',
                    opacity: 0,
                    duration: 0                
                }
            ],  
            onChapterExit: [
            ],
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Electricty consumption by househoulds',
            image: 'images/legend1_monthly electricity consumption.png',
            description: 'Compared to the western region, which consumes a relatively low amount of household electricity, all other regions consume a higher amount of household electricity, particularly in the central region.                   At the meanwhile, household electricity consumption is increasing every year.',
            location: {
                center: [103.66759, 1.34714],
                zoom: 10.63,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 200
                },
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Electricty consumption by industrial-related',
            image: 'images/legend3_industrial buildings distribution.png',
            description: 'Industrial electricity consumption is the highest in each sub-sector and is also climbing each year, reaching 22,693.9 GWh in 2022, eight times the amount of electricity consumed by households in the same year.',
            location: {
                center: [103.66759, 1.34714],
                zoom: 10.63,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-industrial-building',
                    opacity: 1,
                    duration: 2000                              
                },
                {
                    layer: 'singapore-energy-consumption',
                    opacity: 0,
                    duration: 100
                }
            ],
            onChapterExit: [
                {
                    layer: 'singapore-industrial-building',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Solar PV installation capacity between residential and non-Residential',
            image: 'images/legend2_solar pv panel capacity.png',
            description: 'The highest solar panel installation capacity in Singapore now lies in the western region, while the central region is the weakest. On the other hand, the energy produced by non-domestic solar panels is much higher than that produced by domestic solar panels. Solar panels on industrial sites can be more efficient.',
            location: {
                center: [103.75752, 1.33373],
                zoom: 10.50,
                pitch: 56.57,
                bearing: -32.52,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'singapore-regional-map-solar',
                    opacity: 1,
                    duration: 0                              
                },
                {
                    layer: 'solar-panel-only-residents',
                    opacity: 1,
                    duration: 2000                              
                },
                {
                    layer: 'solar-panel-between-non-resid',
                    opacity: 1,
                    duration: 6000
                }
            ],
            onChapterExit: [
                {
                    layer: 'singapore-regional-map-solar',
                    opacity: 0,
                    duration: 200                              
                },
                {
                    layer: 'solar-panel-only-residents',
                    opacity: 0,
                    duration: 200                              
                },
                {
                    layer: 'solar-panel-between-non-resid',
                    opacity: 0,
                    duration: 200  
                }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'Energy demand in SKED',
            image: 'images/legend4_Electricity final use+ANALYSIS.png',
            description: 'Office-type of building needs to consume power in the cooling system and for office appliances. Open of semi-open steel industrial building-types consume relatively little electricity energy, and most of the electricity is used for industrial production, like appliances, hot water as well as lights. SKED has a high potential to realize the goal of solar panel production capacity.',
            location: {
                center: [103.75061, 1.42273],
                zoom: 15.47,
                pitch: 49.14,
                bearing: -56.11,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'energy-demand',
                    opacity: 1,
                    duration: 200
                }
            ],
            onChapterExit: [
                {
                    layer: 'energy-demand',
                    opacity: 0,
                    duration: 0
                }
            ],
        },
    ]
};