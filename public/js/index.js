
(function(){
  // addToCart({"class_id":1,"name":"fnbvdfjvdfvdfvhdfvdfdfdf","start_time":"1pm","end_time":"2pm","price":"2000","period":"day1","instructor":"emeka"})

})();



function payWithPaystack(email, name, phone, price){
  var handler = PaystackPop.setup({
    key: 'pk_test_28a82093a471edd312ab40ce3af7f2b3bbca7aac',
    email: email,
    amount: price,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    metadata: {
       custom_fields: [
          {
              display_name: "Mobile Number",
              variable_name: "mobile_number",
              value: "+2348012345678"
          }
       ]
    },
    callback: function(response){
      var url = "/send_email_for_payment?price=" + price + "&email=" + email + "&reference=" + response.reference;
      $.get(url, function(data, status){
          swal(
            'Payment successful',
            'A confirmation email has been sent to you mail address',
            'success'
          )
      });
    },
    onClose: function(){
        alert('window closed');
    }
  });
  handler.openIframe();
}

function addToCart(data) {

  console.log($(this).prop('class', 'selected'))

//     var url = "/add_to_cookie?class_id=" + data.class_id
//     $.get(url, function(data, status){
//         // alert("Data: " + data + "\nStatus: " + status);
//     });
}


$( ".add_to_cart_btn" ).click(function() {
  alert( "Handler for .click() called." );
});

function checkout() {
      // var email 
    if 
    (
        $( "#recipiexnt-email").val() == '' || $( "#recipiexnt-email").val() == undefined ||
        $( "#recipiexnt-name").val() == '' || $( "#recipiexnt-name").val() == undefined ||
        $( "#recipiexnt-phone").val() == '' || $( "#recipiexnt-phone").val() == undefined
    ) 
    {
      alert('you need to enter all required field')
    }
    else
    {
      payWithPaystack($( "#recipiexnt-email").val(), $( "#recipiexnt-name").val(), $( "#recipiexnt-phone").val(), $( "#price_bag").attr('value'))
    }

}


// $(document).ready(function() {

//     $(".add_to_cart_btn").click(function() {

//         var data   = $(this).attr("data");
//         // console.log(data[0]['class_id'])
//         console.log(data)

//         $(this).prop('class', 'selected');
//         $(this).text('Selected');

//         var url = "/add_to_cookie?class_id=" + data
//         $.get(url, function(data, status){
//             // alert("Data: " + data + "\nStatus: " + status);
//         });

//     });

// });