document.addEventListener("DOMContentLoaded", function () {
    var skillsSection = document.getElementById("skills");
    var skillsOffset = skillsSection.offsetTop - window.innerHeight + 100; // Adjust the offset as needed

    function handleScroll() {
        if (window.pageYOffset > skillsOffset) {
            skillsSection.classList.add("visible");
            skillsSection.classList.remove("hidden");
        } else {
            skillsSection.classList.add("hidden");
            skillsSection.classList.remove("visible");
        }
    }

    function addProgrammingLanguages() {
        var programmingLanguages = [
            { name: "C", logo: "c_logo.png" },
            { name: "C++", logo: "cpp_logo.png" },
            { name: "Java", logo: "java_logo.png" },
            { name: "HTML", logo: "html_logo.png" },
            { name: "CSS", logo: "css_logo.png" },
            { name: "JavaScript", logo: "js_logo.png" },
            { name: "NodeJs", logo: "js_logo.png" },
            { name: "Express", logo: "js_logo.png" },
            { name: "ReactJS", logo: "js_logo.png" },
            { name: "MongoDB", logo: "js_logo.png" },
            
            // Add more languages as needed
        ];

        var programmingLanguagesContainer = document.getElementById("programmingLanguages");

        programmingLanguages.forEach(function (language) {
            var skillElement = document.createElement("div");
            skillElement.className = "skill";
            skillElement.innerHTML = `<img src="${language.logo}" alt="${language.name}"><p>${language.name}</p>`;
            programmingLanguagesContainer.appendChild(skillElement);
        });
    }

    window.addEventListener("scroll", handleScroll);
    addProgrammingLanguages();
});
function showFullIntro() {
    document.getElementById("shortIntro").style.display = "none";
    document.getElementById("fullIntro").style.display = "block";
    document.getElementById("seeMoreButton").style.display = "none";
    document.getElementById("seeLessButton").style.display = "inline-block";
}

function showShortIntro() {
    document.getElementById("shortIntro").style.display = "block";
    document.getElementById("fullIntro").style.display = "none";
    document.getElementById("seeMoreButton").style.display = "inline-block";
    document.getElementById("seeLessButton").style.display = "none";
}

function openResumeModal() {
    document.getElementById("resumeModal").style.display = "flex";
}

function closeResumeModal() {
    document.getElementById("resumeModal").style.display = "none";
}