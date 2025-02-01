function showSection(sectionId) {
    // Hide all sections
    document.getElementById("default-section").classList.add("hidden");
    document.getElementById("qa").classList.add("hidden");
    document.getElementById("moving-home").classList.add("hidden");

    if (sectionId === 'default') {
        document.getElementById("default-section").classList.remove("hidden");
    } else {
        document.getElementById(sectionId).classList.remove("hidden");
    }

    document.querySelectorAll(".nav-menu button").forEach(button => button.classList.remove("active"));

    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener("click", function() {
            const referralCode = document.querySelector(".referral-code").textContent;
            navigator.clipboard.writeText(referralCode).then(() => {
                alert("Referral code copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    }
});
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "qa.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("qa-content").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
