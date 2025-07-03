document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
      const res = await fetch("/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();
      if (result.success) {
        alert("Pesan berhasil dikirim!");
        form.reset();
      } else {
        alert("Gagal mengirim pesan. Coba lagi nanti ya.");
      }
    } catch (err) {
      alert("Terjadi error saat mengirim pesan.");
      console.error(err);
    }
  });
});