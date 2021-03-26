document.querySelector(
  "#my-name"
).innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector("#job-title").textContent = data.job_title;
let techSkills = "";
data.techSkills.forEach((item) => {
  techSkills += `<li>${item}</li>`;
});
document.querySelector(".profile-data").innerHTML = techSkills;
/**
 * section data
 */
let expirienceData = "";
experience.forEach((item) => {
  expirienceData += `<section class="mb-5">`;
  expirienceData += ` <h4 class="company-name mb-2">${item.projectName}</h4>`;
  expirienceData += `<h6><a href="${item.linkProject}" target="popup">${item.lookProject}</a></h6>`;
  expirienceData += `<h6><a href="${item.linkCode}" target="popup">${item.viewCode}</a></h6>`;
  expirienceData += `<p>${item.description}</p>`;
  expirienceData += `</section>`;
});
document.querySelector(".experience-list").innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector(
  ".contacts-block"
).innerHTML += `<li><a href="tel:+380930568000">${data.phone}</a></li>`;
document.querySelector(
  ".contacts-block"
).innerHTML += `<li><a href="mailto:romanhanaua@gmail.com">${data.email}</a></li>`;
document.querySelector(
  ".contacts-block"
).innerHTML += `<li><a href="callto:roma200592">${data.skype}</a></li>`;
document.querySelector(
  ".contacts-block"
).innerHTML += `<li><a href="https://www.linkedin.com/in/romanhana/" target="popup">${data.linkedin}</a></li>`;
document.querySelector(
  ".contacts-block"
).innerHTML += `<li>${data.adress}</li>`;
document.querySelector("#my-photo").src = data.photo;

/**
 * skills
 */

let skillsData = "";
data.skills.forEach((item) => {
  skillsData += `<li>${item}</li>`;
});
document.querySelector(".skills-list").innerHTML = skillsData;

/**
 * education
 */

let educationData = "";
data.education.forEach((item) => {
  educationData += `<li>${item}}</li>`;
});
document.querySelector(".education-list").innerHTML = educationData;

/**
 * courses
 */

let coursesData = "";
data.courses.forEach((item) => {
  coursesData += `<li>${item}</li>`;
});
document.querySelector(".courses-list").innerHTML = coursesData;
