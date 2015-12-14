// LOAD Home SVG
$(document).ready( function() {
    $('.content').load( "../svg/uebersicht.svg" );
});


// NAV
function switchSVG( el, path ){
    el.click( function() {
        $('nav .active').removeClass('active');
        $(this).addClass('active');
        $('.content').load( path, function() {
            assignLabels();
        });
    });
}

switchSVG( $('#Home'),"../svg/uebersicht.svg");
switchSVG( $('#sp'),  "../svg/forschungsschwerpunkt.svg");
switchSVG( $('#ft'),  "../svg/forschungsthema.svg");
switchSVG( $('#ma'),  "../svg/mitarbeiter.svg");
switchSVG( $('#st'),  "../svg/student.svg");


// TEXT CHANGE
function textChange( el, prompt ) {
    el.click( function() {
        var newContent = window.prompt( prompt );
        if ( !newContent ) {
            return;
        }
        $(this).text( newContent );
    });
}


function assignLabels(){
    textChange( $('svg #vorname'),  "Bitte Vorname eingeben...");
    textChange( $('svg #name'),     "Bitte Name eingeben...");
    textChange( $('svg #nachname'), "Bitte Nachname eingeben...");
    textChange( $('svg #zimmer'),   "Bitte Zimmernummer eingeben...");
    textChange( $('svg #funktion'), "Bitte Funktion eingeben...( Semesterarbeit / MA Thesis )");
    textChange( $('svg #tel'),      "Bitte Telefonnummer eingeben...");
    textChange( $('svg #zeile-1'),  "Bitte erste Zeile eingeben...");
    textChange( $('svg #zeile-2'),  "Bitte zweite Zeile eingeben...");
    textChange( $('svg #zeile-3'),  "Bitte dritte Zeile eingeben...");
    textChange( $('svg #zeile-4'),  "Bitte vierte Zeile eingeben...");
}


// DROP IMAGE
function imageChange(){
    FileReaderJS.setupDrop(document.body, {
        readAsDefault: "DataURL",
        on: {
            load: function(e, file) {
                var img = new Image();
                $('svg image').attr('xlink:href', e.target.result);
                img.src = e.target.result;
            }
        }
    });
}

imageChange();


// COLORZ
$('.colors span').click( function() {
    var fillColor = $(this).css('background-color');
    $('svg #farbfläche').css({fill: fillColor});
});


/*
// EXPORT PNG > PDF
$('.saveAsPdf').click( function () {
    svgAsPngUri( $("svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 30, 50, 150, 150);
        doc.save('test.pdf');
    });
});
*/

// EXPORT PNG > PDF
// $('.saveAsPdf').click( function () {
//
//     var doc = new jsPDF();
//     svgElementToPdf($("svg")[0],doc,{ x_offset: 25, y_offset: 50 });
//
//     doc.save('test.pdf');
//
//
//
//
//     svgElementToPdf(0,0,0);
// });
$('.saveAsPdf').click( function () {
    svgAsPngUri( $("svg")[0], {scale: 4.166}, function(uri) {
        var img = uri;
        var doc = new jsPDF();
        doc.addImage(img, 'PNG', 30, 50, 150, 150);
        doc.save('test.pdf');
    });
});
