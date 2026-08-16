function openPopup() {
  document.getElementById("contact-popup").style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("contact-popup").style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";
}

function openServicePopup(id) {
  document.getElementById(id).style.display = "block";
}

function closeServicePopup(id) {
  document.getElementById(id).style.display = "none";
}

function openServicePopup(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

function closeServicePopup(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";
}

function closeAllPopups() {
  document.querySelectorAll('.service-popup').forEach(p => p.style.display = "none");
  document.getElementById("contact-popup").style.display = "none"; // also close contact
  document.getElementById("popup-overlay").style.display = "none";
}

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const section = document.getElementById(targetId);

    // Hide other sections
    document.querySelectorAll('.info-section').forEach(sec => {
      if (sec !== section) sec.style.display = 'none';
    });

    // Toggle selected section
    section.style.display = (section.style.display === 'block') ? 'none' : 'block';
  });
});
