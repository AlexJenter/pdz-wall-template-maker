// NAV
function switchSVG( el, path ){
    el.click( function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.content').load( path, function() {
            assignLabels();
        });
    });

}

switchSVG( $('#Home'),"../svg/uebersicht.svg");
switchSVG( $('#sp'),  "../svg/schwerpunkt.svg");
switchSVG( $('#ft'),  "../svg/thema.svg");
switchSVG( $('#ma'),  "../svg/person.svg");
switchSVG( $('#st'),  "../svg/student.svg");


// TEXT CHANGE
function textChange( el, prompt ) {
    el.click( function() {
        var oldContent =  $(this).text();
        var newContent = window.prompt( prompt );
        if ( newContent ==="" ) { newContent = oldContent; }
        $(this).text( newContent );
        if ( $(this).text() ==="" )  { $(this).text(oldContent) }
    });
}

function assignLabels(){
    textChange( $('#vorname'), "Bitte Vorname eingeben...");
    textChange( $('#name'),    "Bitte Name eingeben...");
    textChange( $('#nachname'),"Bitte Nachname eingeben...");
    textChange( $('#zimmer'),  "Bitte Zimmernummer eingeben...");
    textChange( $('#tel'),     "Bitte Telefonnummer eingeben...");
    textChange( $('#zeile-1'),     "Bitte erste Zeile eingeben...");
    textChange( $('#zeile-2'),     "Bitte zweite Zeile eingeben...");
}

// DROP IMAGE
function imageChange(){
    FileReaderJS.setupDrop(document.body, {
        readAsDefault: "DataURL",
        on: {
            load: function(e, file) {
                var img = new Image();
                $('image').attr('xlink:href', e.target.result);
                img.src = e.target.result;
            }
        }
    });
}
imageChange();


// COLORZ
$('span').click( function() {
    var c = $(this).css('background-color');
    hexc(c);

    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        hexcol = '#' + parts.join('');
    }
    $('rect').css({fill: hexcol});
});

// EXPORT PNG > PDF
$('.fa-cloud-download').click( function () {
    svgAsPngUri( $("svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 30, 50, 150, 150);
        doc.save('test.pdf');
    });
});

// EXPORT SVG
// $('.fa-download').click( function() {
//     var exportSVG =  $('svg').outerHTML();
//     var blob = new Blob([ exportSVG ], {type: "image/svg+xml"});
//     saveAs(blob, "export.svg");
//     // demoSvgDocument();
//     // console.log( blob );
// });
