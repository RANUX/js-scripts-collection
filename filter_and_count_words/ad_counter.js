
var exclusions = ['\ т.\ ', '\ на\ ', '\ тел.\ ', '\ в\ ', '\ на\ ', '\ у\ ', '\ с\ ', '\ по\ ', '\ ст.\ ', '\ до\ ', '\ и\ ', '\ не', '\ из', '\ о\ ', '\ со\ ', ]


function show_price(textarea, price) {
    var text = textarea.val();
    var cleared_text = remove_exclusions(text);
    var words_count = clean_array_from_empty_strings(cleared_text.split(/\s+/gi)).length;

    $('#qty').val(words_count);
    $('#adprice').val(words_count * price);
}

function remove_exclusions(text) {
    var rgx = new RegExp(exclusions.join("|"), "gi");
    return text.replace(rgx, " ")
}

function clean_array_from_empty_strings(actual){
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++){
      if (actual[i]){
        newArray.push(actual[i]);
    }
  }
  return newArray;
}

function is_checked(check_box) {
    return (check_box.attr("checked") != "undefined" && check_box.attr("checked") == "checked");
}


$(document).ready(function() {
    var price = 1;


    var bold_font_checkbox = $('#boldfont');
    var textarea = $('textarea#ad-text-area');

    $("#izd").change(function () {
        if($(this).val() == 1) {
            price = 1;
        } else if($(this).val() == 2){
            price = 2;
        } else if($(this).val() == 3){
            price = 3;
        }

        if(is_checked(bold_font_checkbox)) {
            show_price(textarea, price*1.5);
        } else {
            show_price(textarea, price);
        }
    });

    bold_font_checkbox.click(function() {
        if(is_checked(bold_font_checkbox)) {
            show_price(textarea, price*1.5);
        } else {
            show_price(textarea, price);
        }
    });

    textarea.keyup(function(){
        if(is_checked(bold_font_checkbox)) {
            show_price(textarea, price*1.5);
        } else {
            show_price(textarea, price);
        }
    });
});



