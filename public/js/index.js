
(function(){
  // addToCart({"class_id":1,"name":"fnbvdfjvdfvdfvhdfvdfdfdf","start_time":"1pm","end_time":"2pm","price":"2000","period":"day1","instructor":"emeka"})

})();



function payWithPaystack(price, email){
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
    var url = "/add_to_cookie?class_id=" + data.class_id
    $.get(url, function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
    });
}

function checkout() {

    swal({
      title: 'Enter your valid email address to proceed',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function (email) {
        return new Promise(function (resolve, reject) {
          setTimeout(function() {
            if (email == '' || email == null || email == undefined) {
              reject('You need to enter and email')
            } else {
              resolve()
            }
          }, 2000)
        })
      },
      allowOutsideClick: false
    }).then(function (email) {
        payWithPaystack($( "#price_bag").attr('value'), email)
    })

}