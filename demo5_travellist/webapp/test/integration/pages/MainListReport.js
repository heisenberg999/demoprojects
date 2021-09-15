sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'my.fe.demo.demo5travellist',
            componentId: 'TravelList',
            entitySet: 'Travel'
        },
        AdditionalCustomListReportDefinition
    );
});