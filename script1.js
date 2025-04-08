document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("message").textContent = `Thanks! We'll reach out to ${email}`;
});
