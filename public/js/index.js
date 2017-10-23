
(function(){
  // addToCart({"class_id":1,"name":"fnbvdfjvdfvdfvhdfvdfdfdf","start_time":"1pm","end_time":"2pm","price":"2000","period":"day1","instructor":"emeka"})
})();


    function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


$(document).ready(function() {
    
    // var price = $( "#price_bag").attr('value');
    // // console.log(price)
    // // console.log(accounting.formatMoney(price, { symbol: "",  format: "%v %s" }))
    // // console.log(accounting.formatMoney(price))
    // alert(accounting.unformat(price) * 100)
    // console.log(accounting.unformat(parseFloat(price) * 100))

    // payWithPaystack('emeka@jrher.com', 'ewewe', 'wewe', 11111)

});

function payWithPaystack(email, name, phone, price){

  var handler = PaystackPop.setup({
    key: 'pk_live_8df78654447fd2b6521442cf281250c36b6d4177',
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
      
      swal({
        title: 'Payment successful',
        text: 'A confirmation email is been sent to you mail address, please wait',
        timer: 100000000,
        onOpen: function () {
          swal.showLoading()
        }
      }).then(
        function () {

          alert(1)
        },
        // handling the promise rejection
        function () {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer')
          }
        }
      )

      var url = "/send_email_for_payment?price=" + price + "&email=" + email + "&reference=" + response.reference + "&name=" + name + "&phone=" + phone ; 
      $.get(url, function(data, status){
        // swal(
        //   'Payment successful',
        //   'A confirmation email has been sent to you mail address',
        //   'success'
        // )
        window.location="/";
      });


    },
    onClose: function(){
        // alert('window closed');
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

      var price = $( "#price_bag").attr('value');
      // console.log(price)
      // console.log(accounting.formatMoney(price, { symbol: "",  format: "%v %s" }))
      // console.log(accounting.formatMoney(price))
      console.log(accounting.unformat(price))

  
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
        payWithPaystack($( "#recipiexnt-email").val(), $( "#recipiexnt-name").val(), $( "#recipiexnt-phone").val(), accounting.unformat(price) * 100)
      }

}


$(document).ready(function() {

    // $(".add_to_cart_btn").click(function() {

    //     var data   = $(this).attr("data");
    //     // console.log(data[0]['class_id'])
    //     console.log(data)

    //     $(this).prop('class', 'selected');
    //     $(this).text('Selected');

    //     var url = "/add_to_cookie?class_id=" + data
    //     $.get(url, function(data, status){
    //         // alert("Data: " + data + "\nStatus: " + status);
    //     });

    // });
    
    // payWithPaystack('emeka@jrher.com', 'ewewe', 'wewe', 'rer')

    // checkout()


        //   function addCommas(nStr)
        //   {
        //     nStr += '';
        //     x = nStr.split('.');
        //     x1 = x[0];
        //     x2 = x.length > 1 ? '.' + x[1] : '';
        //     var rgx = /(\d+)(\d{3})/;
        //     while (rgx.test(x1)) {
        //       x1 = x1.replace(rgx, '$1' + ',' + '$2');
        //     }
        //     return x1 + x2;
        //   }
        // console.log($("#price_bag").attr('value'))
        // console.log(typeof(parseInt(addCommas($( "#price_bag").attr('value')))))
        // console.log(Number($("#price_bag").attr('value')))
        // console.log(Number($("#price_bag").attr('value')))

});