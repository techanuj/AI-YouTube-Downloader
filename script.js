function simulateAI() {
  const url = document.getElementById('youtubeUrl').value.trim();
  const output = document.getElementById('aiOutput');

  if (!url) {
    output.innerText = "❗ Please enter a YouTube URL.";
    return;
  }

  output.innerText = "🔍 Analyzing video with AI...";

  setTimeout(() => {
    output.innerHTML = `
      ✅ Video analysis complete! <br>
      ⬇️ Download option coming soon. <br><br>
      🔬 AI Insights (Demo):<br>
      • Title: <em>How to Code in Python</em><br>
      • Duration: <em>12 mins</em><br>
      • AI Tip: <strong>“Best for beginners. Great explanation!”</strong>
    `;
  }, 2000);
}
