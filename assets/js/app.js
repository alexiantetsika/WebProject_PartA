document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("coursesGrid");
   //Courses Selection, Dynamically it creates course cards using data from the courses table
  function renderCourses() {
    grid.innerHTML = "";
    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";

      card.innerHTML = `
        <p class="tittle">${course.tittle}</p>
        <p class="description">${course.description}</p>
        <p><strong>Category:</strong> ${course.category}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Lessons:</strong> ${course.lessons}</p>
        <a class="btn-secondary" href="course-details.html?id=${course.id}">Learn More</a>
      `;
      grid.appendChild(card);
    });
  }

  renderCourses();

  
});

//Loading books and videos in a common layout Each row contains 1 book and 1 video (if available)
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("booksGrid");

    // We find the largest length between books and videos so that all can be displayed
    const maxLength = Math.max(books.length, videos.length);

    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement("div");
        row.className = "courses-row"; 

        // BOOKS
        if (books[i]) {
            const bookCard = document.createElement("div");
            bookCard.className = "course-card";
            //Book card content
            bookCard.innerHTML = `
                <div class="course-tag">${books[i].category}</div>
                <h3>${books[i].title}</h3>
                <p><strong>Author:</strong> ${books[i].author}</p>
                <p><strong>Language:</strong> ${books[i].language}</p>
                
                ${books[i].pages ? `<p><strong>Pages:</strong> ${books[i].pages}</p>` : ""}
                <div class="course-meta">
                    <span>Type: ${books[i].type}</span> 
                </div>
                <a href="book-details.html?id=${books[i].id}" class="course-link">View Details</a>
            `;
            row.appendChild(bookCard); //row 49 appears only if the book have page information
        }

        // VIDEO
        if (videos[i]) {
            const videoCard = document.createElement("div");
            videoCard.className = "course-card";
            //video card
            videoCard.innerHTML = `
                <div class="course-tag">${videos[i].category}</div>
                <h3>${videos[i].title}</h3>
                <p>${videos[i].description}</p>
                <div class="course-meta">
                    ${videos[i].duration ? `<span>Duration: ${videos[i].duration}</span>` : ""} 
                    <span>Type: Video</span>
                </div>
                <a href="${videos[i].URL}" target="_blank" class="course-link">Watch Video</a>
            `;
            row.appendChild(videoCard); //row 71 opens youtube in a new page in order to watch the video for the course
        }

        grid.appendChild(row);
    }
});









