 function showSection(sectionId) {
    document.getElementById("default-section").classList.add("hidden");
    document.getElementById("qa").classList.add("hidden");
    document.getElementById("moving-home").classList.add("hidden");

    if (sectionId === 'default') {
        document.getElementById("default-section").classList.remove("hidden");
    } else {
        document.getElementById(sectionId).classList.remove("hidden");
    }

    document.querySelectorAll(".nav-menu button").forEach(button => button.classList.remove("active"));

    document.querySelector(button[onclick="showSection('${sectionId}')"]).classList.add("active");
}
