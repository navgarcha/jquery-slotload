# jQuery SlotLoad Plugin v0.1


## Example Usage

``` javascript
$('#images-wrapper').slotload();

$('#img-wrapper, #img-wrapper-more').slotload({
    loadingClass: 'slot-effect',
    onComplete: function() {
        $(this).parent().css('border-color', 'green');
    }
});
```

## Contact
* Author: Navkaran Garcha
* Mail: nav_garcha@hotmail.co.uk
* Twitter: @Nav_Garcha