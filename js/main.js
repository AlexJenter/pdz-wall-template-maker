// LOAD Home SVG
$(document).ready( function() {
    $('.content').load( "../svg/uebersicht.svg" );
});


// Make the whole list item with .help clickable
$(".help").click(function() {
  window.location = $(this).find("#help-link").attr("href");
  return false;
});



// exchange SVG on Click in nac
function switchSVG( el, path ){
    el.click( function() {
        $('.content').load( path, function() {
            assignLabels();
        });
    });
}

switchSVG( $('#Home'),      "../svg/uebersicht.svg");
switchSVG( $('#sp'),        "../svg/forschungsschwerpunkt.svg");
switchSVG( $('#ft'),        "../svg/forschungsthema.svg");
switchSVG( $('#ma'),        "../svg/mitarbeiter.svg");
switchSVG( $('#st'),        "../svg/student.svg");
switchSVG( $('#physical'),  "../svg/amt-physical.svg");
switchSVG( $('#digital'),   "../svg/amt-digital.svg");
switchSVG( $('#teaching'),  "../svg/amt-teaching.svg");
switchSVG( $('#rooms'),     "../svg/amt-rooms.svg");
switchSVG( $('#team'),      "../svg/amt-team.svg");
switchSVG( $('#documents'), "../svg/amt-documents.svg");


// TEXT CHANGE
function textChange( el, alignment, prompt ) {
    if( alignment ===  "middle") {
        el.attr("text-anchor", "middle");
    }
    el.click( function() {
        var newContent = window.prompt( prompt, el.text());
        if ( !newContent ) {
            return;
        }
        $(this).text( newContent );
    });
}


function assignLabels(){
    textChange( $('svg #vorname'),  "middle", "Bitte Vorname eingeben...");
    textChange( $('svg #erste'),    "middle", "Bitte Funktion eingeben...");
    textChange( $('svg #zweite'),   "middle", "Bitte Funktion eingeben...");
    textChange( $('svg #name'),     "middle", "Bitte Name eingeben...");
    textChange( $('svg #nachname'), "middle", "Bitte Nachname eingeben...");
    textChange( $('svg #zimmer'),   "middle", "Bitte Zimmernummer eingeben...");
    textChange( $('svg #funktion'), "middle", "Bitte Funktion eingeben...( Semesterarbeit / MA Thesis )");
    textChange( $('svg #semester'), "middle", "Bitte Funktion eingeben...( Semesterarbeit / MA Thesis )");
    textChange( $('svg #master'),   "middle", "Bitte Funktion eingeben...( Semesterarbeit / MA Thesis )");
    textChange( $('svg #tel'),      "middle", "Bitte Telefonnummer eingeben...");
    textChange( $('svg #zeile-1'),  "left",   "Bitte erste Zeile eingeben...");
    textChange( $('svg #zeile-2'),  "left",   "Bitte zweite Zeile eingeben...");
    textChange( $('svg #zeile-3'),  "left",   "Bitte dritte Zeile eingeben...");
    textChange( $('svg #zeile-4'),  "left",   "Bitte vierte Zeile eingeben...");
    textChange( $('svg #job'),      "middle", "Bitte job Zeile eingeben...");
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
$('.color').click( function() {
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
