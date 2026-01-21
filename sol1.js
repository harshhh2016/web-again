function saveFeedback(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const feedback = {
        name,
        email,
        message,
        time: new Date().toLocaleString()
    };
    let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
    feedbackList.push(feedback);
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    // ---- AUTO DOWNLOAD AS NOTEPAD FILE ----
    let textContent = "HeartStrings - Customer Feedback\n\n";

    feedbackList.forEach((fb, index) => {
        textContent += `Feedback ${index + 1}\n`;
        textContent += `Name: ${fb.name}\n`;
        textContent += `Email: ${fb.email}\n`;
        textContent += `Message: ${fb.message}\n`;
        textContent += `Time: ${fb.time}\n`;
        textContent += "-----------------------------\n\n";
    });

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "feedback.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    // Reset form
    event.target.reset();

    alert("Thank you! Your feedback has been saved.");
}