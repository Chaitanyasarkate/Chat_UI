document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const emojiButton = document.getElementById('emoji-button');
    const emojiPicker = document.getElementById('emoji-picker');
    const body = document.body;

    // Bot response map for improved replies
    const botResponses = {
        hello: ['Hi there! How can I help?', 'Hello! What\'s up?', 'Hey! Nice to meet you.'],
        bye: ['Goodbye! Have a great day.', 'See you later!', 'Bye for now!'],
        how: ['I\'m doing well, thanks! How about you?', 'All good here. What\'s on your mind?'],
        default: ['That\'s interesting! Tell me more.', 'Got it. Anything else?', 'Hmm, I\'m not sure about that.']
    };

    // Function to get current timestamp
    function getTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Function to add a message to the chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerHTML = `${text}<span class="timestamp">${getTimestamp()}</span>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        saveMessages(); // Save to localStorage
    }

    // Function to save messages to localStorage
    function saveMessages() {
        const messages = Array.from(chatMessages.children).map(msg => ({
            text: msg.textContent.replace(msg.querySelector('.timestamp').textContent, '').trim(),
            sender: msg.classList.contains('user') ? 'user' : 'bot',
            timestamp: msg.querySelector('.timestamp').textContent
        }));
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Function to load messages from localStorage
    function loadMessages() {
        const saved = localStorage.getItem('chatMessages');
        if (saved) {
            const messages = JSON.parse(saved);
            messages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', msg.sender);
                messageDiv.innerHTML = `${msg.text}<span class="timestamp">${msg.timestamp}</span>`;
                chatMessages.appendChild(messageDiv);
            });
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Function to get bot reply based on keywords
    function getBotReply(userMessage) {
        const lowerMsg = userMessage.toLowerCase();
        for (const key in botResponses) {
            if (lowerMsg.includes(key)) {
                const replies = botResponses[key];
                return replies[Math.floor(Math.random() * replies.length)];
            }
        }
        return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }

    // Function to simulate bot reply
    function botReply(userMessage) {
        const reply = getBotReply(userMessage);
        setTimeout(() => {
            addMessage(reply, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay for personality
    }

    // Handle sending message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            messageInput.value = '';
            botReply(message);
        }
    }

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Toggle Light Mode';
        } else {
            darkModeToggle.textContent = 'Toggle Dark Mode';
        }
    });

    // Emoji picker toggle
    emojiButton.addEventListener('click', () => {
        emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
    });

    // Handle emoji selection
    emojiPicker.addEventListener('emoji-click', (event) => {
        messageInput.value += event.detail.unicode;
        emojiPicker.style.display = 'none';
    });

    // Event listeners for chat
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Load messages on page load
    loadMessages();
});