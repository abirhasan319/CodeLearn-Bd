// ===============================
// CodeLearn BD - Video Data
// ===============================

const videos = [
    {
        title: "Python Beginner Course",
        category: "Python",
        description: "Learn Python programming from the beginning.",
        file: "videos/python.mp4"
    },

    {
        title: "HTML Beginner Course",
        category: "HTML",
        description: "Learn HTML and create your first website.",
        file: "videos/html.mp4"
    },

    {
        title: "CSS Beginner Course",
        category: "CSS",
        description: "Learn CSS and design beautiful websites.",
        file: "videos/css.mp4"
    },

    {
        title: "JavaScript Beginner Course",
        category: "JavaScript",
        description: "Learn JavaScript programming.",
        file: "videos/javascript.mp4"
    }
];


// ===============================
// Display Videos
// ===============================

function displayVideos(list) {

    const videoList =
        document.getElementById("videoList");

    if (!videoList) {
        return;
    }

    videoList.innerHTML = "";

    if (list.length === 0) {

        videoList.innerHTML = `
            <p>No videos found.</p>
        `;

        return;
    }

    list.forEach((video, index) => {

        videoList.innerHTML += `

            <div class="video-card">

                <div class="thumbnail">
                    ▶
                </div>

                <div class="video-info">

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.category}
                    </p>

                    <p>
                        ${video.description}
                    </p>

                    <a
                        class="watch-btn"
                        href="watch.html?id=${index}"
                    >
                        Watch Video
                    </a>

                </div>

            </div>

        `;
    });
}


// ===============================
// Filter Videos
// ===============================

let currentCategory = "All";

function filterVideos(category) {

    currentCategory = category;

    if (category === "All") {

        displayVideos(videos);

        return;
    }

    const filteredVideos =
        videos.filter(
            video =>
                video.category === category
        );

    displayVideos(filteredVideos);
}


// ===============================
// Search Videos
// ===============================

function searchVideo() {

    const search =
        document.getElementById("search");

    if (!search) {
        return;
    }

    const searchText =
        search.value.toLowerCase();

    let result =
        videos.filter(video =>

            video.title
                .toLowerCase()
                .includes(searchText)

        );


    if (currentCategory !== "All") {

        result =
            result.filter(video =>

                video.category ===
                currentCategory

            );
    }

    displayVideos(result);
}


// Search Box
const searchBox =
    document.getElementById("search");

if (searchBox) {

    searchBox.addEventListener(
        "input",
        searchVideo
    );
}


// ===============================
// Show Videos Page
// ===============================

if (
    document.getElementById("videoList")
) {

    displayVideos(videos);

}


// ===============================
// Watch Video Page
// ===============================

const params =
    new URLSearchParams(
        window.location.search
    );

const videoId =
    params.get("id");


if (
    videoId !== null &&
    videos[videoId]
) {

    const video =
        videos[videoId];


    const title =
        document.getElementById(
            "videoTitle"
        );

    const description =
        document.getElementById(
            "videoDescription"
        );

    const player =
        document.getElementById(
            "videoPlayer"
        );


    if (title) {

        title.textContent =
            video.title;

    }


    if (description) {

        description.textContent =
            video.description;

    }


    if (player) {

        player.src =
            video.file;

    }

}


// ===============================
// Upload Demo
// ===============================

const uploadForm =
    document.getElementById(
        "uploadForm"
    );


if (uploadForm) {

    uploadForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Demo upload complete! Real online video upload will be added later."
            );

        }
    );

}