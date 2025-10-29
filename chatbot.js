function sendMessage(event) {
  event.preventDefault();

  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  // پیام کاربر
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // پاسخ چت‌بات
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = generateBotResponse(input.value);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// پاسخ ساده چت‌بات
function generateBotResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes("سلام")) return "سلام! خوش اومدی 🌟";
  if (lower.includes("نمونه‌کار")) return "برای دیدن نمونه‌کارها به بخش مربوطه در سایت برو.";
  if (lower.includes("تماس")) return "می‌تونی از طریق فرم تماس یا ایمیل با من در ارتباط باشی.";
  return "متوجه نشدم، لطفاً واضح‌تر بپرس 😊";
}
