document.getElementById("top_right_login_btn").addEventListener('click',login_function);
function login_function(){
  var IDtext = document.getElementById("top_right_ID_input").value;
  document.getElementById("login_ul").innerHTML= IDtext;
  document.getElementById("login_ul").innerHTML+= ("<li><button id=top_right_logout_btn>Logout</button></li>");
  document.getElementById("top_right_logout_btn").addEventListener('click',logout_function);

  function logout_function(){
    document.getElementById("login_ul").innerHTML= ("<li>ID:<input type=text name=ID size=15 id=top_right_ID_input></li><li>PW:<input type=password name=PASSWORD size=15 id=top_right_pw_input></li><li><button id=top_right_login_btn>Login</button></li>");
    document.getElementById("top_right_login_btn").addEventListener('click',login_function);
  }
}
