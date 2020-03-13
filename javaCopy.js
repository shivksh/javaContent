// // // // // // // abc=function(name,address){
// // // // // // //     this.name=name;
// // // // // // //     this.add=address;
// // // // // // //     this.new_func=function(){
// // // // // // // return this.name+" end";
// // // // // // //     }
// // // // // // //     this.an_func=function(){
// // // // // // // return this.add+" end"
// // // // // // //     }

// // // // // // // }
// // // // // // // var data=new abc("Shiv","Mathura");
// // // // // // // console.log(data.an_func());
// // // // // // // abc.prototype.nationality="Indian";
// // // // // // // console.log(abc);





// // // // // // // var abc=new Object();
// // // // // // // abc.name="Shiv";
// // // // // // // abc.address="Mathura";
// // // // // // // abc.func=function(a,b){
// // // // // // //     return a+b;
// // // // // // // }
// // // // // // // console.log(abc.func(3,4));




// // // // // // //  function abc(a)
// // // // // // //  {
// // // // // // //      console.log(a);
// // // // // // //  }
// // // // // // //  function def(callback,a){
// // // // // // //      callback(a);
// // // // // // //  }/
// // // // // // //  def(abc,10);






// // // // // // // function show(a)
// // // // // // // {
// // // // // // // 	console.log("value of a is" + a);
// // // // // // // }
// // // // // // // function test(a,callback)
// // // // // // // 				{
// // // // // // // 					callback(a);
// // // // // // // 				}
// // // // // // // 				function test2(data)
// // // // // // // 				{
// // // // // // // 					data(20,show);
// // // // // // // 				}
// // // // // // // 				function name (new_func){
// // // // // // //                     new_func(test);   
// // // // // // //                 }
// // // // // // //                 name(test2);








// // // // // // //  var a=10;
// // // // // // //  abc=function(){
// // // // // // //      var c=30;
// // // // // // //  def=function(){
// // // // // // //     ghi=function (){
// // // // // // //         console.log(c);
// // // // // // //     }
// // // // // // //      return ghi();
// // // // // // //  }
// // // // // // //  return def();
// // // // // // //  }




// // // // // // //  abc();



// // // // // // // var a="Shiv";
// // // // // // // first=function(){
// // // // // // //     var b=20;
// // // // // // //     second=function(){
// // // // // // //         console.log(b+third());
// // // // // // //     }
// // // // // // //     return second()
// // // // // // // }
// // // // // // // third=function(){
// // // // // // //     return "Hii";
// // // // // // // }

// // // // // // // first();

 


// // // // // // // This Keyword practice\



// // // // // // // console.log(this);
// // // // // // // var obj={
// // // // // // //     name:"shiv",
// // // // // // //     id:161500511,
// // // // // // //     dob:"17-09-2000",
// // // // // // //     func:function(){
// // // // // // // console.log(this);
// // // // // // //     }
// // // // // // // }
// // // // // // // obj.func();


// // // // // // // Closure Practice



// // // // // // // function func1(c){
// // // // // // //      function func3(f,g){
// // // // // // //             console.log(c+(f+g));
// // // // // // //     }
// // // // // // //     return func3;
    

// // // // // // // }
// // // // // // // var add=func1("This No. is");
// // // // // // // add(3,4);




// // // // // // // Closure example 2 calculate retirement age.




// // // // // // //  function isretired(retirement_age){
// // // // // // //      var a='Total remaining years in retirement is: ';
// // // // // // //      function ages(dateofbirth){
// // // // // // //          age=2020-dateofbirth;
// // // // // // //          total_age_left=retirement_age-age;
// // // // // // //          console.log(a+ total_age_left);
// // // // // // //      }
// // // // // // //  return ages;
// // // // // // //  }
// // // // // // //  console.log(isretired(65)(1968));
 


// // // // // // // function abc(){
// // // // // // //     function def(a,b){
// // // // // // //         return a+b;
// // // // // // //     }
// // // // // // //     return def;
// // // // // // // }
// // // // // // // console.log(abc()(4,6));
// // // // // // // 



// // // // // // // Map function 

// // // // // // // var array1=[3, 3,161500511,281401,4];
// // // // // // // function main(a){
// // // // // // //     return a*2;
// // // // // // // }
// // // // // // // array2=array1.map(main);
// // // // // // // console.log(array2);



// // // // // // //Hoisting practice

// // // // // // // var c = 10;
// // // // // // // function abc(a,b){
// // // // // // //     var c;
// // // // // // //     console.log(c=a+b);
// // // // // // // }
// // // // // // // abc(4,3);
// // // // // // // console.log(c);


// // // // // // //    var variable = 10;
// // // // // // //   (()=>{
// // // // // // //      vari=5;
// // // // // // //      console.log(vari);
// // // // // // //       variable=60;
// // // // // // //      console.log(variable);
// // // // // // //      var variabl=30;
// // // // // // //   })();
// // // // // // //   console.log(vari);
// // // // // // //   console.log(variabl);
 



// // // // // // // ac(4,3);
// // // // // // // var ac=function(a,b)
// // // // // // // {
// // // // // // //     console.log(a+b);

// // // // // // // }


// // // // // // //   var variable = 10;
// // // // // // //   (()=>{
// // // // // // //      variable_3 = 35;
// // // // // // //      console.log(variable_3);
// // // // // // //      var variable_3 = 45;
// // // // // // //      variable_2 = 15;
// // // // // // //      console.log(variable);   
// // // // // // //   })();
// // // // // // //   console.log(variable_2);
// // // // // // //   console.log(variable_3);
// // // // // // //   var variable=30;


// // // // // //  var x ;  
// // // // // //  x=90; 
// // // // // //  function test()
// // // // // //  {
// // // // // //      "use strict"
// // // // // //            x=30;
// // // // // //      if (x > 20) { 
// // // // // //           x=50;
// // // // // //          console.log(x);
// // // // // //      } 
// // // // // //      // else{
// // // // // //      //     console.log("No");
// // // // // //      // }

// // // // // //      console.log(x);
// // // // // //  } 

// // // // // //  test();




// // // // // // // void doSomething() { 
  
// // // // // // //     int x = 10; 
// // // // // // //     printf("%d\n", x); 
  
// // // // // // //     if (x == 10) { 
// // // // // // //         int x = 20; 
// // // // // // //         printf("%d\n", x);     
// // // // // // //     } 
  
// // // // // // //     printf("%d\n", x); 
  
// // // // // // // } 


// // // // // // // let x = 10; 
// // // // // // // console.log(x); 
// // // // // // // let x=39;
// // // // // // // console.log(x);
// // // // // // // function test() 
// // // // // // // { 
// // // // // // //     let x = 20; 
// // // // // // //     console.log(x); 
  
// // // // // // //     if (x > 10) { 
// // // // // // //          x = 30; 
// // // // // // //         console.log(x); 
// // // // // // //     } 
  
// // // // // // //     console.log(x); 
// // // // // // // } 
  
// // // // // // // test(); 


// // // // // // //  function parent(){
// // // // // // //      let v=30;
// // // // // // //      function child1(){
// // // // // // //          let v=20;
// // // // // // //          function chidchild(){
// // // // // // //              var v=50;
// // // // // // //              return(v+"childchild");
// // // // // // //          }
// // // // // // //          console.log(v);
// // // // // // //          return chidchild;
// // // // // // //      }

// // // // // // //      return child1;

// // // // // // //  }
// // // // // // //  console.log(parent()()());





// // // // // // // let c=50;
// // // // // // // if(c>40){
// // // // // // //     let c=20;
// // // // // // //     console.log(c);
// // // // // // // }




// // // // // // //  function test(){
// // // // // // //      if(false){
// // // // // // //          var c=100;

// // // // // // //      }
// // // // // // //      console.log(c);
// // // // // // //  }
// // // // // // //  test();

// // // // // // // const a=10;
// // // // // // // function abc(){
// // // // // // //     var a=18;
// // // // // // //     return ++a;
// // // // // // // }
// // // // // // // console.log(abc());




// // // // // // // let variable;
// // // // // // // variable = 10;
// // // // // // // (()=>{
// // // // // // //    console.log(variable);   // undefined
// // // // // // //    variable = 20;
// // // // // // //    console.log(variable);   // 20
// // // // // // //    console.log(this);
// // // // // // //    function abc(){
// // // // // // //        console.log(this);
// // // // // // //    }
// // // // // // //    return abc;
// // // // // // // })();
// // // // // // // console.log(()());




// // // // // // //  function abc(){
// // // // // // //     a="The Sum Is";
// // // // // // //     function def(c,d){
// // // // // // //         console.log(this);
// // // // // // //         return (a+c+d);
// // // // // // //     }
// // // // // // //     return def;
// // // // // // // }
// // // // // // // console.log(abc()(3,4));



 
// // // // // // // function abc(a){
// // // // // // //     for(i in a){
// // // // // // //         console.log(i+":"+a[i]);
// // // // // // //     }
// // // // // // // }
// // // // // // // var a={name:"shiv", Middle_name:"Kumar", Last_name:"Sharma"};
// // // // // // // abc(a);


// // // // // var body = document.getElementById("body");
// // // // // var div1 = document.createElement("div");
// // // // // div1.setAttribute("style","margin:0px auto;width:40%;border:2px solid red;");
// // // // // var h1=document.createElement("h1");
// // // // // h1.setAttribute("style","text-align:center;")
// // // // // var text=document.createTextNode("Registration Form");
// // // // // var form=document.createElement("form");
// // // // // body.appendChild(div1);
// // // // // div1.appendChild(form);
// // // // // h1.appendChild(text);
// // // // // div1.insertBefore(h1,form);
// // // // // var label=document.createElement("label");
// // // // // form.appendChild(label);
// // // // // text2=document.createTextNode("Username :");
// // // // // label.setAttribute("style","font-weight:900;");
// // // // // label.appendChild(text2);

// // // // // var br=document.createElement("br");
// // // // // form.insertBefore(br,input1);


// // // // // var input1=document.createElement("input");
// // // // // form.appendChild(input1);
// // // // // input1.setAttribute("style","margin-top:1%;width:50%;height:20px;border-radius:3%;");




// // // // // var i, j;
// // // // //     var n = prompt("Enter a num");
// // // // //    //outer loop
// // // // //    for(i=1; i <= n; i++)
// // // // //     {
// // // // //     //inner loop
// // // // //      for(j=1; j<=i; j++)
// // // // //     {
// // // // //       document.write("*");
// // // // //      }
// // // // //       document.write('<br/>');
// // // // //     }




// // // // //  var i, j;
// // // // //  var n = prompt("Enter a num");
// // // // //  //outer loop
// // // // //  for(i=1; i <= n; i++)
// // // // //  {
// // // // //      for(k = 1; k <= (n-i); k++) {
// // // // //          document.write("&nbsp;");
// // // // //      }
// // // // //  //inner loop
// // // // //   for(j=1; j<=i; j++)
// // // // //  {
// // // // //    document.write("*");
// // // // //   }
// // // // //    document.write('<br/>');
// // // // //  }


// // // // // var i, j;
// // // // //    //outer loop
// // // // //    for(i=1; i <= 5; i++)
// // // // //     {
// // // // //     //inner loop
// // // // //      for(j=1; j<=i; j++)
// // // // //     {
// // // // //       document.write(j+ "&nbsp;&nbsp;");
// // // // //      }
// // // // //       document.write('<br/>');
// // // // //     }







// // // // // --------------------------------------------------------------------------------------------------------------------------





// //  var body1 = document.getElementById("body");
// //  var form=document.createElement("form");
// //  form.setAttribute("id","form1");
// //  form.setAttribute("onsubmit","return validation()")
// //  form.setAttribute("method","post");
// //  var div1=document.createElement("div");
// //  div1.setAttribute("id","div1");
// //  div1.appendChild(form)
// //  var head1=document.createElement("h1");
// //  var text1=document.createTextNode("Registration Form");
// //  body.appendChild(div1);
// //  head1.appendChild(text1);
// //  form.appendChild(head1);
// //  div1.setAttribute("style","margin:0px auto;width:30%;");
// //  head1.setAttribute("style","margin-bottom:10%;margin-left:3%;")
// //  var lable1=document.createElement("label");
// //  var input1=document.createElement("input");
// //  var text2=document.createTextNode("Username :");
// //  input1.setAttribute("type","text");
// //  input1.setAttribute("id","input1");
// //  lable1.appendChild(text2);
// //  form.appendChild(lable1);
// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  form.appendChild(input1);
// //  lable1.setAttribute("id","label11");   
// //  lable1.setAttribute("style","font-weight:bold;font-size: larger;margin:2%;");
// //  input1.setAttribute("style","width: 60%;height:30px;margin:3%;");




// //  // ----------------------------------------------------------------------------------------------------------------






// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  var lable2=document.createElement("label");
// //  var input2=document.createElement("input");
// //  var text3=document.createTextNode("E-mail :");
// //  input2.setAttribute("type","email");
// //  input2.setAttribute("id","input2");
// //  lable2.appendChild(text3);
// //  form.appendChild(lable2);
// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  form.appendChild(input2);
// //  lable2.setAttribute("id","label11");
// //  lable2.setAttribute("style","font-weight:bold;font-size: larger;margin:2%;");
// //  input2.setAttribute("style","width: 60%;height:30px;margin:3%;");





// //  // ------------------------------------------------------------------------------------------------------------------------





// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  var lable3=document.createElement("label");
// //  var input3=document.createElement("input");
// //  var text4=document.createTextNode("Create Password :");
// //  input3.setAttribute("type","password");
// //  input3.setAttribute("id","input3");
// //  lable3.appendChild(text4);
// //  form.appendChild(lable3);
// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  form.appendChild(input3);
// //  lable3.setAttribute("id","label11");
// //  lable3.setAttribute("style","font-weight:bold;font-size: larger;margin:2%;");
// //  input3.setAttribute("style","width: 60%;height:30px;margin:3%;");





 
// //  // --------------------------------------------------------------------------------------------------------------------------------









// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  var lable4=document.createElement("label");
// //  var input4=document.createElement("input");
// //  var text5=document.createTextNode("Confirm Password :");
// //  input4.setAttribute("type","password");
// //  input4.setAttribute("id","input4");
// //  lable4.appendChild(text5);
// //  form.appendChild(lable4);
// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  form.appendChild(input4);
// //  lable4.setAttribute("id","label11");
// //  lable4.setAttribute("style","font-weight:bold;font-size: larger;margin:2%;");
// //  input4.setAttribute("style","width: 60%;height:30px;margin:3%;");






// // // ----------------------------------------------------------------------------------------------------------------------------------------









// //  var br=document.createElement("br");
// //  form.appendChild(br);
// //  var lable5=document.createElement("label");
// //  var button=document.createElement("button");
// //  var text6=document.createTextNode("Submit");
// //  button.setAttribute("type","button");
// //  button.setAttribute("id","button");
// //  lable5.appendChild(text6);
// //  button.appendChild(lable5);
// //  form.appendChild(button);
// //  lable5.setAttribute("id","label11");
// //  lable5.setAttribute("style","font-weight:bold;font-size: larger;");
// //  button.setAttribute("style","margin:4% 0 0 ; width:70%;height:40px;");
// //  button.setAttribute("type","submit");







// //  // ________________________________________________________________________________________________________________________________





// // var pattern= /^([A-Z\a-z\d\._]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
// // var pattern2=/^([A-z\a-z\d\.])?$/;
// //  // Form Validation 
// //  function validation(){
// //      var x=document.getElementById("input1").value;
// //      var y=document.getElementById("input2").value;
// //      var z=document.getElementById("input3").value;
// //      var zz=document.getElementById("input4").value;
// //       if(x==""){
// //           alert("Username must be filled ");
// //           return false;
// //       }
// //       if(y==""){
// //           alert("Email must be filled ");
// //           return false;
// //       }
// //      if(pattern.test(y)==false){
// //         alert("Email is not valid ");
// //               return false;
// //      }
// //      if(z==""){
// // alert("Password is not Entered");
// // return false;
// //      }
// //      if(zz==""||zz!=z){
// //          alert("Password is not same");
// //          return false;
// //      }


     

// //  }




// // function length(a){
// //     var len=0;
// //     while(a[len]!=undefined){
// //         len++;
// //     }
// //     return len;
// // }
// //  var newArray=[2,4,7]
// // newLen=(length(newArray));
// // var arr=[];
// // for(var re=newLen;re>=0;re--){
// // arr=length[newLen-1];
// // }



// // function lenRev(arr){
// //     length=0;
// //     while(arr[length]!=undefined){
// //         length++;
// //     }
// //     return(length);
// // }
// // a=["s","h","i","v"]
// // newlen=lenRev(a);
// // var newarray=[];


// // ______________________________________________________________________________________________________________________________





// // function reverse(a){
// //     newarray=[];
// //     length=0;
// // while(a[length]!=undefined){
// //     length++
// // }
// // newlen=length;
// //     for(var i=0;i<newlen;i++){
// //         newarray[i]=a[newlen-1-i];
// //     }
// //     return newarray;
// // }
// // console.log(reverse(["s","h","i","v"]));



// // ------------------------------------------------------------------------------------------------------------------------------




// // Vowels Count
// // var c=0;
// // var v=0;
// // function vowels(a){
// // var s=["a","e","i","o","u"];
// // for(var i=0;i<a.length;i++){
// //     for(var j=0;j<s.length;j++){
// //         if(a[i]==s[j]){
// //             v=v+1;
// //         }
        
// //     }

// // }
// // return v;
// // }
// // var g=prompt("Enter the string");
// // console.log(vowels(g));




// // ______________________________________________________________________________________________________________________________




// var body=document.getElementById("body");
// var input1=document.createElement("input");
// input1.setAttribute("id","input1")
// var input2=document.createElement("input");
// input2.setAttribute("id","input2")
// var button=document.createElement("button");
// button.setAttribute('onclick',"reverse()");
// var div=document.createElement("div");
// div.setAttribute("id","divi");
// var text=document.createTextNode("Submit");
// div.appendChild(input1);
// div.appendChild(input2);
// div.appendChild(button);
// button.appendChild(text);
// var newDiv=document.createElement("div");
// newDiv.setAttribute("id","divi2");
// var form=document.createElement("form");
// body.appendChild(form);
// form.appendChild(div);
// body.appendChild(newDiv);



// // var value1=document.getElementById("input1").value;
// // var value2=document.getElementById("input2").value;


// function reverse(){


//     var newfirst;
//     var secondnew;
//     var result;
    


//     var value1=document.getElementById("input1").value;
//     var value2=document.getElementById("input2").value;
    



//     newfirst=value1.length;
   
//     secondnew=value2.length;
// result=newfirst+secondnew;
// // return result;

// document.getElementById("divi2").innerHTML=("<br>"+result);
// }
// var table=document.createElement("table");
// var tr1=document.createElement("tr");
// var th1=document.createElement("th");
// var th2=document.createElement("th");
// var th3=document.createElement("th");
// var head1=document.createTextNode("First Name");
// var head1=document.createTextNode("Last Name");
// var head1=document.createTextNode("Age");
// table.appendChild(tr1);
// tr1.appendChild(th1);
// tr1.appendChild(th2);
// tr1.appendChild(th3);
// body.appendChild(table);






















// <table style="width:100%">
//   <tr>
//     <th>Firstname</th>
//     <th>Lastname</th>
//     <th>Age</th>
//   </tr>
//   <tr>
//     <td>Jill</td>
//     <td>Smith</td>
//     <td>50</td>
//   </tr>
//   <tr>
//     <td>Eve</td>
//     <td>Jackson</td>
//     <td>94</td>
//   </tr>
// </table>




// ---------------------------------------------------------------------------------------------------------------------------


// String into array of letter


// var a="shiv";
// var array=[];
// strlen=0;
// while(a[strlen]!=undefined){
//     strlen++;
// }
// for(var i=0;i<strlen;i++){
//     array[i]=a[i];
// }
// console.log(array);


// --------------------------------------------------------------------------------------------------------------------------------

// Second largest no. in an array

// var array=[2,4,5,6,7,8,0];
// var first=0;
// var second=0;
// var arlen=0;
// while(array[arlen]!=undefined){
// arlen++
// }
// for(i=0;i<arlen;i++){
//     if(array[i]>first){
//         second=first;
//         first=array[i];
//     }
//     else if(array[i]<first && array[i]>second){
//         second=array[i];
//     }
// }
// console.log(second);
// console.log(first);

// ----------------------------------------------------------------------------------------------------------------------------------




// First n Node. of elements in an array
// function  first(arr,n){
//     var a=[];
//     if(n==undefined){
//         return arr;
//     }
//     else{
// for(var i=0;i<n;i++){
//     a[i]=arr[i];
    
// }
//     }
// return a;
// }
// console.log(first([4,5,4,9,8],3));




// -----------------------------------------------------------------------------------------------------------------------------


// String to array

// var str="thisisit";
// var a =[];
// length=0;
// while(str[length]!=undefined){
//     length++
// }
// for( var i=0;i<length;i++){
//     a[i]=str[i];
// }
// console.log(a);

// -----------------------------------------------------------------------------------------------------------------------------------

// function reverse(a,n){

// var abc=[];
// for(i=0;i<n;i++){
//     abc[i]=a[a.length-1-i];
// }
// return abc;
// }
// a=[2,3,4,5,56,7,7,4,3];
// console.log(reverse(a,4));



// ----------------------------------------------------------------------------------------------------------------------------------------



// Array to separated string


// var a=["shiv","Kumar","Sharma"];
// var str="";
// for(var i=0;i<a.length;i++){
//     if(i==a.length-1){
//     str+=(a[i]);
//     }
//     else{
//         str+=(a[i]+'-');
//     }
// }
// console.log(str);



// __________________________________________________________________________________________________________________________________________

// Sum and multiplication of Array


// var str=0;
// var str1=1;
// var a=[1,6,4];
// var length=0;
// while(a[length]!=undefined){
//     length++;
// }
// for(var j=0;j<length;j++){
// str+=a[j];
// str1*=a[j];
// }
// console.log(str);
// console.log(str1);



// ----------------------------------------------------------------------------------------------------------------------------------------
// sum of two Arrays by positions accordingly




// var a=[1,6,4];
// var b=[1,6,5,4];
// var lengtha=0;
// while(a[lengtha]!=undefined){
//     lengtha++;
// }
// var lengthb=0;
// while(b[lengthb]!=undefined){
//     lengthb++;
// }
// console.log(lengthb);
// if(lengtha>lengthb)
// {
//     length=lengtha;
// }
// else{
//     length=lengthb;
// }
// var newA=[];
// for(var i=0;i<length;i++){
//     if(a[i]==undefined){
//         newA[i]=0+b[i];
//     }
//     else if(b[i]==undefined){
//         newA[i]=a[i]+0;
//     }
//     else{
//         newA[i]=a[i]+b[i];
//     }
// }
// console.log(newA);


// ----------------------------------------------------------------------------------------------------------------------------


// var length=0;
// while(b[length]!=undefined){
//     length++
// }
// var c=0;

// for(var i=0;i<length;i++){
    // for(var j=1;j<length;j++){
        // if(b[i]==b[j]){
//             c++;
            
//             if(c>=1){
//                 console.log(b[i]);
//             }
//         }
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------------



// Concat two arrays

// var b=[1,6,5,4,3,6,5,2,1,3,6,5,2,1];
// var c=["-=",1,6,5,4,3,6,5,2,1,3,6,5,2,1];
// len1=b.length;
// len2=c.length;
// len=len1+len2;
// console.log(len);
// a=[]
// for(var i=0;i<len1;i++){
// a[i]=b[i];
// }
// for(var j=len1;j<len;j++){
//     a[j]=c[j-len1];
// }
// console.log(a);



// ------------------------------------------------------------------------------------------------------------------------------------------

// Primes


// function prime(n){
//     var c=0
// for(var i=1;i<=n;i++){
//     if((n%i)==0){
// c++;
//     }
// }
// if(c>2){
//     console.log("not");
// }
// else{
//     console.log("yes");
// }
// }
// prime(17);

//In a given range


// var range=20;
// var c=0;
// for(var i=1;i<=range;i++){
// for(var j=1;j<=i;j++){
//     if((i%j)==0){
//         c++;
//     }
    
// }
// if(c<2){
//     console.log(i);
// }
// else{
//     console.log("jsij");
// }
// }


// ---------------------------------------------------------------------------------------------------------------


//  var arr=[4,7,"yes",null,' ',undefined,4,84,840,87646,897234];
//  var newarray=[];

//  // length=0;
//  // while(arr[length]!=undefined){
//  //     length++;
//  // }
//  length=arr.length;
//  var j=0;
//  for(var i=0;i<length;i++){
//  if(typeof(arr[i])=='number'){
//      newarray[j]=arr[i];
//      j++;
//  }
//  }
//  console.log(newarray);


// ----------------------------------------------------------------------------------------------------------------------------------


// a="shivkumarsharma";
// c=""
// for(var i=0;i<a.length;i++){
//     if(i==0||i==length-1){
//         c+=a[i];
//     }
//     else{
//         c+=("+" +a[i]);
//     }
    
// }
// console.log(c);


// ---------------------------------------------------------------------------------------------------------------------------------------



// a="a";

// console.log(a.charCodeAt(0)-32) ;
// str=String.fromCharCode(65);
// console.log(str);


// ---------------------------------------------------------------------------------------------------------------------------------------------

// str='The Quick Brown Fox';
// var sr="";
// length=0;
// while(str[length]!=undefined){
//     length++;
// }
// console.log(length);
// for(var i=0;i<length;i++){
//     if(str[i]==" "){
//         sr+=str[i];
//         st=(str[i+1].CharCode(0)-32);
//         sr+=String.fromCharCode(st);
//         i=i+2;
//     }
// sr+=str[i];
// }
// console.log(sr);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Function Constructor Example

// function abc(fname,mname,sname,id,district){
// this.first=fname;
// this.middle=mname;
// this.last=sname;
// this.id=id;
// this.city=district;
// this.abc=function(){
//     return "full name is "+this.first+" "+this.middle+" "+this.last;
// }
// }

// var data=new abc("Shiv","kumar","Sharma",161500511,"Mathura");
// console.log(data.first);
// console.log(data.abc());
// abc.prototype.nationality="Indian";
// console.log(data.nationality);


// ----------------------------------------------------------------------------------------------------------------------------------------------------

// var start=new Object()
// start.fname="Shiv";
// start.mname="Kumar";
// start.lname="Sharma";
// start.city="Mathura";
// start.id=161500511;

// start.pause=function(college){
// return "Pause Here "+this.fname+college;
// }
// start.stop=function(){

//      console.log(college);
// }
// console.log(start.pause("GLA"));
// start.stop.call(start.pause("Gla"));

// ----------------------------------------------------------------------------------------------------------------------------------------


// function start(name){
//     return name+" this is start";
// }
// function stop(data){
//     return data+this.name;
// }
// // console.log(start("shiv"));
// // console.log(stop("Kumar"));
// console.log(stop.call(start,"Sharma"));

// ---------------------------------------------------------------------------------------------------------------------------------------

// var person1={
//     fname:"shiv",var person1={
//     fname:"shiv",
//     mname:"Kumar",
//     lname:"sharma",

// }
// var person2={
//     fullname:function(data){
//         console.log(this.fname+" "+ this.mname+ ' '+ data);
//     }
// }
// person2.fullname.call(person1,"new");

// }
// var person2={
//     fullname:function(data){
//         console.log(this.fname+" "+ this.mname+ ' '+ data);
//     }
// }
// person2.fullname.call(person1,"new");

// --------------------------------------------------------------------------------------------------------------------------------------------

// var car={
//     brands:"Maruti",
//     engine:"1000cc",
//     Fuel:"petrol",
//     type:"power window",
// }
// function car_data(seats,sunroof){
// return this.engine+" "+ this.brands+" "+ this.type+" "+ sunroof +" "+ seats;
// }
// console.log(car_data.call(car,"yes",4));


// function Product(na, pri) {
//     this.name = na;
//     this.price = pri;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
//   var data=new Food('cheese', 5)
//   console.log(data.category);



// ----------------------------------------------------------------------------------------------------------------------------------


// function brands(models,names,engine){
//     this.model=models;
//     this.name=names;
//     this.engine=engine;
//     this.new="Cars"
//     this.anotherFunction=function(){
//         return this.model;
//     }
// }
// function otherBrands(mode,na,en){
//     brands.call(this,mode,na,en);
// }
// var con=new otherBrands("Era+","Eon","1000cc");
// console.log(con.new);
// console.log(con.anotherFunction());


// var str = "I want to count the number of occurances of each char in this string";

// // A map (in JavaScript, an object) for the character=>count mappings
// var counts = {};

// // Misc vars
// var ch, index, len, count;
//  len = str.length
// // Loop through the string...
// for (index = 0; index < len; ++index) {
//     // Get this character
//     ch = str.charAt(index); // Not all engines support [] on strings

//     // Get the count for it, if we have one; we'll get `undefined` if we
//     // don't know this character yet
//     count = counts[ch];

//     // If we have one, store that count plus one; if not, store one
//     // We can rely on `count` being falsey if we haven't seen it before,
//     // because we never store falsey numbers in the `counts` object.
// //     counts[ch] = count ? count + 1 : 1;
// if(counts[ch]==count){
//     count++;
// }
// else{
//     count=1;
// }
//  }
// console.log(counts);


// function abc(a){
//        for(i in a){
//            console.log(i+":"+a[i]);
//        }
//    }
//    var a={name:"shiv", Middle_name:"Kumar", Last_name:"Sharma"};
//    abc(a);


// -----------------------------------------------------------------------------------------------------------------------------------------------

// Print using Rows

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// length=0;
// while(a[length]!=undefined){
//     length++
// }
// for(var i=0;i<length;i++){
//     length2=a[i].length;
//     console.log("Row"+" "+i);
//     for(var j=0;j<length2;j++){
//         console.log(a[i][j]);
//     }
// }



// ------------------------------------------------------------------------------------------------------------------------------------------------


// var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// length=0;
// while(arr[length]!=undefined){
//     length++;
// }
// for(var i=0; i<length;i++){
//     for(var j =0;j<length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j];// var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

//     }
// }
// console.log(arr);

//  var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//  var a=[];
//  for(var i=0;i<arr.length;i++){
// a[i]=arr[arr.length-i-1]
//  }
//  console.log(a);


// ---------------------------------------------------------------------------------------------------------------------

// arr=[0,1,2,3,4];
// length=0;
// sum=0;
// while(arr[length]!=undefined){
//     length++;
// }
// for(var i=0;i<length;i++){
//      sum+=Math.pow(arr[i],2);
// }
// console.log(sum);
// var count=0;
// str="shiv kumar sharma";
// str=str.split("");
// for(var i=0;i<str.length;i++){
//     for(var j=i+1;j<str.length;j++){
//         if(str[i]==str[j]){
//             count++;
//             str[j]='';
//            // console.log(str[j]);

//         }
        
//     }

//     console.log(str[i]+ " is "+ count);
//     count=0;
// }



// var str = "I want to count the number of occurances of each char in this string";

//  // A map (in JavaScript, an object) for the character=>count mappings
//  var counts = {};
//  // Misc vars
//  var ch, index, len, count;
//   len = str.length
//  // Loop through the string...
//  for (index = 0; index < len; ++index) {
//      // Get this character
//      ch = str.charAt(index); // Not all engines support [] on strings
//      // Get the count for it, if we have one; we'll get `undefined` if we
//      // don't know this character yet
//      count = counts[ch];
//      // If we have one, store that count plus one; if not, store one
//      // We can rely on `count` being falsey if we haven't seen it before,
//      // because we never store falsey numbers in the `counts` object.
//       counts[ch] = count ? count + 1 : 1;
//  }
//  console.log(counts); 

// ---------------------------------------------------------------------------------------------------------------------------------------------

//  function first(arr,n){
//  var length=0;
//  while(arr[length]!=undefined){
//      length++;
//  }  
//  var a=[];
//  j=0;
//  if(n>length){
//     console.log(arr);
// }
// else{
//     if(arr.length<1){
//         console.log(arr);
//     }
//     else{
//  for(var i=0; i<n;i++){
//      a[j]=arr[i];
//      j++;
//  }
//  console.log(a);
//  }
// }
//  }
//  first([7, 9, 0, -2],3);



// -----------------------------------------------------------------------------------------------------------------------------------------

// var target=50;
// numbers= [10,20,10,40,50,60,70];
// var length=0;
// while(numbers[length]!=undefined){
//     length++;
// }
// for(var i=0;i<length;i=i+2){
//     if(numbers[i]+numbers[i+1]==target){
//         var j=i+1
//         console.log(i+","+j);
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------




// print Albhabets Accordingly

// function char(start,end,pos){

//     var arr=[];

//     if(typeof(start)=="string"||typeof(end)=="string"){
//     newStart=start.charCodeAt(0);
//     newend=end.charCodeAt(0);
    
    
// if(newStart<newend){
//     var j=0;
//     for(var i=newStart;i<=newend;i=i+pos){
//         arr[j]=String.fromCharCode(i);
//         j++;
//     }
//     return arr;

//     }

//     else{
//         var j=0;
//     for(var i=newStart;i>=newend;i=i-pos){
//         arr[j]=String.fromCharCode(i);
//         j++;
//     }
//     return arr;
//     }
//     }

//     // ----------------------------------------------------------------------------------------------------



//     else{
//         newStart=start;
//         newend=end;
//     if(newStart>newend){
//         var j=0;
//     for(var i=newStart;i>=newend;i=i-pos){
//         arr[j]=i;
//         j++;
//     }
//     return arr;

//     }
//     else{
//     var j=0;
//     for(var i=newStart;i<=newend;i=i+pos){
//         arr[j]=i;
//         j++;
//     }
//     return arr;
// }
// }
// }
// console.log(char("Z","A",2));


// ==================================================================================================================================
// var array=[1,3,4,3,5,75,3,5,3,4,56,7,89];

// var array2=["ssss",3,3,2,2,3455,6566,77,76,545,4,4,3,33,45,6,6];
// var Concat=[];
// var length=0;
// var length2=0;
// while(array[length]!=undefined){
//     length++;
// }
// while(array2[length2]!=undefined){
//     length2++;
// }
// console.log(length2);
// for(var i=0;i<length;i++){
//     Concat[i]=array[i];
// }
// for(var j=length;j<length2+length;j++){
//     Concat[j]=array2[j-length];
// }
// console.log(Concat);


// var array=[1,3,4,3];
// start=0;
// finish=3;
// var temp=0;
// for(var i=start;i<finish;i++){
//     temp=array[i+1];
//     console.log(temp);
//     array[i+1]=array[i];
//     array[i+2]=temp;
// }
// console.log(array);




// var array=[2,5,2,6,10,8,9];
// for(var i=0;i<array.length;i++){
//     var count=1;
//     for(var j=i+1;j<array.length;j++){
//         if(array[i]==array[j]){
//             count++;
//         }
//         if((count%2)!=0){
//             console.log(array[i]);
//         }
//     }
    
// }



// var object={}
// str="Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bound";

// for(var i=0;i<str.length;i++){
// object[]


// var array="Write a JavaScript ";
// for(var i=0;i<array.length;i++){
//     var count=1;
//     for(var j=i+1;j<array.length;j++){
//         if(array[i]==array[j]){
//             array.replace(array[j],"");
//             count++;
//         }
//     }
//     console.log(array[i]+" Count is "+ count);
    
// }



// occurence={w:1};
// if(occurence["w"]==undefined){
//     occurence["w"]=1;
// }
// else{
//     occurence["w"]++
// }
// for("w"in occurence){
//     console.log("w"+ occurence["w"]);
// }




// ------------------------------------------------------------------------------------------------------------------------------------



// var object={};
// str="Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bound";
// for(var i=0;i<str.length;i++){
//     if(object[str[i]]==undefined){
//         object[str[i]]=1;
//     }
//     else{
//         object[str[i]]++
//     }
//     var ch=str[i];
// }
// console.log(object);
// var newCh="";
// for(ch in object){
//     if((object[ch]>=2)){
//         newCh+=ch;
        
//     }
  
// // console.log(ch+":"+object[ch])
// }
// console.log(newCh);


// --------------------------------------------------------------------------------------------------------------------

// str='newOb["c"]="Okk!"';
// object={};
// var length=0;
// while(str[length]!=undefined){
//     length++
// }
// for(var i=0;i<length;i++){
//     ch=str[i];
//     if(object[ch]==undefined){
//         object[ch]=1;
//     }
//     else{
//         object[ch]++;
//     }
// }
// console.log(object);
// var newStr="";
// for( var j in object){
//     if((object[j]%2)!=0){
//           newStr+=j
//     }
// }
// var arr=[];
// for(var k=0;k<newStr.length;k++){
//     arr[k]=newStr[k];
// }
// console.log(arr);


// ================================================================================================================================


// array=[2,3,5,54,3,4,7,4543,3,45,5,54,4,5,5,4,4,5,67,6,4,4,57,8,44,8,67,8,90,9,6,6,8,4,3,5,67,44,6,7,7,5,5];
// var len=0;
// while(array[len]!=undefined){
//     len++;
// }
// ob={}
// for(var i=0;i<len;i++){
//     Element=array[i];
//     if(ob[Element]==undefined){
//         ob[Element]=1;
//     }
//     else{
//         ob[Element]++;
//     }

// }
// var newStr="";
// for( var j in ob){
//     if((ob[j]%2)==0){
//         newStr+=j;
//     }
// }
// var newarray=[];
// for(var k=0;k<newStr.length;k++){
//     newarray[k]=newStr[k];
// }
// console.log(newarray);



// ====================================================================================================================================



// array=[2,3,5,54,3,4,7,4543,3,45,5,54,4,5,5,4,4,5,67,6,4,4,57,8,44,8,67,8,90,9,6,6,8,4,3,5,67,44,6,7,7,5,5];
// var len=0;
// while(array[len]!=undefined){
//     len++;
// }
// ob={}
// for(var i=0;i<len;i++){
//     Element=array[i];
//     if(ob[Element]==undefined){
//         ob[Element]=1;
//     }
// }
// console.log(ob);




// ==================================================================================================================================


// Remove Duplicates From Array

// var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 355555,355555, 6,6,6,6,6,6,6];
// var ob={};
// var length=0;
// while(Mynum[length]!=undefined){
//     length++;
// }
// for(var i=0;i<length;i++){
// number=Mynum[i];
// if(ob[number]==undefined){
//     ob[number]=1;
// }
// }
// var result=[];
// var r=0;
// for(var j in ob){
// result[r]=j;
// r++;
// }
// console.log(Mynum);
// console.log(result);


// ==========================================================================================================================

// Union of two arrays


// var array1=[1, 2, 3];
// var array2=[100, 2, 1, 10];
// var l1=0;
// var newarray=[];
// while(array1[l1]!==undefined){
//     l1++;
// }

// var l2=0;
// while(array2[l2]!==undefined){
//     l2++;
// }

// for(var i=0;i<l1;i++){
//     newarray[i]=array1[i]
// }
// for(var j=l1;j<l2+l1;j++){
//     newarray[j]=array2[j-l1];
// }
// console.log(newarray);

// ob={
// };
// for(var k=0;k<l1+l2;k++){
//     ele=newarray[k]
//     if(ob[ele]==undefined){
//         ob[ele]=1;
//     }
// }
// var j=0;
// array2=[];
// for(var k in ob){
//     array2[j]=k;
//     j++;
// }
// console.log(array2);



// ==========================================================================================================================================
// Sum of digits of an number

// var n=33;
// sum=0;
// while(n!=0){
// m=n%10;
// sum=sum+m;
// n=Math.floor(n/10);
// }
// console.log(sum);


// =========================================================================================================================================

// Prime No.s 

// n=243;
// count=0;
// for(var i=1;i<=n;i++){
//     if((n%i)==0){
//         count++;
//     }
// }
// if(count>2){
//     console.log("No It's not a Prime");
// }
// else{
//     console.log("Yes It's a Prime");
// }

// =============================================================================================================================


//Print Prime in a given range

// n=245;

// for(var i=1;i<=n;i++){
//     var count=0;
//     for(var j=1;j<=i;j++){
// if((i%j)==0){
//     count++;
    
// }
//     }
//     if(count<=2){

//         console.log(i)
//     }
// }


// object={};
// var a=[100, 2, 1, 10,"67",2];
// for(var i=0;i<a.length;i++){
//     var ch=a[i];
//     if(object[ch]==undefined){
//         object[ch]=1;
//     }
// }
// var b=[];
// j=0;
// for(var i in object){
//     if(object[i]!=1){
//         b[j]=object[i]
//         j++;
//     }
// }
// console.log(b);



// =============================================================================================================================================

//Palindrome No.

// function abc(n){
// var temp;
//     sum=0;
//     temp=n;
//     while(temp>0){
//         r=temp%10;
//         sum=(sum*10)+r;
//         temp=Math.floor(temp/10);   

//     }
//     if(n==sum){
//         console.log("true");
//     }
//     else{
//         console.log("False");
//     }

// }
// abc(343);


// ==============================================================================================================================================

// function pal(n){
//     for(var i=300;i<=n;i++){
//         j=i;
//         var sum=0;
//         while(j>0){
//             re=j%10;
//             sum=(sum*10)+re;
//             j=Math.floor(j/10);
//         }
//         if(sum==i){
//             console.log(i);
//         }
//     }
// }
// pal(500);

//=====================================================================================================================================

//GCD

// function twoNo(a,b){
//     var number;
//     if(a>b){
//         smaller=b;
//     }
//     else{
//         smaller=a;
//     }
//     for(var i=1;i<=smaller;i++){
//         if((a%i)==0 && (b%i)==0){
//             number=i;
//         }
//     }
//     return number;

// }
// console.log(twoNo(11,17));

// ========================================================================================================================================



// var str="this is shiv kumar sharma";
// var len=0;
// while(str[len]!=undefined){
//     len++;
// }
// var newstr="";
// for(var i=0;i<len;i++){
//     news=str.charCodeAt(str[0]);
//     console.log(news);
//     if(news>97){
//         newt=news-32;
//         newstr[0]=String.fromCharCode(newt);
//     }console.log(newstr[0]);
// }


// var news=str.charCodeAt(str[0]);
// news=news-32;
// newst=String.fromCharCode(news);
// newstr+=newst;
// for(var j=1;j<len;j++){
// newstr+=str[j];
// if(str[j+1]==" "){
//     str[j+1]=" ";
//     var newchar=str.charCodeAt(str[j+2]);
// newchar=news-32;
//  var newst=String.fromCharCode(newchar);
// newstr+=newst;
// j=j+2;
// }
// }

// console.log(newstr);



// var str="a bgahd fghjg";
// var newStr="";
// for(var i=0;i<str.length;i++){
//     newStr+=str[i];
//     if(str[i]==" "){
//         newStr+=" yes "
//         i=i+1;
//     }
    
// }
// console.log(newStr);





// ========================================================================================================================================

// var str="Write a JavaScript Function To Change The Nature Of First Element of String.";
// var newstr="";
// firstChar=str.charCodeAt(str[0]);
//     if(firstChar>=97){
//         firstChar=firstChar-32;
//     }
//     else{
//         firstChar=firstChar+32;
//     }
//     finalFirst=String.fromCharCode(firstChar);
//     newstr+=finalFirst;
// for(var i=1;i<str.length;i++){
//     newstr+=str[i];
//     if(str[i]==" "){
//         secondChar=str.charCodeAt(i+1);
//         if(secondChar>=97){
//             secondChar=secondChar-32;
//         }
//         else{
//             secondChar=secondChar+32;
//         }
//         finalSecond=String.fromCharCode(secondChar);
//         newstr+=finalSecond;
//         i=i+1;
//     }
// }
// console.log(str);
// console.log(newstr);

// ===============================================================================================================================

// var x = 10; 
// console.log(x); 
  
// function test() 
// { 
//     var x = 20; 
//     console.log(x); 
  
//     if (x > 10) { 
//         let x = 30; var str="Write a JavaScript Function To Change The Nature Of First Element of String.";
// var newstr="";
// firstChar=str.charCodeAt(str[0]);
//     if(firstChar>=97){
//         firstChar=firstChar-32;
//     }
//     else{
//         firstChar=firstChar+32;
//     }
//     finalFirst=String.fromCharCode(firstChar);
//     newstr+=finalFirst;
// for(var i=1;i<str.length;i++){
//     newstr+=str[i];
//     if(str[i]==" "){
//         secondChar=str.charCodeAt(i+1);
//         if(secondChar>=97){
//             secondChar=secondChar-32;
//         }
//         else{
//             secondChar=secondChar+32;
//         }
//         finalSecond=String.fromCharCode(secondChar);
//         newstr+=finalSecond;
//         i=i+1;
//     }
// }
// console.log(str);
// console.log(newstr);
  
// test(); 
// console.log(x);



// var x; 
// x = 10; 
  
// function test() 
// { 
//      y=50; 
//     if (y > 20) { 
//         console.log("yes");
       
//     } 
  
//     console.log(x); 
//     var y; 
// } 
  
// test();
 

// ===============================================================================================================================


// Camelize



// function Camelize(str){
// var length=0;
// var newStr="";
// while(str[length]!=undefined){
//     length++;
// }
// for(var i=0; i<length;i++){
//     newStr+=str[i];
//     if(str[i+1]==" "){
//         char=str.charCodeAt(i+2);
//         if(char>=97){
//             char=char-32;
//             newChar=String.fromCharCode(char);
//             newStr+=newChar
//             i=i+2;                         
//         }
//         else{
//             newStr+=str[i+2];
//             i=i+2;
//         }
//     }
   
// }
// return newStr;
// }
// var abc="Camelize data"
// console.log(Camelize(abc));




// ===================================================================================================================================


// Uncamelize The Data


// var string="HelloWorld";
// var bet="--";
// length=0;
// var newStr="";
// while(string[length]!=undefined){
//     length++;
// }
// for(var i=0;i<length;i++){
// newStr+=string[i];
// var charData=string.charCodeAt(i+1);
// if(charData>=65 && charData<=90){
//     charData=charData+32;
//     var newChar=String.fromCharCode(charData)
//     if(bet==""){
//     newStr+=(" "+newChar);
//     i=i+1;
//     }
//     else{
//         newStr+=(bet+newChar);
//     i=i+1;
//     }
// }
// }

// console.log(newStr);



// =========================================================================================================================================


// Insert a string in a string at givn Position

// function insert(str,string,pos){
//     if(pos==undefined){
//         pos=1;
//     }
// var newStr="";
// len=0;
// while(str[len]!=undefined){
// len++;
// }
// for(var i=0;i<len;i++){
//     if(i==pos-1){
//         newStr+=string;
//     }
//     newStr+=str[i];
    
// }
// console.log(newStr);
// }

// insert('We are doing some exercises.',"",10);


// ============================================================================================================================================



// Vowels in a given string and put that into Object to count its number


// newOb={};
// var consonents=0;
// var str="Vowels in a given string";
// var vowels="aeiou";
// var vowels=0;
// for(var i=0;i<str.length;i++){
//     if(str[i]=="e"||str[i]=="a"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//         if(newOb[str[i]]==undefined){
//             newOb[str[i]]=1;
//         }
//         else{
//             newOb[str[i]]++
//         }
//     }
    
// }
// console.log(newOb);



// =======================================================================================================================


// Fibonacci

// var range=5;
// a=0;
// b=1;
// console.log(a);
// console.log(b);
// for(var i=0;i<range;i++){
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c);

// }



// Armstrong

// var n=153;
// var temp=n;
// var sum=0;
// while(n>0){
//     remainder=n%10;
//     sum=sum+Math.pow(remainder,3);
//     n=Math.floor(n/10);
// }
// console.log(sum);
// if(sum==temp){
//     console.log("arm");
// }
// else{
//     console.log("Noo");
// }


// ==================================================================================================================================


// Armstrong
// Palindrome
// Fibonacci
// Vowels in a given string and put that into Object to count its number
//  Insert a string in a string at givn Position
//  Uncamelize The Data
//  Camelize
//  Write a JavaScript Function To Change The Nature Of First Element of String.
//  GCD
//  put Data to object and again put the keys in the arary
//  Print Prime in a given range
//  Sum of digits of an number
//  Union of two arrays
//  [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//  c+=("+" +a[i]);
//  print Albhabets Accordingly
//  sum of two Arrays by positions accordingly
//Strip a string
//Neon Number
//Truncate at last of string








// function text_Truncate(str,pos,last){
//     if(last==""||last==undefined){
//         last="...";
//     }
// newstr=""
// var pos;
// var len=0;
// while(str[len]!=undefined){
// len++;
// }
// if(pos==undefined){
//     pos=len;
// }
// for(var i=0;i<pos-last.length;i++){
//     newstr+=str[i];
// }
// for(var j=0;j<last.length;j++){
//     newstr+=last[j];
// }
// console.log(newstr);
// console.log(newstr.length);
// }
// var txt="We are doing JS string exercises.";
// text_Truncate(txt);



// ===============================================================================================================================





// Neon Number


// var n=5 ;
// var sum=0;
// var sq=Math.pow(n,2);
// while(sq>0){
//     re=sq%10;
//     sum=sum+re
//     sq=Math.floor(sq/10);
// }
// if(sum==n){
//     console.log(sum);
// }



// ============================================================================================================================


// Disarium

// var n=89;
// var sum=0;
// j=2;
// while(n!=0){
// re=n%10;
// sum=sum+Math.pow(re,j);
// n=Math.floor(n/10);
// j--;
// }
// if(sum==n){
//     console.log("Disarium");
// }


// ===============================================================================================================================

// var str="a";
// var count=-2;
// var newStr="";
// if(count==undefined||count==null||count<0){
//     console.log("Error in String or Count");
// }
// else{
// for (var i=0;i<count;i++){
// newStr+=str;
// }
// console.log(newStr);
// }



// Strip an string

// var strip="         Shiv      ";
// var newStr="";
// for(var i=0;i<strip.length;i++){
//     if(strip[i]==" "){
//        }
//     else{
//         newStr+=strip[i];
//     }
// }
// console.log(newStr);


// var string="man i need a Taxi up to ubud man i need a taxi up to ubud man i need a taxi up to ubud man i need a taxi up to ubud";
// var sub="";
// string=string.toLowerCase();
// // -----------------------------------------------------
// var len=0;
// while(sub[len]!=undefined){                                          //Length of substring
//     len++;
// }
// // ------------------------------------
// var code=0;
// for(var i=0;i<len;i++){
//     var code=code+ (sub.charCodeAt(i)-96)
// }
// // --------------------------------------
// var j=0;
// var a=[];
// a=string.split(" ");
// var length=0;
// while(a[length]!=undefined){
//     length++
// }
// ob={};
// for(var i=0;i<length;i++){
//     word=a[i];
//     if(ob[word]==undefined){
//         ob[word]=1;
//     }
//     else{
//         ob[word]++
//     }
// }

// for(var j in ob){
//     if(sub==j){
//         console.log("The occurrence of this word " + j +" is "+ob[j]+" and It's code is "+ code+"." );
//     }
    
// }

// ====================================================================================================================================





// var ob={};
// var a=["man","kumar","sssharma","aaaaaaaaa"];
// for(var i=0;i<a.length;i++){
//     var code=0;
//     var ch=a[i];
//     for(var j=0;j<ch.length;j++){
//         code=code+(ch.charCodeAt(j)-96);
//     }
//      ob[ch]=code;
      
    
// }
// var first=0;
// for(var k in ob){
   
//     if(ob[k]>first){
//         first=ob[k];
//         var data=k;
//     }
// }
// console.log(first+" code of "+data+".");




// ===============================================================================================================================








// function anagram(str,arra){
// strlen=0;
// array=[];
// arr="";
// str=str.split("").sort().join("");

// for(var i=0;i<arra.length;i++){
//     array[i]=arra[i].split("").sort().join("");
// }

// for(var j=0;j<array.length;j++){
//     if(array[j]==str){
//         if(j==array.length-1){
//             arr+=(arra[j]+".");
//         }
//         else{
//             arr+=(arra[j]+",");
//         }

//     }
// }
// console.log(arr);
// }
// anagram("reac",["acer",'race',"ayuyyutrqwwrt","care"]);




//===================================================================

// Camelize an string

// var str="Javascript exercise of shiv";
// length=0;
// while(str[length]!=undefined){
//     length++;
// }
// newStr="";
// for(var i=0;i<length;i++){
//     newStr+=str[i];
//     if(str[i+1]==" "){
//         ch=str.charCodeAt(i+2);
//         ch=ch-32;
//         newChar=String.fromCharCode(ch);
//         newStr+=newChar;
//         i=i+2
//     }
// }
// console.log(newStr);



//uncamelize

// str="helloWorld";
// len=0;
// newStr="";
// sr="";
// while(str[len]!=undefined){
//     len++
// }
// for(var i=0;i<len;i++){
// newStr+=str[i];
// ch=str.charCodeAt(i+1);
// if(ch>=65 && ch<=90){
//     newChar=ch+32;
//     newl=String.fromCharCode(newChar);
//     newStr+=(sr+newl);
//     i=i+1;
// }
// }
// console.log(newStr)



//repeat a string

// str="klijki";
// times=prompt("Enter times")
// str="";
// while(times>0){
//     str+=str;
//     times--;
// }
// console.log(str);


// =========================================================

// var array=["shiv","udit","kumar","sharma"];
// length=0;
// while(array[length]!=undefined){
//     length++;
// }
// var str="";
// var arr=[];
// var k=0;
// var newStr="";

// for(var  i=0;i<length;i++){
// str=array[i];
// for(var j=0;j<str.length;j++)
// {
//     if(j<3){
//     value=str.charCodeAt(j);
//     value=value-32;
//     letter=String.fromCharCode(value);
//     newStr+=letter;
//     }
//     else{
//         newStr+=str[j];
//     }
// }
// arr[k]=newStr;
// k++;
// newStr='';
// }
// console.log(array);
// console.log(arr);





// var str='';
// var arr="hello world jnhehwe ";
// var j=0;
// var arr2=[];
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]==" ")
//     {
//         arr2[j]=str;
//         str='';
//         j++;
//         i=i+1;
//     }
//     str+=arr[i];

  
// }
// console.log(arr2);




// var string="man i need a Taxi up to ubud man i need a taxi up to ubud man i need a taxi up to ubud man i need a taxi up to ubud";
// arr=[];
// newS="";
// j=0;
// for(var i=0;i<=string.length;i++){
//     if(string[i]==" "||i==(string.length)){
//     arr[j]=newS;
//     j++;
//       newS=""
//       i=i+1;
//     }
//     newS+=string[i];
// }
// console.log(arr);




// var arr=[1,2,3,4];
// for(var i=0;i<arr.length;i++){
//     arr[i+1]=arr[i];
//     if(i=4)
//     break;
// }
// console.log(arr);



//Calculator



// var div=document.createElement("div");
// var heading =document.createElement("h1");
// var body=document.getElementById("body");
// var text1=document.createTextNode("Simple Calculator");
// heading.setAttribute("id","head1");
// heading.appendChild(text1);
// div.appendChild(heading);
// body.appendChild(div);

// var str="shivsss";
// var char="";
// var a=[];
// var j=0;
// for(var i=0;i<str.length;i++){
//     for(var j=0;j<str.length;j++){
//         if(str[i]!=str[j]){
//             a[j]=str[i];
//              j++
//         }
        
//     }
//     }
//     console.log(a);





    // function find_unique_characters( string ) {
    //     var mapping = {};
    //     for(var i = 0; i < string.length; i++) {
    //         var letter = string[i].toString();
    //         mapping[letter] = mapping[letter] + 1 || 1;
    //     }
    //     var unique = '';
    //     for (var letter in mapping) {
    //         if (mapping[letter] === 1)
    //             unique += letter;
    //     }
    
    //     console.log(unique);
    // }

    //  find_unique_characters("shivssssss");




//     function check(arr)
// {
// 	var l=0;
// 	var arr2=[];var res='';
// 	for(var i=0;i<arr.length;i++)
// 	{
// 		var str=arr[i];
// 		for(var j=0;j<str.length;j++)
// 		{
// 			for(var k=j+1;k<str.length;k++)
// 			{
// 				if(str[j]==str[k])
// 				{
// 					str=str.replace(str[k],"");
// 					//console.log(str);
// 				}
// 			}
// 		}
// 		console.log(str);
// 	}
// 	//console.log(arr2);
// }
// check(["kishaniaan","kumar","maharana"]);



// var array=[1,2,3,4,5,6,7];
// n=array.length;
// k=3;
// while(k>0){
// 	var temp=array[n-1];
// 	for(var i=n-1;i>0;i--){
// 		array[i]=array[i-1];
// 	}
// 	array[0]=temp;
// 	k--;
// }
// for(var j=0;j<n;j++){
// 	console.log(array[i]);
// }



// var array=[1,5,3,2];
// var newArray=[];
// d=0;
// for(var i=0;i<array.length;i++){
// 	temp=array[i]+array[i+1];
// 	for(var j=0;j<array.length;j++){
// 		if(array[j]==temp){
// 		d++;
// 		}
// 	}
	
// }
// console.log(array);
// console.log(d);



// function triplet(arr)
// {
// // console.log(typeof(arr[0]));
// var res;
// var arr2=[];
// var j=0;
// var count=0;
// for(var i=0;i<arr.length;i++)
// {
// for(var k=i+1;k<arr.length;k++)
// {
// arr2[j]=arr[i]+arr[k];
// j++;
// }
// }
// console.log(arr2);

// for(var i=0;i<arr2.length;i++)
// {
// for(var j=0;j<arr.length;j++)
// {
// if(arr[j]==arr2[i])
// {
// count++;
// }
// }
// }
// console.log(count);
// }
// triplet([1,5,3,2]);




// var array=[1,5,3,2,8,8];
// d=0;
// for(var i=0;i<array.length;i++){
// 	for(var j=i+1;j<array.length;j++){
// 		temp=array[i]+array[j];
// 		for(var k=0;k<array.length;k++){
// 			if(temp==array[k]){
// 			   d++;
			   
// 			}
			
// 		}

// 	}
// }
// console.log(d);



// function remove_Duplicates(array){
// ob={};
// len=0;
// result=[];
// c=0;
// str="";
// string="";
// while(array[len]!=undefined){
// len++;
// }
// for(var i=0; i<len;i++){
// 	str=array[i];
// 	for(var j=0;j<str.length;j++){
// 		ele=str[j];
// 		if(ob[ele]==undefined){
// 			ob[ele]=1;
// 		}
		
// 	}
// 	for(var k in ob){
// 	string+=k;
// 	}
// 	result[c]=string;
//      c++;
// 	ob={};
// 	string="";
// }
// console.log(result);
// }
// var array=["shivsss","kummmmaaaarrrr","ssssssharrrrmmmmmmmmaaaaaaa"];
// remove_Duplicates(array);



// var char="kishan maharana";
// ob={};
// for(var i=0;i<char.length;i++){
// str=char[i];
// if(ob[str]==undefined){
// 	ob[str]=1;
// }
// else{
// 	ob[str]++;
// }
// }
// console.log(ob);


// str="shiv";
// reverse="";
// for(var i=0;i<str.length;i++){
// 	reverse+=str[str.length-i-1];
// }
// console.log(reverse);




// var nums=[1,2,3,4,7,3,6];
// var array=[];
// var newArray=[]
// d=0;
// for(var i=0;i<4;i++){
// array[i]=nums[i];
// }
// for(var j=1;j<nums.length;j++){
	
// 	if(j<4){
// 		newArray[j]=array[d]
// 		d++;
// 	}
	
	
// }

// console.log(newArray);











// let i=0;
// let k=1;
// while(i<k)
// {
// 	nums.unshift(nums.splice(-1));
// 	i++;
// }
// console.log(nums);





// var arr=[1,2,3,4,5,6,7];
// var temp;
// var time=3;
// while(time--)
// {
// 	temp=arr[arr.length-1];
// 	for(var i=0;i<arr.length;i++)
// 	{
// 		arr[arr.length-1-i]=arr[arr.length-2-i];
// 	}
// 	arr[0]=temp;
	
// }

// console.log(arr);





// var array=[1,2,3,4,5,6,7,8,9];
// var tmp;
// var times=1;
// var position=4;
// while(times--){
// 	temp=array[position-1]
// for(var i=0;i<position;i++){
// array[position-i-1]=array[position-i-2]
// }
// array[0]=temp;
// }
// console.log(array);





// var array=[1,2,3,4,5,6,7,8,9];
// pos=6;
// times=2;
// while(times--){
// 	temp=array[pos-1];
// 	for(var i=0;i<pos;i++){
// 		array[pos-i-1]=array[pos-i-2]
// 	}
// 	array[0]=temp;
// }
// console.log(array);




// ==========================================================================




// callBack

// function main(){
//     console.log("this is main");
// }
// function submain(callback){
// callback();
// }

// submain(main);




// function prime(n){
//     c=0;
//     for(var i=1;i<=n;i++){
//         if((n%i)==0){
//             c++;
//         }
//     }
//     if(c==2){
//         console.log('prime');
//     }
//     else{
//         console.log("Not");
//     }

// }

// function main(shiv){
//     shiv();
// }

// main(prime);




// function bubbleSort(array){
//     for(var i=0;i<array.length;i++){
//         for(var j=0;j<(array.length-1-1);j++){
//             if(array[j]>array[j+1]){
//                 temp=array[j];
//                 array[j]=array[j+1];
//                 array[j+1]=temp;
//             }
//         }
//     }
//     console.log(array);
// }

// var array=[1,7,5,56,4,67,5,6,7,4,67];
// // bubbleSort(array);

// function main(shiv){
//     shiv(array);
// }

// main(bubbleSort);



// name="shiv";
// function data(){
    
// }
// data();




// ob={};
// var make=new Object();
// make.name="Shiv";
// make.m_name="Kumar";
// make.s_name="Sharma";
// make.sk="shvv"
// make.func=function(){
//     return ("the full name is "+ this.name+this.m_name+this.s_name+this.sk);
// }

// console.log(make);
// for(k in make){
// if(ob[k]==undefined){
//     ob[k]=1;
// }

// }
// console.log(ob);




//  function data(name,m_name,s_name) {
//      this.n=name;
//      this.m=m_name;
//      this.l=s_name;
//      this.another=function(){
//          return this.n;
//      }
//  }
//  var Dta=new data("Shiv","Kumar","Sharma");
//  console.log(Dta.m);
//  console.log(Dta.another());


// function name(){
//      console.log("shiv");
// }
// function main(callBack){
//     callBack()
// }

// main(name);



// var array=["shiv","udit","sharma","nayyar"];
// length=0;
// while(array[length]!=undefined){
//     length++;
// }
// str="";
// sr="";
// arr=[];
// point=0;
// for(var i=0;i<length;i++){
//     str=array[i];

// for(var k=0;k<str.length;k++){
//     // for(var j=0;j<3;j++){
//     //     char=str.charCodeAt(j);
//     //             char=char-32;
//     //             sr+=String.fromCharCode(char);
//     //         }
//         if(k<3){
//             char=str.charCodeAt(k);
//                char=char-32;
//                 sr+=String.fromCharCode(char);
//         }
//         else{
//             sr+=str[k]
//         }
//     }
//     arr[point]=sr;
//     point++;
//     sr="";


// }
// console.log(arr);




// function power(n){
// sum=0;

// while(n>0){
//     re=n%10;
//     nre=Math.pow(re,3);
//     sum=sum+nre;
//     n=Math.floor(n/10);
// }
// console.log(sum);
// }

// power(198389990);




// function arrayDiff(a, b) {
// var c=[];
// p=0;
// final=[];
// f=0;

// if(a.length==0){
//     return a;
// } 


// else if(b.length==0){
//     return a;
// }

// else{
// for(var i=0;i<a.length;i++){
//     c[i]=a[i];
// }
// for( var j=a.length; j<(a.length+b.length);j++)
// {
// c[j]=b[p];
// p++;
// }
// ob={};
// for(var k=0;k<c.length;k++){
//     ele=c[k]
//     if(ob[ele]==undefined){
//         ob[ele]=1;
//     }
//     else{

//         ob[ele]++;
//     }
// }

// for(n in ob){
//     if(ob[n]==1){
//         final[f]=Number(n);
//         f++;
//     }
// }
// }
// return final;
// }
// console.log( arrayDiff([1,2,2], [1]));

// var c=[];
// p=0;
// for( i in a){
//     for(var j=0;j<b.length;j++){
//         if(i==b[j]){
           
//         }
//         else{
//             c[p]=i;
//            p++;
//         }

//     }

//     }
// console.log(c);




// var a=[1,2,3];
// var b=[3,2];
// var c=[];
// var d=[];
// q=0;
// p=0;
// for(var i=0;i<a.length;i++){
//     for(var j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             a=a.pop();
//             break;
//         }
//         else{
//             d[q]=a[i];
//             q++;

//         }

//     }
// }
// console.log(c);
// console.log(d);

// tribonacci

// function triconacci(signature,n){
// a=signature[0];
// b=signature[1];
// c=signature[2];
// t=signature.length;

// var newArray=[];
// for(var i=0;i<t;i++){
//     newArray[i]=signature[i];
// }
// for(var i=1;i<n;i++){
//     d=a+b+c;
//     a=b;
//     b=c;
//     c=d;
//     if(i<3){
//         newArray[i]=signature[i];
//     }
//     else{
//         newArray[i]=c;
//     }

// }
//  console.log(newArray);
// }
// triconacci([1,1,1],0)




// function tribonacci(signature,n){
    //your code here
    
//     a=signature[0];
//   b=signature[1];
//   c=signature[2];
//   newArray=[];
//   t=signature.length;
//   if(n==0){
//       return newArray;
//   }
//   if(n==1){
//       newArray[0]=signature[0];
//     return newArray;
// }
// if(n==2){
//     newArray[1]=signature[1];
//   return newArray;
// }
// else{
//   for(var i=t;i<n;i++){
//       d=a+b+c;
//       a=b;
//       b=c;
//       c=d;
//       signature[t]=c;
//       t++;
//   }
//    return (signature);
//   }
// }
//   console.log(tribonacci([1,1,1],0));






// while(n>0){
//     re=n%10;
//     pro=pro*re;
//     n=Math.floor(n/10);
//     if(pro<10){
//         console.log(pro);
//     }
//     else{

//     }
// }





// arr1 = a;
// arr2 = b;
// for(i=0;i<arr1.length;i++){
    
//     for(j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//            arr1.splice(i,1);
//         }
//     }

// }

//     return arr1;



// a=-1;
// b=2;
// sum=0;
// for(var i=a;i<=b;i++){
// sum=sum+i;
// }
// console.log(sum);

// 81+1+1+81   = 164
// sum=0;
// num=9119;
// let str = '';
// while(num>0){
//     re=num%10;
//     sq=Math.pow(re,2);
//     // console.log(sum);
//     sum=sum*100 + sq;
//     str=str + sq;
//     num=Math.floor(num/10);
//     console.log(str);
   
// }




// str="";
// while(num>0){
//     re=num%10;
//     sq=Math.pow(re,2);
//     str+=sq;
//     num=Math.floor(num/10);
// }
// return Number(str);


// num=""+9119;
// str='';
// for(var i=0;i<num.length;i++){
// digit=num[i];
// digit=Number(digit);
// digit=Math.pow(digit,2);
// str+=digit;
// }
// return Number(str);



// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...


// var n=2;
// d=n-1;
// for(var i=(2*n+1);i<2*n+1;i++){4

// }

// s='';
// c="";
// c=a+b;
// ob={};
// for(var i=0;i<c.length;i++){
// cha=c[i];
// if(ob[cha]==undefined){
//     ob[cha]=1;
// }
// else{
//     ob[cha]++;
// }
// }
// for(x in ob){
    
//         s+=x;
    
// }
// s=s.split("");
// s=s.sort();
// c="";
// for(var k=0;k<s.length;k++){
// c+=s[k];
// }
// return c;


// if(a=="1"||a==""){
//     return a;
// }
// else{
// str="";
// for(var i=0;i<a.length;i++){
// if(i<a.length-4){
//     str+="#";
// }
// else{
//     str+=a[i];
// }
// }
// return str;
// }





// a=1;b=2;c=2;
// if((a+b>c)&&(b+c>a)&&(c+a>b)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// var a='Pig latin is cool';
// given="ay";
// str="";
// arr=[];
// p=0;
// for(var i=0;i<a.length;i++){
//     str+=a[i];
    
// if(a[i+1]==" "||i==a.length-1){
//     arr[p]=str;
//     p++;
//     i++;
//     str='';
// }
// newStr="";
// string="";
// }
// for(var j=0;j<arr.length;j++){
// newStr=arr[j];
// for(var n=1;n<newStr.length;n++){
//     string+=newStr[n];
// }
// string+=newStr[0]+given+" ";
// }
// console.log(string);



// array=names;
// str=[];
// s=0;
// string='';
// if(array.length==0){
//     return ("''");
// }
// for(var i=0;i<array.length;i++){
//     for(k in array[i]){
//         str[s]=array[i][k];
//         s++;
//     }
// }
// for(var k=0;k<str.length;k++){

//     if(str.length==1){
//         string+=str[k];
//     }
    
//     else if(k==str.length-1){
//         string+=" & "+str[k];
//     }
//     else{
        
//         if(k==str.length-2){
//             string+=str[k];
//         }
//         else{string+=str[k]+", ";}
        
//         }
    
// }
// if(str.length>2){
//     return (string);
// }
// else if(str.length==2){
//     return (string);
// }
// else if(str.length==1){
//     return (string);
// }


// var str="man i need a taxi up to ubud";
// array=[];
// ob={};
// a=0;
// string="";
// for(var i=0;i<str.length;i++){
// string+=str[i];
// if(str[i+1]==" "||i==str.length-1){
// array[a]=string;
// a++;
// i=i+1;
// string='';
// }
// }

// strr='';
// for(var j=0;j<array.length;j++){
// strr=array[j];
// sum=0;
// for(var k=0;k<strr.length;k++){
//     char=strr.charCodeAt(k);
//     ch=char-96;
//     sum=sum+ch;
//     ob[strr]=sum;
// }
// }
// first=0;
// second=0;
// for(key in ob){
// element=ob[key];
// if(element>first){
//     data=key;
//     first=element;
// }
// }
// return data;


// var num=72;
// num=''+num;
// str='';
// for(var i=0;i<num.length;i++){
//     if(num[i]!='0'){
//     str+=num[i];
//     for(var k=0;k<num.length-i-1;k++){
//         str+='0';
//     }
//     str+=' + ';
// }
// }
// newStr=str.substring(0,str.length-2);
// return newStr;

// var str='the-Stealth-Warrior';
// var string='';
// for(var i=0;i<str.length;i++){
//     string+=str[i];
//     if(str[i+1]=="-"||str[i+1]=="_"){
//         char=str.charCodeAt(i+2);
//         if(char>=97){
//         char=char-32;
//         char=String.fromCharCode(char);
//         string+=char;
//         i=i+2;
//     }
//     else{
//         string+=str[i+2];
//         i=i+2;
//     }
        
//     }
// }
// console.log(string);


// var str='the_stealth_warrior';
// if(str==''){
//     return '';
// }
// else{
// for(var i=0;i<str.length;i++){
//     if(str[i]=="-" || str[i]=="_"){
//         str=str.split(str[i]);
//     }
// }
// strr='';
// string='';
// string=str[0];
// for(var j=1;j<str.length;j++){
//     strr=str[j];
// for(var k=0;k<strr.length;k++){
//     if(k==0){
//     char=strr.charCodeAt(k);
//     if(char>97){
//         char=char-32;
//         char=String.fromCharCode(char);
//         string+=char;
//         k++;
//     }
    
// }
// string+=strr[k];
// }
// }
// return string;
// }








// var string;
// strrr="The sunset sets at twelve o' clock."
// for(var j=0;j<strrr.length;j++){
//     string+=strrr[j];
// }
// str='';
// for(var i=0;i<string.length;i++){
//     char=string.charCodeAt(i);
//     if(i==string.length-1){
//         str+=char;
//     }
//     if(char>=65 && char<=90){
//         char=char-64
// str+=char+" ";
// }
// if(char>=90 && char<=125){
//     char=char-96;
//     str+=char+' ';
// }
// }
// str=str.substring(0,str.length-3);
// console.log(str);



// strrr="The sunset sets at twelve o' clock."
// var string='';  
// str='';
// for(var i=0;i<strrr.length;i++){
//     char=strrr.charCodeAt(i);
//     if(char>=65 && char<=90){
//                 char=char-64
//         str+=' '+char;
//         }
//         else if(char>=90 && char<=125){
//                 char=char-96;
//                 str+=' '+char;
//             }
// }
// for(var j=1;j<str.length;j++){
//     string+=str[j];
// }
// return string;


// var array=[0,1];
// resulty=[];
// res=0;
// counter=2;
// a=array[0];
// b=array[1];
// for(var i=0;i<200;i++){
//     c=a+b;
//     a=b;
//     b=c;
//     array[counter]=c;
//     counter++;
// }
// for(var j=0;j<array.length;j++){
// prod=array[j]*array[j+1];

// if(prod==pro){
//     resulty[0]=array[j];
//     resulty[1]=array[j+1];
//     resulty[2]=true;
//     break;
// }
// else if(prod>pro){

//     resulty[0]=array[j];
//     resulty[1]=array[j+1];
//     resulty[2]=false;
//     break;

// }
// }
// return resulty;



// array=['a','b','f'];
// str='';
// for(var j=0;j<array.length;j++){
//     str+=array[j];
// }
// console.log(str);
// result='';
// for(var i=0;i<str.length-1;i++){
//     if(i!=str.length-1){
//     char=str.charCodeAt(i);
//     char2=str.charCodeAt(i+1);
//     console.log(char2);
//     if(char+1!=char2){
//         letter=String.fromCharCode(char+1);
// result=letter;

//     }
// }
// }
// return result;



// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']


// var array=['crazer', 'carer', 'racar', 'caers', 'racer'];
// // anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// newArray=[];
// string='';
// comp=[];
// result=[];
// r=0;
// s=0;
// var str='racer';
// for(var i=0;i<array.length;i++){
// string=array[i];
// sub =[];
//     for(var j=0;j<string.length;j++){
//         sub[j]=string[j];
//     }    
//     sub=sub.sort();
//     newArray[s]=sub;
//     s++;
// }

// for(var k=0;k<str.length;k++){
// comp[k]=str[k];
// }
// comp=comp.sort();
// for(var n=0;n<newArray.length;n++){
//     if(JSON.stringify(newArray[n])==JSON.stringify(comp)){
//         result[r]=array[n];
//         r++;
//     }
// }
// console.log(result);



// Ques 2


// function separate(numberX,dataX){
//  var newArray=[];
//  concat=[];
//  d=0;
//  c=0;
//  ob={};
//  length1=0;
//  while(numberX[length1]!=undefined){
//  	length1++;        //length of array numberX
//  }
//  length2=0;
//  while(dataX[length2]!=undefined){
//  	length2++;          // length of array dataX
//  }
//  for(var i=0;i<length1;i++){
//  	newArray[i]=numberX[i]
//  }
//  for(var j=length1;j<length1+length2;j++){
//  newArray[j]=dataX[c];
//  c++;
//  }
//  console.log(newArray);    // concat two array
//  arrlen=length1+length2;
//  for(var k=0;k<arrlen;k++){
//  	num=newArray[k];
//  	if(ob[num]==undefined){
//  		ob[num]=1;                 //remove duplicates by object
//  	}
//  }
//  console.log(ob);



// // // // // ---------------------------------------------------------
// // // // // concat Array without duplicates 

//  for(var y in ob){
//  	concat[d]=y;
//  	d++;
//  }
//  console.log(concat);



// // // // // ---------------------------------------------------------------

// // // // // Prime and nonPrime array in non dupicate array


//  primearray=[];
//  p=0;
//  nonPrime=[];
//  r=0;
//  for( var z in ob){
//  	count=0;
//  	for(var n=1;n<=z;n++){
//  if((z%n)==0){
//  	count++;
//  }
//  	}
//  	if(count==2){
//  		primearray[p]=z;
//  		p++;
//  	}
//  	else{
//  nonPrime[r]=z;
//  r++;
//  	}
//  }
//  console.log(primearray);   //prime
//  console.log(nonPrime);     //nonprime

// }
// var numberX = [2,3,56,34,83,7,5,6,9];
//  var dataX = [4,56,3,4,78,94,7,5,6];
//  separate(numberX,dataX);




// function fibonacci(times){
    //   var a=0;
    //   var b=1;
    //   var c;
    //   ob={};     //object
    //   for(var i=1;i<=times;i++){
    //   c=a+b;
    //   a=b;
    //   b=c;
    //   ob[i]=c;
    //   }
    //   console.log(ob);
    //   }
    //   fibonacci(10);



    // function bubbleSort(array){
// 	length=0;
// 	while(array[length]!=undefined){     //Find length of the array
// 		length++
// 	}
// for(var i=0;i<length;i++){
// 	for(var j=0;j<(length-i-1);j++){
// 		if(array[j]>array[j+1]){    
// 		temp=array[j];
// 		array[j]=array[j+1];      
// 		array[j+1]=temp;
// 	}
// }
// }
// console.log(array);
// }
// bubbleSort([4,96,34,5,65,203,87,345]);




//  function solve(data$){
//  greaterThanFour=[];
//  c=0;
//  sum=0;
//    length=0;
//    while(data$[length]!=undefined){   //Length of given array
//  	  length++;
//    }

//    for(var i=0;i<length;i++){
//  	  if(data$[i]>4){
//  		  greaterThanFour[c]=data$[i];   //assign to array , the numbers greater than 4
//  		  c++;
//  	  }
//    }
//    for(var k=0;k<length;k++){
//  	  sum=sum+data$[k];
//    }
//    body=document.getElementById("body");
//    pTag=document.createElement("p");
//    pTag2=document.createElement("p");
//    body.appendChild(pTag);
//    body.appendChild(pTag2);
//    pTag.setAttribute("id","para");
//    pTag2.setAttribute("id","para2");
//    document.getElementById("para").innerHTML+="The values greater than 4 in given array is "+greaterThanFour +".";
//    document.getElementById("para2").innerHTML="The sum of all values of given arrays is "+sum+ ".";
//  }
//  var data$ = [3,47,8,9,345,907,5,5,8,4,345];
//  solve(data$);



// function fact(n){
//     if(n>=0){
//     return n*fact(n-1);
// }
// }
// console.log(fact(4));

// str='';
// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//  n= x * factorial(x-1);
//  console.log(n);
//  n=""+n;
//  for(i=n.length-1;i>=0;i--){
//      if(n[i]==0){
//        str+="0";
//      }
//      else{
//          break;
//      }
//  }
//  console.log(str);
         
// }
// factorial(5);



// var result=(function(a,b){
//     return a+b;
// })(5,4);
// console.log(result);
// var fact=(function(n){
//     if(n==0){
//         return 1;
//     }
//     n*fact(n-1);
// }) 


// function solve(data$){
//     greaterThanFour=[];
//     c=0;
//     sum=0;
//       length=0;
//       while(data$[length]!=undefined){   //Length of given array
//           length++;
//       }
   
//       for(var i=0;i<length;i++){
//           if(data$[i]>4){
//               greaterThanFour[c]=data$[i];   //assign to array , the numbers greater than 4
//               c++;
//           }
//       }
//       for(var k=0;k<length;k++){
//           sum=sum+data$[k];
//       }
//       body=document.getElementById("body");
//       pTag=document.createElement("p");
//       pTag2=document.createElement("p");
//       body.appendChild(pTag);
//       body.appendChild(pTag2);
//       pTag.setAttribute("id","para");
//       pTag2.setAttribute("id","para2");
//       document.getElementById("para").innerHTML+="The values greater than 4 in given array is "+greaterThanFour +".";
//       document.getElementById("para2").innerHTML="The sum of all values of given arrays is "+sum+ ".";
//     }
//     var data$ = [3,47,8,9,345,907,5,5,8,4,345];
//     solve(data$);
   


// var str="foobar000000003";
// string='';
// string2='';
// for(var i=0;i<str.length;i++){
//     char=str.charCodeAt(i);
//     if(char>48 && char<=57){
//         string2+=str[i];
//     }
//     else{
//         string+=str[i];
//     }
// }
// console.log(string);
// string2=Number(string2);
// strr=string2;
// strr=''+strr;
// string2=1+string2;
// string2=''+string2;
// final='';
// if(strr.length+1==string2.length){
//     for(var k=0;k<string.length-1;k++){
//        final+=string[k];
//     }
//     final=final+string2;
// console.log(final);
// }
// else{
//     final=strr+string2;
//     console.log(final);
// }


// str=")()()()(" ;
// a=[];
// c=0;
// ob={};
// if(str)
// for(var i=0;i<str.length;i++){
// letter=str[i];
// if(ob[letter]==undefined){
//     ob[letter]=1;
// }
// else{
//     ob[letter]++
// }
// }
// for(key in ob){
// a[c]=Number(ob[key]);
// c++;
// }

// if(a.length==1){
//     console.log(false);
// }
// else{
// if(a[0]==a[1]){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// }


// var num=513;
// string=""+num;
// length=0;
// str='';
// while(string[length]!=undefined){
//     length++;
// }
// if((string[length-1]=="1") || length==1){
//     console.log("-1");
// }
// else{
// for(var i=0;i<length;i++){
    
//     if(string[i]=="1"){
//         str+=string[i+1];
//         str+=string[i];
//         i=i+1;
//     }
//     else{
//         str+=string[i];
//     }
// }
// newNum=Number(str);
// if(newNum>num){
//     console.log(newNum);
// }
// }



// 'rkqodlw', 'world'

// str1='rkqodlw';
// str2='world';
// array1=[];
// array2=[];
// a=0;
// b=0;
// for(var i=0;i<str1.length;i++){
// array1[a]=str1[i];
// a++;
// }
// for(var i=0;i<str2.length;i++){
//     array2[b]=str2[i];
//     b++;
// }
// for(var j=0;j<array1.length;j++){
//     for(var k=0;k<array1.length-j-1;k++){
//         if(array1[k]>array1[k+1]){
//             temp=array1[k+1];
//             array1[k+1]=array1[k];
//             array1[k]=temp;
//         }
//     }
// }


// for(var j=0;j<array2.length;j++){
//     for(var k=0;k<array2.length-j-1;k++){
//         if(array2[k]>array2[k+1]){
//             temp=array2[k+1];
//             array2[k+1]=array2[k];
//             array2[k]=temp;
//         }
//     }
// }

// console.log(array2);
// console.log(array1);\


// str='shiv';
// newStr='';
// array=[];
// a=0;
// ob={};
// string='shiv kumar sharma shiv shiv shiv kumarjhgfdus hbdfhjhsdf kjhfishd jsdhfjhsd jhhfjhsdf';
// for(var i=0;i<string.length;i++){
//     newStr+=string[i];
//     if(string[i+1]==" " || i==string.length-1){
// array[a]=newStr;
// a++;
// newStr='';
// i++;
//     }
// }
// for(var j=0;j<array.length;j++){
//     if(ob[array[j]]==undefined){
//         ob[array[j]]=1;
//     }
//     else{
//         ob[array[j]]++;
//     }
// }
// console.log(ob);
// for(key in ob){
//     if(key==str){
//         console.log(ob[key]);
//     }
// }
// console.log(typeof(ob));

// var num=16;
// for(var i=2;i<=10;i++){
//     for(var j=2;j<=10;j++){
//            newNum=Math.pow(i,j);
//            if(newNum==num){
//                console.log(i,j);
//            }
//     }
// }




// string='movies_and_books';
// str='';
// char=string.charCodeAt(0);
// if(char>=97){
//     char=char-32;
//     char=String.fromCharCode(char);
//     str+=char;
// }
// for(var i=1;i<string.length;i++){
// str+=string[i];
// if(string[i+1]=="_"){
//     ch=string.charCodeAt(i+2);
//     ch=ch-32;
//     ch=String.fromCharCode(ch);
//     str+=ch;
//     i=i+2;
// }
// }
// console.log(str);


// var array=["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0];
// arr=[];
// a=0;
// c=0;
// for(var i=0;i<array.length;i++){
    
//     if(array[i]==0){
//         c++;
//         continue;
//     }
//     arr[a]=array[i];
//     a++;
// }
// console.log(c);
// console.log(arr.length);
// len=arr.length;
// for(var j=len;j<len+c;j++){
//     arr[j]=0;
// }
// console.log(arr);



// function verify(str){
//     if(str.length==0){
//         return false;
//     }
// for(var i=0;i<str.length;i++){
//     char=str.charCodeAt(i);
//     if(char==32){
//         return false;
//     }
//     if(char==95){
//         return false;
//     }
// }
// return true;
// }
// console.log(verify("LntjTZ!NM3b"));



// var string="http://www.github.com/carbonfive/raygun";
// str='';
// another_str='';
// for(var i=0;i<string.length;i++){
// if(string[i]=='/'){
//     str+=string[]

// }
// another_str+=string[i];

// }



// var string='Codewars';
// str='';
// shift=5;
// res='';
// for(var i=0;i<string.length;i++){

//     char=string.charCodeAt(i);
//     if(char>=90){
//         char=char-32;
//         char=String.fromCharCode(char);
//         str+=char;
//     }
//     else{


//         str+=string[i];
//     }
// }
// for(var j=0;j<str.length;j++){
//     character=str.charCodeAt(j);
//     character=character+shift;
//     character=String.fromCharCode(character);
//     res+=character
// }
// console.log(res);


// object1={
//     name:"shiv",
//     m_name:'kumar',
//     s_name:'sharma'
// }

// object2={
//     data:function() {
//         return this.name+this.m_name+this.s_name;
//     }
// }
// c=object2.data.call(object1);
// console.log(c);


// function sum(a,b){
//     console.log(a+b);
// }

// function reuslt(sst){
//     sst(2,3);
// }

// reuslt(sum);


// function fibonacci(n){
// a=0;b=1;
// ob={};
//     for(var i=1;i<=n;i++){
// c=a+b;
// a=b;
// b=c;
// ob[i]=c;
//     }
//     console.log(ob);
// }
//  function rock(rocked){
//      rocked(10);
//  }
//  function last(nnn){
//      nnn(fibonacci);
//  }
//  last(rock);


// closures

// Object1={ name:'abcdefg'
// ,2:'shiv',
// 3:'kumar'
// }
// Object2={
//     another:function sum(a,b){
//         return this.name + a + b;
//     }
// }

// console.log(Object2.another.apply(Object1,[' a',' b']));


// var pro=new Promise(function(resolve,reject){
// a=false;
// if(a){
//     resolve("its true");
// }
// else{
//     reject('its false');
// }
// })

// pro.then(function(fromResolve){
//     console.log('this is res0lve and '+fromResolve)
// }).catch(function(fromReject){
// console.log('this is not resolve and '+ fromReject);
// })


// var add=function(a,b){
//     return a+b;
// }
// var multiply=function(a,b){
//     return a*b;
// }
//  function main(a,b,callback){
//      return callback(a,b);
//  }
//  console.log(main(10,20,multiply));

// str='222';
// str1=[222];
// if(str==str1){
//     console.log("true");
// }
// else{
//     console.log('false');
// }



// for(var i=0;i<input.length;i++){
// if(input[i]!=false){
// output[out]=input[i];
// out++;}
// else {
// mid[m]=input[i];
// m++;
// }
// }
// len=output.length
// for(var j=len;j<len+mid.length;j++){
//     output[j]=mid[a];
//     a++;
// }
// console.log(output);





// Expected: '[1,null,"5","2",8,6,null,false,"0",0]', instead got: '[1,null,"5","2",8,6,null,"0",0,false]'




// var input = [7, 2, 3, false, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
// output=[];
// mid=[];
// m=0;
// out=0;
// a=0;
// str='';
// for(var i=0;i<input.length;i++){
//     str+=input[i];
// }
// for(var j=0;j<str.length;j++){
//     char=str.charCodeAt(j);
//     if(char!==48){
//         char=String.fromCharCode(char);
//        output[out]=Number(char);
//        out++;
//     }
//     else{
//           char=String.fromCharCode(char);
//           mid[m]=Number(char);
//           m++;
//     }
// }
// len=output.length
// for(var j=len;j<len+mid.length;j++){
//     output[j]=mid[a];
//     a++;
// }
// console.log(output);

// str='';
// output=[];
// out=0;
// var input = [7, 2, 3, false, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
// for(var i=0;i<input.length;i++){
//         input[i]=''+input[i];
//         str=input[i];
//         console.log(str);
//         char=str.charCodeAt(0);
//         console.log(char);
//         if(char>=49 &&  char<=57){
//             char=String.fromCharCode(char);
//                   output[out]=Number(char);
//                    out++;
//         }
//     }
// console.log(output);



// foo099 -> foo100

// var string='foo099';
// str='';
// strr='';
// for(var i=0;i<string.length;i++){
//     char=string.charCodeAt(i);
//     if(char>=97 && char<=122){
//         char=String.fromCharCode(char);
//         str+=char;
//     }
//     else{
//         char=String.fromCharCode(char);
//         strr+=char;
//     }
// }
// console.log(str);
// console.log(strr);
// string1='';
// string2='';
// string3='';
// for(var j=0;j<strr.length;j++){
//     if(strr[j]==0){
//         string1+=strr[j];
//     }
//     else{
//         string2+=strr[j];
//     }
// }
// string3=Number(string2);
// string3=string3+1;
// NewStr=''+string3;
// dig=1;
// result='';
// if(NewStr.length==string2.length+dig){
//     for(var n=0;n<string1.length-dig;n++){
//       result+=string1[n];
//     }
//     return (str+result+NewStr);
// }
// else{
//     return (str+string1+NewStr);
// }




// var string="Hello there thanks for trying my Kata";
// str='';
// str[0]="#";
// for(var i=0;i<string.length;i++){
//  char=string.charCodeAt(i);
// if(char==32){
// }
// else{
//     char=String.fromCodePoint(char);
// }

// var array1=[10, 20, 10, 2];
// var array2= [10, 25, 5, -2] ;
// array3=[];
// for(var i=0;i<array1.length;i++){
//     array3[i]=array1[i]-array2[i];
// }
// sum=0;
// for(var j=0;j<array3.length;j++){
//     sum=sum+Math.pow(array3[j],2);
    
// }
// sum=sum/array3.length;
// return sum;

// c


// var array=['shiv','kumar','sharma'];
// result=[];
// r=0;
// str='';
// str2='';
// for(var i=0;i<array.length;i++){
// str=array[i];
// for( var j=0;j<str.length;j++){
// if(j<3){
//     char=str.charCodeAt(j);
//     char=char-32;
//     char=String.fromCharCode(char);
//     str2+=char;
// }
// else{
//     str2+=str[j];
// }
// }
// result[r]=str2;
// r++;
// str2='';
// }
// console.log(result);



// var m=1;
// var n=250;
// for(var i=m;i<=n;i++){
// sum=0;
// for(var j=1;j<=m;j++){
// if(m%j==0){
// sum=sum+Math.pow(j,2);
// }
// }
// sum=Math.sqrt(sum);
// if(Number.isInteger(sum)==true){
//     console.log(sum);
// }
// }
// var ar=[1,2,3,'a','b','c',[]];
// a=[];
// for(var i=0;i<ar.length;i++){

// }


// Asynchronous


// first=()=>{
//     console.log("this is first");
// }

// last=()=>{
//     console.log('this is last');
// }

// second=()=>{
//     setTimeout(()=>{
//         console.log('this is second');
//     },2000)
// }

// first();
// second();
// last();

// first=function(){
//     console.log("this is first");
// }
// second=function(){
//     setTimeout(function(){
//         console.log("this is second");
//     },2000);
// }

// third = function(){
//     console.log("This is third");
// }


// function main(){
//     first();
//     second();
//     third();
// }

// main();


// var pro=new Promise(function(resolve,reject){
// a=false;
// if(a){
//     resolve("its true");
// }
// else{
//     reject('its false');
// }
// })

// pro.then(function(fromResolve){
//     console.log('this is res0lve and '+fromResolve)
// }).catch(function(fromReject){
// console.log('this is not resolve and '+ fromReject);
// })






// const pro=new Promise(function(resolve,reject){
//     a=false;
//     if(a){
//         resolve("this is true");
//     }
//     else{
//         reject("this is rejected");
//     }
// })
// pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// .then(function(fromResolve){
//     console.log("this is true condition and "+fromResolve); 
// })

// .catch(function(fromReject){
//     console.log("this is false condition and "+fromReject);
// })



function sum(a,b){
    return a+b;
}
 function data(name,address,id){
     this.na=name;
     this.ad=address;
     this.id=id;
     this.sum=sum;
     this.func=function(a,b){
         return a+b;
     }
     this.permanent='this is permanent';
 }
 var shiv=new data('shiv','colony',161500511);
 console.log(shiv.func(4,6));
 console.log(shiv.permanent);
 data.prototype.sum;
 console.log(shiv.sum(5,7));