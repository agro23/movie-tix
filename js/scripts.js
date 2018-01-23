// business logic

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $('#formname')[0].reset(); // hash is form name
}

// user interface logic

  $(document).ready(function() {

    alert("calling jQuery!");

    // $("#add-address").click(function() {
    //   newAddresses();
    // });
    //
    // $("form#new-contact").submit(function(event) {
    //   event.preventDefault();
    //   var inputtedFirstName = $("input#new-first-name").val();
    //   });
    //
    //   resetFields();
    // });
  });
