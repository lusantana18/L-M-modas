function validateForm() {
	let hasError = false;
  
	// Validate name field
	let name = document.querySelector("#name").value;
	if (name === "") {
	  document.querySelector("#name-error").textContent = "Nome é obrigatório";
	  hasError = true;
	} else {
	  document.querySelector("#name-error").textContent = "";
	}
  
	// Validate email field
	let email = document.querySelector("#email").value;
	if (email === "") {
	  document.querySelector("#email-error").textContent = "E-mail é obrigatório";
	  hasError = true;
	} else if (!email.includes("@")) {
	  document.querySelector("#email-error").textContent = "E-mail inválido";
	  hasError = true;
	} else {
	  document.querySelector("#email-error").textContent = "";
	}
  
	// Validate subject field
	let subject = document.querySelector("#subject").value;
	if (subject === "") {
	  document.querySelector("#subject-error").textContent = "Assunto é obrigatório";
	  hasError = true;
	} else {
	  document.querySelector("#subject-error").textContent = "";
	}
  
	// Validate message field
	let message = document.querySelector("#message").value;
	if (message === "") {
	  document.querySelector("#message-error").textContent = "Mensagem é obrigatória";
	  hasError = true;
	} else {
	  document.querySelector("#message-error").textContent = "";
	}
  
	if (hasError) {
	  event.preventDefault();
	} else {
	  document.querySelector("#form-success").textContent = "Mensagem enviada com sucesso!";
	}
  }
  
  document.querySelector("form").addEventListener("submit", validateForm);
  


const whatsappButton = document.querySelector("#whatsapp-button");

let opacity = 1;
let direction = -0.05;

function pulse() {
  opacity += direction;
  whatsappButton.style.opacity = `${opacity}`;
  if (opacity <= 0 || opacity >= 1) {
    direction = -direction;
  }
}

setInterval(pulse, 90);
