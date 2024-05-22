async function getCount() {
    try {
        const response = await fetch("/count");
        const data = await response.json();
        document.getElementById("count").textContent = data.count;
    } catch (error) {
        console.error("Error fetching count:", error);
    }
}

async function addOneToCount() {
    try {
        const response = await fetch("/increment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ value: 1 }),
        });

        const data = await response.json();
        document.getElementById("count").textContent = data.count;
    } catch (error) {
        console.error("Error incrementing count:", error);
    }
}

document.addEventListener("DOMContentLoaded", getCount);
