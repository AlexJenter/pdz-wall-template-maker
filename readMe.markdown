# So you want to change something, eh?

pd|z wall template helper

### DISCLAIMER
The need for this Piece of Software was the lack of possibilitys to stack graphical Elements in to make clipping masks and the likes in Adobe PDF Forms. This code is hacky and full of worst pratice examples, in case you need some inspiration on **how-not-to-do** stuff go ahead and dig in. I do not take pride in anything but the fact that this overengineered mess seems to the untrained eye to be working. I shall not be heald accountable for any casualties, may they be material or immaterial.

### Rules
##### Templates
Templates are produced with Adobe Illustrator and saved as SVG, after that they shouldnt be touched, all of the manipilation is handeld by jquery and Javasript. For this to work the SVG has to be fitted with the correct **id** Attributes in Illustrator. Html id's van be specified through Illlustrators layers panel. In order to work predictable they must be singular or Ai will suffix them invisibally. Then you would have to go in to the SVG and change that bck by hand or change the name back and forth to get your result as expected.


![](./help/illu_layers.tif)

The Names of the layers are the id's in the svg document.  
These are triggerd by the Javascript.

##### images
Images must be embedded in Ai and taken from the same folder they they will be later served from.  
**e.g. ./img/image.png**

##### Font
Since fonts are kind of a pin in two ways there is some work around to get them to do what you want. SVG can have start- middle- or end-aligned text. In Illustrator analog, this would be left,  middle or right alignment. But Adobe decided to make all exported text left aligned and just position it accordingly. So I had to assign the attribute of `text-anchor="middle"` via Javascript. Line 2 – 4 handle that if the functioncall contains the string "middle" as second argument.


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

