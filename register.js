

async function signup() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let customer = {email:email, username: username, password: password}
    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
      };
      try {
        let response = await fetch(getHost() + "/signup", request);
        if(response.status == 200) {  
            alert("The registration was successful!")
            location.href = "login.html";

        } else {
            console.log(`response status:${response.status}`);            
            alert("Something went wrong!");
        }
      }
      catch(error) {
        console.log(error);        
        alert("Something went wrong!");
      }    
}

async function signin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  let user = { username: username, password: password };
  let request = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  };

  try {
      let response = await fetch(getHost() + "/signin", request);
      if (response.status === 200) {
          let token = await response.text();
          // Save the token in localStorage or session storage
          localStorage.setItem("token", token);
          alert("Login successful!");
          // Redirect to a dashboard or home page
          window.location.href = "index.html";
      } else {
          alert("Incorrect username or password.");
      }
  } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred while signing in.");
  }
}