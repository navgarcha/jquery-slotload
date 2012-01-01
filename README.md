# jQuery SlotLoad Plugin v0.1
`<img data-load="imgs/product_pic.jpg" src="imgs/blank.gif" />`

## Example Usage

``` javascript
$('#images-wrapper').slotload();

$('#img-wrapper, #img-wrapper-more').slotload({
    loadingClass: 'slot-effect',
    onComplete: function() {
        // Apply a green border to each image once it's loaded and finished animating
        $(this).css('border', '1px solid green');
    }
});
```

## Demo

http://jsfiddle.net/navgarcha/a53Jp/embedded/result/

## Contact
* Author: Navkaran Garcha
* Mail: nav_garcha@hotmail.co.uk
* Twitter: @Nav_Garcha