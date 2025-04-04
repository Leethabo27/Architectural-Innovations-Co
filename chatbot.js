document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
    const sendButton = document.getElementById("send-btn");

    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", function () {
        chatbotContainer.classList.toggle("show");
    });

    // Function to handle user messages
    function handleUserMessage() {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        // Display user message
        appendMessage("user", userMessage);

        // Show typing indicator
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("chat-message", "bot", "typing");
        typingIndicator.innerText = "Typing...";
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Get bot response with delay
        setTimeout(() => {
            chatMessages.removeChild(typingIndicator);
            const botReply = getBotResponse(userMessage);
            appendMessage("bot", botReply);
        }, 1000);

        chatInput.value = "";
    }

    // Function to append messages
    function appendMessage(sender, message) {
        const msgElement = document.createElement("div");
        msgElement.classList.add("chat-message", sender);
        msgElement.innerText = message;
        chatMessages.appendChild(msgElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // AI bot responses
    function getBotResponse(userText) {
        userText = userText.toLowerCase();

        const responses = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! What do you need help with?",
            "leads": "We provide leads for Architects, Engineers, Surveyors, and Contractors.",
            "contact": "You can reach us at info@yourcompany.com.",
            "services": "We offer lead generation and AI-powered project matching.",
            "bye": "Goodbye! Let me know if you need help later.",
            "default": "I'm here to help! Ask me anything about our services."
        };

        for (let keyword in responses) {
            if (userText.includes(keyword)) {
                return responses[keyword];
            }
        }

        return responses["default"];
    }

    // Send message on button click or Enter key
    sendButton.addEventListener("click", handleUserMessage);
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") handleUserMessage();
    });
});

