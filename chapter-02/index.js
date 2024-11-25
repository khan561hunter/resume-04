"use strict";
window.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e;
    console.log("DOM Content Loaded");
    // Fetch DOM elements
    var form = document.getElementById("resume-form");
    var output = document.getElementById("resume-output");
    var personal = document.getElementById("personal-info-output");
    var education = document.getElementById("education-output");
    var work = document.getElementById("work-experience-output");
    var skill = document.getElementById("skills-output");
    // Check for missing elements
    if (!form || !output || !personal || !education || !work || !skill) {
        console.error("Required elements are missing in the DOM.");
        return;
    }
    (_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log("Generate Resume button clicked");
        // Collect input values
        var name = ((_a = document.getElementById("pname")) === null || _a === void 0 ? void 0 : _a.value) || "N/A";
        var email = ((_b = document.getElementById("p_email")) === null || _b === void 0 ? void 0 : _b.value) || "N/A";
        var phone = ((_c = document.getElementById("p_phone")) === null || _c === void 0 ? void 0 : _c.value) || "N/A";
        var school = ((_d = document.getElementById("p_school")) === null || _d === void 0 ? void 0 : _d.value) || "N/A";
        var university = ((_e = document.getElementById("p_uni")) === null || _e === void 0 ? void 0 : _e.value) || "N/A";
        var workplace = ((_f = document.getElementById("comp")) === null || _f === void 0 ? void 0 : _f.value) || "N/A";
        var workplace2 = ((_g = document.getElementById("compa")) === null || _g === void 0 ? void 0 : _g.value) || "N/A";
        var skills = ((_h = document.getElementById("hobby")) === null || _h === void 0 ? void 0 : _h.value) || "N/A";
        // Display personal info
        personal.innerHTML = "\n            <h3>Personal Information</h3>\n            <p>Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n        ");
        // Display education info
        education.innerHTML = "\n            <h3>Education</h3>\n            <p>School: ".concat(school, "</p>\n            <p>University: ").concat(university, "</p>\n        ");
        // Display work experience
        work.innerHTML = "\n            <h3>Work Experience</h3>\n            <p>Company 1: ".concat(workplace, "</p>\n            <p>Company 2: ").concat(workplace2, "</p>\n        ");
        // Display skills
        skill.innerHTML = "\n            <h3>Skills</h3>\n            <p>".concat(skills, "</p>\n        ");
        // Show the resume section
        output.classList.remove("hidden");
        console.log("Resume output displayed");
    });
    // Edit personal info
    (_b = document.getElementById("edit-personal-info")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var _a, _b, _c;
        var name = prompt("Edit Name:", (_a = document.getElementById("pname")) === null || _a === void 0 ? void 0 : _a.value);
        var email = prompt("Edit Email:", (_b = document.getElementById("p_email")) === null || _b === void 0 ? void 0 : _b.value);
        var phone = prompt("Edit Phone:", (_c = document.getElementById("p_phone")) === null || _c === void 0 ? void 0 : _c.value);
        personal.innerHTML = "\n            <h3>Personal Information</h3>\n            <p>Name: ".concat(name, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n        ");
    });
    // Edit education info
    (_c = document.getElementById("edit-education")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var _a, _b;
        var school = prompt("Edit School Name:", (_a = document.getElementById("p_school")) === null || _a === void 0 ? void 0 : _a.value);
        var university = prompt("Edit University Name:", (_b = document.getElementById("p_uni")) === null || _b === void 0 ? void 0 : _b.value);
        education.innerHTML = "\n            <h3>Education</h3>\n            <p>School: ".concat(school, "</p>\n            <p>University: ").concat(university, "</p>\n        ");
    });
    // Edit work experience
    (_d = document.getElementById("edit-work-experience")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        var _a, _b;
        var workplace = prompt("Edit Company 1:", (_a = document.getElementById("comp")) === null || _a === void 0 ? void 0 : _a.value);
        var workplace2 = prompt("Edit Company 2:", (_b = document.getElementById("compa")) === null || _b === void 0 ? void 0 : _b.value);
        work.innerHTML = "\n            <h3>Work Experience</h3>\n            <p>Company 1: ".concat(workplace, "</p>\n            <p>Company 2: ").concat(workplace2, "</p>\n        ");
    });
    // Edit skills
    (_e = document.getElementById("edit-skills")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        var _a;
        var skills = prompt("Edit Skills:", (_a = document.getElementById("hobby")) === null || _a === void 0 ? void 0 : _a.value);
        skill.innerHTML = "\n            <h3>Skills</h3>\n            <p>".concat(skills, "</p>\n        ");
    });
});
