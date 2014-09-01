function drawAttestenGraph(data) {
    var results = {geen: 0, animator: 0, hoofdanimator: 0, instructeur: 0};
    data.forEach(function(object) {
        if (object['Geen'] == 'X') {
            results.geen++;
        } else {
            if (object['Animator_in_het_jeugdwerk'] == 'X') {
                results.animator++;
            }
            if (object['Hoofdanimator_jeugdwerk'] == 'X') {
                results.hoofdanimator++;
            }
            if (object['Instructeur_Jeugdwerk'] == 'X') {
                results.instructeur++;
            }
        }
    });

    var values = [{name: 'Nee', y: results.geen}, {name: 'Animator', y: results.animator}, {name: 'Hoofdanimator', y: results.hoofdanimator}, {name: 'Instructeur', y: results.instructeur}];

    $('#attestenGraph').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Heb je al een attest?'
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
            name: 'Heb je al een attest?',
            data: values
        }],
        credits: {
            enabled: false
        }
    });
}
