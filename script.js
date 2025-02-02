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

    const activeButton = document.querySelector(`.nav-menu button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Copy button functionality
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener("click", function() {
            const referralCodeElement = document.querySelector(".referral-code");
            if (referralCodeElement) {
                const referralCode = referralCodeElement.textContent;
                navigator.clipboard.writeText(referralCode).then(() => {
                    alert("Referral code copied to clipboard!");
                }).catch(err => {
                    console.error("Failed to copy text: ", err);
                });
            }
        });
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "qa.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const qaContent = document.getElementById("qa-content");
            if (qaContent) {
                qaContent.innerHTML = xhr.responseText;
            }
        }
    };
    xhr.send();
});

document.addEventListener("contextmenu", event => event.preventDefault());
