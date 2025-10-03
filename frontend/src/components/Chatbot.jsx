import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    // Load the N8N chatbot script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.n8nchatui.com/v1/embed.js';
    script.type = 'module';
    script.defer = true;
    document.head.appendChild(script);

    // Initialize the chatbot once the script is loaded
    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          n8nChatUrl: "http://192.168.0.101:5678/webhook/ad5dff5f-0b31-46c9-a228-91bd696a2462/chat",
          theme: {
            button: {
              backgroundColor: "#f36539",
              right: "auto", // Remove right positioning
              left: 20, // Position on the left
              bottom: 20,
              size: 60,
              iconColor: "#fff",
              customIconSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
            },
            chatWindow: {
              title: "N8N Chatbot",
              welcomeMessage: "Hi! I'm your assistant. Ask me anything.",
              errorMessage: "⚠️ Couldn't reach the bot. Try again later.",
              textInput: {
                placeholder: "Type here...",
                sendButtonColor: "#f36539",
              },
              botMessage: { backgroundColor: "#f36539", textColor: "#fff" },
              userMessage: { backgroundColor: "#eee", textColor: "#000" },
            },
          },
        });
      }
    };

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

export default Chatbot;