// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (0 < sectionIndex < 3) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
};

function renderCourseDetails(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

function sectionTemplate(sections) {
    return `<tr>
            <td>${sections.sectionNum}</td>
            <td>${sections.roomNum}</td>
            <td>${sections.enrolled}</td>
            <td>${sections.days}</td>
            <td>${sections.instructor}</td>
            </tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}


renderCourseDetails(aCourse);

renderSections(aCourse.sections);