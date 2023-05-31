// // ========================================page1===========================================

// let check1 = {firstName:'false', lastName:'false', fatherName:'false', aadhar:'false', pan:'false'};

// function page1Check(){
//   let count = 0;
//   for(let i in check1){
//     if(check1[i] != 'true'){
//         count++;
//       }else{
//         count = 0;
//       }
//   }
//   if(count == 0){
//     document.getElementById('next').disabled = false;
//   }
// }  
// document.getElementById('firstname').addEventListener('input', function(){
//   let firstName = document.getElementById('firstname').value;
//   if(!(firstName.match(/^(?=.{3,50}$)[a-z]*$/i))){
//     this.style.border = '1px solid red';
//     check1.firstName = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check1.firstName = 'true';
//     page1Check();
//   }
// })

// document.getElementById('lastname').addEventListener('input', function(){
//   let lastName = document.getElementById('lastname').value;
//   if(!(lastName.match(/^(?=.{3,50}$)[a-z]*$/i))){
//     this.style.border = '1px solid red';
//     check1.lastName = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check1.lastName = 'true';
//     page1Check();
//   }
// })
// document.getElementById('fathername').addEventListener('input', function(){
//   let fatherName = document.getElementById('fathername').value;
//   if(!(fatherName.match(/^(?=.{3,50}$)[a-z]*$/i))){
//     this.style.border = '1px solid red';
//     check1.fatherName = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check1.fatherName = 'true';
//     page1Check();
//   }
// })

// document.getElementById('aadhar').addEventListener('input', function(){
//   let aadhar = document.getElementById('aadhar').value;
//   if(!(aadhar.match(/^\d{4}\d{4}\d{4}$/i))){
//     this.style.border = '1px solid red';
//     check1.aadhar = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check1.aadhar = 'true';
//     page1Check();
//   }
// })
// document.getElementById('pan').addEventListener('input', function(){
//   let pan = document.getElementById('pan').value;
//   if(!(pan.match(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/i))){
//     this.style.border = '1px solid red';
//     check1.pan = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check1.pan = 'true';
//     page1Check();
//   }
// })

// // ========================================page2===========================================

// let check2 = {email:'false', contact:'false', alternateContact:'false',  pinCode:'false'};

// function page2Check(){
//   let count=0;
//   for(let i in check2){
//     if(check2[i] == false){
//         console.log(check2[i]);
//         console.log(check2)
//         count++;
//       }else{
//         count = 0;
//       }
//   }
//   if(count == 0){
//     debugger
//     console.log('Neer');
//     document.getElementById('next1').disabled = false;
//     console.log('Neeraj');
//   }
// }  
// document.getElementById('email').addEventListener('input', function(){
//   let email = document.getElementById('email').value;
//   if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i))){
//     this.style.border = '1px solid red';
//     check2.email = 'false';
//     page2Check();
//   }else{
//     this.style.border = '1px solid green';
//     check2.email = 'true';
//     page2Check();
//   }
// })

// document.getElementById('contact').addEventListener('input', function(){
//   let contact = document.getElementById('contact').value;
//   if(!(contact.match(/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i))){
//     this.style.border = '1px solid red';
//     check2.contact = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check2.contact = 'true';
//     page1Check();
//   }
// })

// document.getElementById('alternatecontact').addEventListener('input', function(){
//   let alternateContact = document.getElementById('alternatecontact').value;
//   if(!(alternateContact.match(/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i))){
//     this.style.border = '1px solid red';
//     check2.alternateContact = 'false';
//     page1Check();
//   }else{
//     this.style.border = '1px solid green';
//     check2.alternateContact = 'true';
//     page1Check();
//   }
// })

// document.getElementById('pincode').addEventListener('input', function(){
//   let pinCode = document.getElementById('pincode').value;
//   if(!(pinCode.match(/^[1-9]{1}\d{2}\s?\d{3}$/i))){
//     this.style.border = '1px solid red';
//     check2.pinCode = 'false';
//     page2Check();
//   }else{
//     this.style.border = '1px solid green';
//     check2.pinCode = 'true';
//     page2Check();
//   }
// })



// // let check3 = {pass10:'false', mark10:'false', pass12:'false', mark12:'false', universityUG:'false', markUG:'false', passUG:'false', universityPG:'false', markPG:'false', passPG:'false'};

// // ========================================page4===========================================

// // let check4 = {accountnumber:'false', bankname:'false', ifsc:'false', branchdetail:'false'}

// // function page4Check(){
// //   let count=0;
// //   for(let i in check4){
// //     if(check4[i] == false){
// //         count++;
// //       }else{
// //         count = 0;
// //       }
// //   }
// //   if(count == 0){
// //     console.log('Neer');
// //     document.getElementById('preview').disabled = false;
// //     console.log('Neeraj');
// //   }
// // } 


///////////////////////////////////////////////////////////////////////////////////////////////


// $(document).ready(function(){
//   $(".action-button").click(function(){
//     $('#page1').attr('style','display:none')
//     $('#page2').attr('style','display:block')
//   })
// })

// window.nextTab = function(id){
//   $('.page').hide()
//   $('#' + id).show()
// }





/////////////////////////////////,,,,,,,,,,,,,,,,,,,,,,,,/////////////,,,,,,,,,,,,,,,,,///////////////

//  // Binding back button on second step
// $(".back2").click(function() {
//   $(".frm").hide("fast");
//   $("#sf1").show("slow");
//   $('#sf3').attr('style', 'display:none')
//   $('#sf1').attr('style', 'display:block')
//   $('#contact').addClass("active")
//   $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
// });

//  // Binding back button on third step
//  $(".back3").click(function() {
//   $(".frm").hide("fast");
//   $("#sf2").show("slow");
// });
 

  // $("#next").click(function() {
  //   // debugger
  //   var form = $("#myform");
  //   form.validate({
  //     rules: {
  //       firstname: {
  //         required: true,
  //         minlength: 6
  //       },
  //       lastname : {
  //         required : true,
  //         minlength : 6
  //       },
  //       fathername :{
  //         required : true,
  //         minlength : 6
  //       },
  //       dob : {
  //         required : true,
  //       },
  //       aadhar : {
  //         required : true,
  //         minlength :12
  //       },
  //       pan : {
  //         required : true,
  //         minlength :12
  //       },
  //       email : {
  //         required : true,
  //       }
  //     },
  //     messages: {
  //       firstname:{
  //         minlength:"minimum 6 character"
  //       },
  //       email:{
  //         minlength:"minimum 6 character"
  //       }
  //     }
  //   });
    
  //   if (form.valid() === true) {
  //       // Binding next button on first step
  //       $(".open1").click(function() {
  //         if (v.form()) {
  //           $(".frm").hide("fast");
  //           $("#sf2").show("slow");
  //           $('#contact').addClass("active")
  //           $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
  //         }
  //       });
        
  //       // Binding next button on second step
  //       $(".open2").click(function() {
  //         if (v.form()) {
  //           $(".frm").hide("fast");
  //           $("#sf3").show("slow");
  //         }
  //       });
        
  //        // Binding back button on second step
  //       $(".back2").click(function() {
  //         $(".frm").hide("fast");
  //         $("#sf1").show("slow");
  //       });
        
  //        // Binding back button on third step
  //        $(".back3").click(function() {
  //         $(".frm").hide("fast");
  //         $("#sf2").show("slow");
  //       });
        
      // if(document.getElementById('page1').id == "page1"){
      //   $('#page1').attr('style', 'display:none')
      //   $('#page2').attr('style', 'display:block')
      //   $('#contact').addClass("active")
      //   $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
      // }
      // else if(document.getElementById('page2').id == "page2"){
      //   $('#page2').attr('style', 'display:none')
      //   $('#page3').attr('style', 'display:block')
      //   $('#contact').addClass("active")
      //   $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
      // }else if(document.getElementById('page2').id == "page3"){
      //   $('#page3').attr('style', 'display:none')
      //   $('#page4').attr('style', 'display:block')
      //   $('#contact').addClass("active")
      //   $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
      // }else{
      //   $('#page5').attr('style', 'display:none')
      //   $('#page6').attr('style', 'display:block')
      //   $('#contact').addClass("active")
      //   $(".progress-bar").attr('style', 'width:40%;background-color: #2523ab;')
      // }
  //   }
  // });
  


 
// });

// $("#next1").click(function() {
//   debugger
//   var form1 = $("#myform");
//   form1.validate({
//     rules: {
//       email: {
//         required: true,
//         // minlength: 6
//       },
//       contact : {
//         required : true,
//         minlength : 10
//       },
//       alternatecontact :{
//         required : true,
//         minlength : 10
//       },
//       pincode : {
//         required : true,
//         minlength: 6
//       },
//       address : {
//         required : true,
//         minlength :12
//       }
//     },
//     messages: {
//       contact:{
//         minlength:"as requare 10 digit "
//       }
//     }
//   });

//   if (form1.valid() === true) {
//   $('#page2').attr('style', 'display:none')
//   $('#page3').attr('style', 'display:block')
//   $('#education').addClass("active")
//   $(".progress-bar").attr('style', 'width:60%;background-color: #2523ab;')
//   }
// });

// $('next2').click(function(){
//   var form1 = $("#myform");
//   form1.validate({
//     rules: {
//       email: {
//         required: true,
//         // minlength: 6
//       },
//       contact : {
//         required : true,
//         minlength : 10
//       },
//       alternatecontact :{
//         required : true,
//         minlength : 10
//       },
//       pincode : {
//         required : true,
//         minlength: 6
//       },
//       address : {
//         required : true,
//         minlength :12
//       }
//     },
//     messages: {
//       contact:{
//         minlength:"as requare 10digit "
//       }
//     }
//   });
//   if (form1.valid() === true) {
//   $('#page3').attr('style', 'display:none')
//   $('#page4').attr('style', 'display:block')
//   $('#bank').addClass("active")
//   $(".progress-bar").attr('style', 'width:80%;background-color: #2523ab;')
//   }
// });

// $('.back1').click(function(){
//   $('#page2').attr('style', 'display:none')
//   $('#page1').attr('style', 'display:block')
// })

// $('.back2').click(function(){
//   $('#page2').attr('style', 'display:block')
//   $('#page3').attr('style', 'display:none')
// })

// $('.back3').click(function(){
//   $('#page3').attr('style', 'display:block')
//   $('#page4').attr('style', 'display:none')
// })

// $("#state").change(function(){
//   alert($(this).val())
// })

// $(".step1").keyup(()=>{
//   let valueArray = $('.step1').map(function(){
//     return this.value;
//   }).get();
//   let emptyField = valueArray.filter((value)=> value=="")
//   if(emptyField.length==0)
//     $('#next').attr('disabled:true')
// })


// Object.keys(states).map(data=>{
//   $("#state").append('<option value="'+data+'">'+data+'</option>')
// }) 

// Object.keys(state[city]).map(data=>{
//   $("#city").append('<option value="'+data+'">'+data+'</option>')
// }) 