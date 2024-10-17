function validateName(name) {
    if (name === "") {
      document.getElementById("name_error").textContent = "Name is required";
      return false;
    }
    return true;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email_error").textContent = "Invalid email address";
      return   
   false;
    }
    return true;
  }
  
  function validatePassword(password, confirmPassword) {
    if (password === "") {
      document.getElementById("password_error").textContent = "Password is required";
      return false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirm_error").textContent = "Passwords do not match";
      return false;
    }
  
    return true;
  }
  
  function validateAge(age) {
    if (age === "") {
      document.getElementById("age_error").textContent = "Age is required";
      return false;
    }
  
    if (isNaN(age) || age < 18) {
      document.getElementById("age_error").textContent = "Age must be a number greater than or equal to 18";
      return false;
    }
  
    return true;
  }
  
  function validateTerms(terms) {
    if (!terms) {
      alert("Please agree to the terms and conditions");
      return false;
    }
    return true;
  }
  
  function displayFormData(data) {
    const summaryDiv = document.getElementById("form-summary");
    summaryDiv.innerHTML = `
      <h2>Form Summary</h2>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Age: ${data.age}</p>
      <p>Gender: ${data.gender}</p>
      <p>Country: ${data.country}</p>
    `;
  }
