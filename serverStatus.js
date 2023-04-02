const url = "https://www.example.com";

async function checkStatus() {
  try {
    const response = await fetch(url, { mode: "no-cors" });
    if (response.ok) {
      setStatus("Offline");
    } else {
      setStatus("Online");
    }
  } catch (error) {
    setStatus("Error 503");
  }
}

function setStatus(message) {
  const status = document.getElementById("status");
  status.innerHTML = `<p><code>${message}</code></p>`;
}

checkStatus();