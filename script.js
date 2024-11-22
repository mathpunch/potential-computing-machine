const iframe = document.getElementById('meta-ai-iframe');
iframe.contentWindow.postMessage(
  JSON.stringify({
    type: 'initialize',
    payload: {
      // Your Meta AI configuration (if needed)
    }
  }),
  'https://chat.meta.ai'
);

// Handle messages from Meta AI
window.addEventListener('message', (event) => {
  if (event.origin === 'https://www.meta.ai') {
    // Handle Meta AI responses (if needed)
  }
});
