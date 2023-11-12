// addEventListener("click", (event) => {
// 	if (event.target.id.slice(0, 5) === 'issue') {
// 		let answer = document.getElementById(`answer${event.target.id.slice(5)}`);
// 		answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
// 	}
// });

let FILE_EXTENSION_IMAGE = ["jpg", "jpeg", "heic", "png"];
let FILE_EXTENSION_VIDEO = ["mp4", "mov"];
let FILE_PATH = "../content/";
let METADATA_PATH = "../content/data.json";

const insertAll = () => {
  let root = $("#root");
  let pageTopic = root.attr("name");
  root.html("");

  // render the Q&As into the website
  $.getJSON(METADATA_PATH, (data) => {
    let issues = data[pageTopic];

    issues.forEach(issue => {
      let html_media = "";
      if (!!issue.media && issue.media.length > 0) {
        html_media = issue.media.map(src => {
          let ans = "";
          let fileExtension = src.slice(src.indexOf('.') + 1);
          if (FILE_EXTENSION_IMAGE.includes(fileExtension)) {
            ans = `<div class="media-wrapper"><img src="${FILE_PATH}${src}" alt="${src}"></div>`;
          } else if (FILE_EXTENSION_VIDEO.includes(fileExtension)) {
            ans = `<div class="media-wrapper"><video width="100%" height="100%" controls src="${FILE_PATH}${src}"></video></div>`;
          }
          return ans;
        }).join('');
      }
      let html = `
        <div class='issue-title'>
          <p>${issue.question}</p>
        </div>
        <div class='issue-answer'>
          <p>${issue.answer}</p>
          <div class="issue-media">${html_media}</div>
        </div>
      `;
      root.append(html);
    });
  });
}

$(document).ready(insertAll);
