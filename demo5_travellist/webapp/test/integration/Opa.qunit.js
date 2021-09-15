sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/fe/demo/demo5travellist/test/integration/pages/MainListReport' ,
        'my/fe/demo/demo5travellist/test/integration/pages/MainObjectPage',
        'my/fe/demo/demo5travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/fe/demo/demo5travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);