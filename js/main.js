/**
 * Created by Draven on 12.11.2016.
 */
$(document).ready(function () {
    $(".name").click(function() {

        var feature_name = this.id;
        console.log(feature_name);
        var f_image_numb = "#" + feature_name + 'f';
        $('.pp').removeClass('slow')
                console.log(f_image_numb)
        $('body').find(f_image_numb).addClass('slow')


    });
})
