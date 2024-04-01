document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'bai22.html'; 
    } else {
      document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
  });