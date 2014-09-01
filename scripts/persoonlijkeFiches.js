function renderWaarHebJeVanDeCursusGehoord(data) {
    data.forEach(function(object) {
        var wie = object['Je naam'] || "";
        var waar = object['Waar heb je van de cursus gehoord?'] || "";
        var opbouwGoed = object['Wat vond je goed aan de opbouw van het weekend?'] || "";
        var opbouwSlecht = object['Wat vond je slecht aan de opbouw van het weekend?'] || "";
        var vastPloegje = object['Wat vond je ervan dat je verschillende werkwinkels volgde met een vast ploegje?'] || "";
        var verwachtingenBeantwoord = object['Beantwoordde het weekend aan je verwachtingen? Waarom?'] || "";
        var aanraden = object['Zou je deze vorming aanraden aan andere (Scouts en Gidsen) leiding?'] || "";
        var verderNog = object['Wil je verder nog iets kwijt?'] || "";

        if(wie || waar || opbouwGoed || opbouwSlecht || vastPloegje || verwachtingenBeantwoord || aanraden || verderNog) {
            $("#waarGehoord tbody").append("<tr><td>" + wie + "</td><td>" + waar + "&nbsp;</td></tr>");
            $("#opbouwWeekendTable tbody").append("<tr><td>" + wie + "</td><td>" + opbouwGoed + "</td><td>" + opbouwSlecht + "&nbsp;</td></tr>");
            $("#vastPloegjeTable tbody").append("<tr><td>" + wie + "</td><td>" + vastPloegje + "&nbsp;</td></tr>");
            $("#verwachtingenBeantwoordTable tbody").append("<tr><td>" + wie + "</td><td>" + verwachtingenBeantwoord + "&nbsp;</td></tr>");
            $("#aanradenTable tbody").append("<tr><td>" + wie + "</td><td>" + aanraden + "&nbsp;</td></tr>");
            $("#verderNogTable tbody").append("<tr><td>" + wie + "</td><td>" + verderNog + "&nbsp;</td></tr>");
        }

    });
}