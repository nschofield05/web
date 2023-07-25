var logIn = 
`<div id="log-in" class="log-in-container">
<section class="log-in">
    <button onclick="toggleLogIn()" class="x-button"><img src="assets/icons/x-out.png" width="32px" height="32px"></button>
    <p style="text-align: center; color: red; font-weight: bold;">Log In Currently Unavailable</p>

    <div class="container">
    <label>Username</label>
    <input id="uname" type="text" placeholder="Enter Username" name="uname" required>
    <br/>
    <label for="psw">Password</label>
    <input id="pswrd" type="password" placeholder="Enter Password" name="psw" required>

    <button onclick="attemptLogIn()">Login</button>
  </div>
</section>
</div>`
document.body.insertAdjacentHTML("afterbegin", logIn);