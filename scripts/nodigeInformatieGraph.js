function drawNodigeInformatieGraph(data) {
    var results = {ja: 0, nee: 0, total: 0};
    data.forEach(function(object) {
        var nodigeInformatie = object['Kreeg je tijdig de nodige informatie?'];
        if(nodigeInformatie) {
            if (nodigeInformatie.toLowerCase() == 'ja') {
                results.ja++;
            } else {
                results.nee++;
            }
            results.total++;
        }
    });

    var values = [{name: 'Ja', y: results.ja}, {name: 'Nee', y: results.nee}];

    $('#nodigeInformatieGraph').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Kreeg je tijdig de nodige informatie?'
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: false
            }
        },
        series: [{
            type: 'pie',
            data: values
        }],
        credits: {
            enabled: false
        }
    });
}