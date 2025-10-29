async function sendMessage(event) {
  event.preventDefault();

  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = "در حال پاسخ‌دهی...";
  chatBox.appendChild(botMsg);

  const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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", // ← توکن Hugging Face خودت رو اینجا بذار
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: input.value
    })
  });

  const data = await response.json();
  botMsg.textContent = data?.generated_text || "پاسخی دریافت نشد.";
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
