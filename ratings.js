function displayRatings() {
    const ratingsBody = document.getElementById("ratings-body");
    const allRatings = JSON.parse(localStorage.getItem("allRatings")) || [];

    // if (allRatings.length === 0) {
    //     const noRatingsRow = document.createElement("tr");
    //     noRatingsRow.innerHTML = "<td colspan='2'>No ratings available.</td>";
    //     ratingsBody.appendChild(noRatingsRow);
    //     return;
    // }

    allRatings.forEach(rating => {
        const ratingRow = document.createElement("tr");

        ratingRow.innerHTML = `
            <td>${rating.player}</td>
            <td>${rating.rating} stars</td>
        `;

        ratingsBody.appendChild(ratingRow);
    });
}

function goBack() {
    window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", displayRatings);
