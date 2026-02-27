function goToLogin() {
  const screen = document.getElementById("screen");

  screen.innerHTML = `
    <h1>SAHAARA</h1>
    <p>Secure Government Login</p>

    <button class="btn primary" onclick="authenticate('aadhaar')">
      🔐 Login with Aadhaar
    </button>

    <button class="btn secondary" onclick="authenticate('digilocker')">
      🏛 Login with DigiLocker
    </button>
  `;
}

function authenticate(type) {
  const screen = document.getElementById("screen");

  screen.innerHTML = `
    <h1>Authenticating...</h1>
    <p>Connecting to ${type === 'aadhaar' ? 'Aadhaar' : 'DigiLocker'} securely...</p>
  `;

  setTimeout(() => {
    screen.innerHTML = `
      <h1>Login Successful ✅</h1>
      <p>Welcome to SAHAARA Platform</p>

      <button class="btn primary" onclick="startQuestions()">
        Continue
      </button>
    `;
  }, 2000);
}

function startQuestions() {
  const screen = document.getElementById("screen");

  screen.innerHTML = `
    <h1>Who are you?</h1>

    <button class="btn secondary">Widow</button>
    <button class="btn secondary">Orphan</button>
    <button class="btn secondary">Person with Disability</button>
  `;
}

/* Chat Functions */
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
