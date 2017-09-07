function validateForm()
{

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var verifiedpassword = document.getElementById('verifiedpassword').value;


    if (username == ''){
        alert('Unknown username');
    }
    else 
      if (username.length >= 20) {
        alert('Invalid username')
      }
      if (password == '')
    {
        alert('Unknown password');
    }
    else{
      if (password.length < 6 || password.length > 32) {
        alert('Invalid password')
      }
        if (verifiedpassword == ''){
            alert('Unknown verified password');
            }
        else{
          if (verifiedpassword !== password) {
            alert ('Incorrect Verified Password')
          }
          else
            alert('Done!!!!!!!!');
            return true;
        }

        
        
    }
 
    return false;
}