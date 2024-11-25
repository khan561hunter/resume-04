"use strict";

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded");

    // Fetch DOM elements
    const form = document.getElementById("resume-form");
    const output = document.getElementById("resume-output");
    const personal = document.getElementById("personal-info-output");
    const education = document.getElementById("education-output");
    const work = document.getElementById("work-experience-output");
    const skill = document.getElementById("skills-output");

    // Check for missing elements
    if (!form || !output || !personal || !education || !work || !skill) {
        console.error("Required elements are missing in the DOM.");
        return;
    }

    document.getElementById("generateResume")?.addEventListener("click", () => {
        console.log("Generate Resume button clicked");

        // Collect input values
        const name = (document.getElementById("pname") as HTMLInputElement)?.value || "N/A";
        const email = (document.getElementById("p_email") as HTMLInputElement)?.value || "N/A";
        const phone = (document.getElementById("p_phone") as HTMLInputElement)?.value || "N/A";
        const school = (document.getElementById("p_school") as HTMLInputElement)?.value || "N/A";
        const university = (document.getElementById("p_uni") as HTMLInputElement)?.value || "N/A";
        const workplace = (document.getElementById("comp") as HTMLInputElement)?.value || "N/A";
        const workplace2 = (document.getElementById("compa") as HTMLInputElement)?.value || "N/A";
        const skills = (document.getElementById("hobby") as HTMLInputElement)?.value || "N/A";

        // Display personal info
        personal.innerHTML = `
            <h3>Personal Information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
        `;

        // Display education info
        education.innerHTML = `
            <h3>Education</h3>
            <p>School: ${school}</p>
            <p>University: ${university}</p>
        `;

        // Display work experience
        work.innerHTML = `
            <h3>Work Experience</h3>
            <p>Company 1: ${workplace}</p>
            <p>Company 2: ${workplace2}</p>
        `;

        // Display skills
        skill.innerHTML = `
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Show the resume section
        output.classList.remove("hidden");
        console.log("Resume output displayed");
    });

    // Edit personal info
    document.getElementById("edit-personal-info")?.addEventListener("click", () => {
        const name = prompt("Edit Name:", (document.getElementById("pname") as HTMLInputElement)?.value);
        const email = prompt("Edit Email:", (document.getElementById("p_email") as HTMLInputElement)?.value);
        const phone = prompt("Edit Phone:", (document.getElementById("p_phone") as HTMLInputElement)?.value);

        personal.innerHTML = `
            <h3>Personal Information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
        `;
    });

    // Edit education info
    document.getElementById("edit-education")?.addEventListener("click", () => {
        const school = prompt("Edit School Name:", (document.getElementById("p_school") as HTMLInputElement)?.value);
        const university = prompt("Edit University Name:", (document.getElementById("p_uni") as HTMLInputElement)?.value);

        education.innerHTML = `
            <h3>Education</h3>
            <p>School: ${school}</p>
            <p>University: ${university}</p>
        `;
    });

    // Edit work experience
    document.getElementById("edit-work-experience")?.addEventListener("click", () => {
        const workplace = prompt("Edit Company 1:", (document.getElementById("comp") as HTMLInputElement)?.value);
        const workplace2 = prompt("Edit Company 2:", (document.getElementById("compa") as HTMLInputElement)?.value);

        work.innerHTML = `
            <h3>Work Experience</h3>
            <p>Company 1: ${workplace}</p>
            <p>Company 2: ${workplace2}</p>
        `;
    });

    // Edit skills
    document.getElementById("edit-skills")?.addEventListener("click", () => {
        const skills = prompt("Edit Skills:", (document.getElementById("hobby") as HTMLInputElement)?.value);

        skill.innerHTML = `
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    });
});
