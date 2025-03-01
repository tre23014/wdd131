// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    }
};

function renderCourseDetails(course) {
    const courseName = document.querySelector("#courseName").textContent = course.name;
    const coursecode = document.querySelector("#courseCode").textContent = course.code;
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
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

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
});

renderCourseDetails(aCourse);

renderSections(aCourse.sections);