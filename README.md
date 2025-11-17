Chat UI Project

A simple, frontend-only chat interface built with HTML, CSS, and JavaScript. Features a bubble-style layout, auto-replying bot, dark mode toggle, persistent chat history, timestamps, emoji support, and mobile responsiveness. Perfect for demos or as a starting point for more advanced chat applications.

Features

Bubble Chat Layout: Clean, speech-bubble style messages with user (right-aligned, blue) and bot (left-aligned, gray) distinctions.
Bot Auto-Reply: Intelligent bot responses based on keywords (e.g., greetings, questions) with random variations for personality. Replies include a simulated delay.
Dark Mode: Toggle between light and dark themes with smooth transitions. Button text updates dynamically.
Persistent Chat History: Messages are saved to localStorage and persist across page reloads.
Timestamps: Each message displays a timestamp (e.g., "2:34 PM") for better context.
Emoji Support: Integrated emoji picker (using emoji-picker-element library) to add emojis to messages.
Mobile Responsiveness: Optimized for small screens with adjustable layouts, touch-friendly elements, and media queries.
Animations: Fade-in animations for new messages to enhance UX.

Demo

To see the project in action:

Clone or download the repository.

Open index.html in any modern web browser.

Start chatting! Toggle dark mode, add emojis, and watch the bot respond.

Technologies Used

HTML5: Structure and layout.

CSS3: Styling, animations, and responsive design.

JavaScript (ES6+): Logic for messaging, bot replies, persistence, and interactions.

emoji-picker-element: Lightweight library for emoji selection (loaded via CDN).

Installation

Clone the repository:

git clone https://github.com/your-username/chat-ui-project.git

Navigate to the project directory:

cd chat-ui-project

Open index.html in your browser—no server required!

Usage

Sending Messages: Type in the input field and press Enter or click "Send". Your message appears as a blue bubble on the right.

Bot Interaction: The bot replies automatically based on your input (e.g., say "hello" for a greeting). Responses are varied and include delays.

Dark Mode: Click the "Toggle Dark Mode" button in the header to switch themes.

Emojis: Click the 😊 button next to the input to open the emoji picker, then select an emoji to insert.

Persistence: Your chat history saves automatically—refresh the page to see it reload.

Mobile: The UI adapts on phones/tablets for easy use.

Screenshots

(<img width="668" height="554" alt="Screenshot 2025-11-17 233400" src="https://github.com/user-attachments/assets/4164bf28-af35-43e6-b998-892f444abc02" />
)

Light Mode: Clean white background with blue user bubbles.

Dark Mode: Dark theme with adjusted colors for readability.

Contributing

Feel free to fork the repo and submit pull requests! Suggestions for new features (e.g., message editing or file uploads) are welcome. Please ensure code follows basic best practices.

License

This project is licensed under the MIT License. See LICENSE for details.
