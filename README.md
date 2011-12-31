# jQuery SlotLoad Plugin v0.1
`<img data-load="imgs/product_pic.jpg" src="imgs/blank.gif" />`

## Example Usage

``` javascript
$('#images-wrapper').slotload();

$('#img-wrapper, #img-wrapper-more').slotload({
    loadingClass: 'slot-effect',
    onComplete: function() {
        // Apply a green border to the image wrapper we created
        $(this).parent().css('border', '1px solid green');
    }
});
```

## Contact
* Author: Navkaran Garcha
* Mail: nav_garcha@hotmail.co.uk
* Twitter: @Nav_Garcha