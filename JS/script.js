import { states } from "./state.js"

Object.keys(states).map(data => {
  $("#state").append('<option value="' + data + '">' + data + '</option>')
})

$("#state").change(function () {
  $("#city").empty();
  var choice = ""
  choice = $(this).val()
  var ct = Object.entries(states).filter(data => {
    return data[0] == choice
  })
  ct[0][1].map((city, index) => {
    $('#city').append(new Option(city, city))
  })
})

$.validator.addMethod("firstNameRegex", function (value, element) {
  return this.optional(element) || /^[a-zA-Z ]*$/i.test(value)
}, "Please Enter Valid Name...");
$.validator.addMethod("lastNameRegex", function (value, element) {
  return this.optional(element) || /^[a-zA-Z ]*$/i.test(value)
}, "Please Enter Valid Name...");
$.validator.addMethod("fatherNameRegex", function (value, element) {
  return this.optional(element) || /^[a-zA-Z ]*$/i.test(value)
}, "Please Enter Valid Name...");
$.validator.addMethod("aadharRegex", function (value, element) {
  return this.optional(element) || /^\d{4}\d{4}\d{4}$/i.test(value)
}, "Please Enter Valid Adhar Number...");
$.validator.addMethod("panRegex", function (value, element) {
  return this.optional(element) || /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/i.test(value)
}, "Please Enter Valid Pan Number...");
$.validator.addMethod("emailRegex", function (value, element) {
  return this.optional(element) || /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value)
}, "Please Enter Valid Emai Id...");
  $.validator.addMethod("contactRegex", function (value, element) {
    return this.optional(element) || /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(value)
  }, "Please Enter Valid Mobile Number...");
$.validator.addMethod("alternetContactRegex", function (value, element) {
  return this.optional(element) || /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(value)
}, "Please Enter Valid Mobile Number...");
$.validator.addMethod("pinCodeRegex", function (value, element) {
  return this.optional(element) || /^\d{4}$|^\d{6}$/i.test(value)
}, "Please Enter Valid Pin Code...");
$.validator.addMethod("ifscRegex", function (value, element) {
  return this.optional(element) || /^[A-Z]{4}0[A-Z0-9]{6}$/i.test(value)
}, "Please Enter Valid IFSC Code...");

var v = $("#myform").validate({
  rules: {
    First_Name: {
      required: true,
      minlength: 3,
      firstNameRegex: true
    },
    Last_Name: {
      required: true,
      minlength: 3,
      lastNameRegex: true
    },
    Father_Name: {
      required: true,
      minlength: 3,
      fatherNameRegex: true
    },
    Date_Of_Birth: {
      required: true,
    },
    Adhar_Number: {
      required: true,
      aadharRegex: true
    },
    Pan_Number: {
      required: true,
      panRegex: true
    },
    Email_ID: {
      required: true,
      emailRegex: true
    },
    Contact_Number: {
      required: true,
      contactRegex: true
    },
    Alternate_Number: {
      required: true,
      alternetContactRegex: true
    },
    State: {
      required: true
    },
    City : {
      required : true
    },
    Pin_Code: {
      required: true,
      minlength:6,
      pinCodeRegex: true
    },
    Address: {
      required: true
    },
    Secondary_School_Year: {
      required: true,
      minlength: 4,
      maxlength: 4
    },
    Secondary_School_Marks: {
      required: true
    },
    Higher_Secondary_School_Year: {
      required: true,
      minlength: 4,
      maxlength: 4
    },
    Higher_Secondary_School_Marks: {
      required: true
    },
    Under_Graduation_University: {
      required: true
    },
    Under_Graduation_Year: {
      required: true,
      minlength: 4,
      maxlength: 4
    },
    Under_Graduation_Marks: {
      required: true
    },
    Post_Graduation_Year: {
      minlength: 4,
      maxlength: 4
    },
    Account_Number: {
      required: true,
      minlength: 5
    },
    Bank_Name: {
      required: true
    },
    IFSC_Code: {
      required: true,
      ifscRegex: true
    },
    Branch_Name: {
      required: true
    }
  },
});

// Binding next button on second step
$(".open1").click(function (e) {
  e.preventDefault()
  if (v.form()) {
    $('#sf1').attr('style', 'display:none')
    $('#sf2').attr('style', 'display:block')
    $('#contact').addClass("active")
  }
});

// Binding next button on Third step
$(".open2").click(function (e) {
  e.preventDefault()
  if (v.form()) {
    $('#sf2').attr('style', 'display:none')
    $('#sf3').attr('style', 'display:block')
    $('#education').addClass("active")
  }
});
// Binding next button on fourth step
$(".open3").click(function (e) {
  e.preventDefault()
  if (v.form()) {
    $('#sf3').attr('style', 'display:none')
    $('#sf4').attr('style', 'display:block')
    $('#bank').addClass("active")
  }
});
// Binding next button on fourth step
var form;
$(".open4").click(function (e) {
  e.preventDefault()
  if (v.form()) {
    $('#sf4').attr('style', 'display:none')
    $('#sf5').attr('style', 'display:block')
    $('#confirm').addClass("active")

    form = document.getElementById('myform')
    const formData = new FormData(form)
    console.log(formData);

    let str = ""
    for (let obj of formData) {
      str += `<div class="row" >
      <div class="col-md-6" >${obj[0]}</div>
      <div class="col-md-1" >${':'}</div>
      <div class="col-md-5" >${obj[1]}</div>
      </div>`
    }
    document.getElementById('preview').innerHTML = str
    $('#contact').addClass("active")
  }
});

$(".submit").click(function (e) {
  const formData = new FormData(form)
  let str = ""
  for (let obj of formData) {
    var tCookiename = `${obj[0]}`; 
    var tCookievalue = `${obj[1]}` 
    document.cookie = [tCookiename, JSON.stringify(tCookievalue)].join('=');
  } 
  location.reload();
})

$(".back1").click(function () {
  $('#sf2').attr('style', 'display:none')
  $('#sf1').attr('style', 'display:block')
});
// Binding back button 
$(".back2").click(function () {
  $('#sf3').attr('style', 'display:none')
  $('#sf2').attr('style', 'display:block')
});
// Binding back button 
$(".back3").click(function () {
  $('#sf4').attr('style', 'display:none')
  $('#sf3').attr('style', 'display:block')
});
$(".back4").click(function () {
  $('#sf5').attr('style', 'display:none')
  $('#sf4').attr('style', 'display:block')
});



