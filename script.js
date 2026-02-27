function goToLogin() {
  const screen = document.getElementById("screen");

  screen.innerHTML = `
    <h1>SAHAARA</h1>
    <p>Secure Government Login</p>

    <button class="btn primary">🔐 Login with Aadhaar</button>
    <button class="btn secondary">🏛 Login with DigiLocker</button>
  `;
}

function toggleChat() {
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (input.value.trim() === "") return;

  messages.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  messages.innerHTML += `<p><b>Assistant:</b> I can help with schemes, documents, or nearby offices.</p>`;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
