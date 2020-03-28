function valfname()
{
  var u=document.getElementById("fname").value;
  if(u.length>1)
    document.getElementById("fnameprompt").innerHTML="accepted";
  else
      document.getElementById("fnameprompt").innerHTML="enter name";


}



function valsname()
{
  var u=document.getElementById("sname").value;
  if(u.length>1)
    document.getElementById("snameprompt").innerHTML="accepted";
  else
      document.getElementById("snameprompt").innerHTML="enter name";
}
function valemail()
{
  var u=document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(u.value.match(mailformat))

    document.getElementById("emailprompt").innerHTML="accepted";

  else

    document.getElementById("emailprompt").innerHTML="enter valid email";

}
