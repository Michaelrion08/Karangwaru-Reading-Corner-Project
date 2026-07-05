// ===== KONFIGURASI API =====
// Ganti dengan URL Web App Apps Script Anda
const API_URL = "https://script.google.com/macros/s/AKfycbyt5FW0anulrdOUfYu-rGXIhu2ALnp2HrGRyvkN5ZWn9m5qRfk3PR7kLpmWdskYQdSMJw/exec";

// Kirim request ke backend. Pakai text/plain supaya tidak kena CORS preflight.
async function callAPI(action, data = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...data }),
  });
  return res.json();
}

// ===== SESI LOGIN (disimpan di localStorage browser) =====
function setSession(profile) {
  localStorage.setItem("pb_session", JSON.stringify(profile));
}
function getSession() {
  const raw = localStorage.getItem("pb_session");
  return raw ? JSON.parse(raw) : null;
}
function clearSession() {
  localStorage.removeItem("pb_session");
}
function setAdminSession(profile) {
  localStorage.setItem("pb_admin_session", JSON.stringify(profile));
}
function getAdminSession() {
  const raw = localStorage.getItem("pb_admin_session");
  return raw ? JSON.parse(raw) : null;
}
function clearAdminSession() {
  localStorage.removeItem("pb_admin_session");
}

// ===== HIGHLIGHT MENU AKTIF =====
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
});
