const FILE_EXTENSION_IMAGE = ["jpg", "jpeg", "heic", "png"];
const FILE_EXTENSION_VIDEO = ["mp4", "mov"];
const FILE_PATH = "../content/";
const METADATA_PATH = "../data.json";

const insertIssueQuestions = (root, issues) => {
  root.html("");

  issues.forEach((issue, index) => {
    let html = `
      <div class="issue" id="issue-${index}">
        <div class='issue-title' id="issue-title-${index}">
          <p>${issue.question}</p>
        </div>
      </div>
    `;
    root.append(html);
  });
}

const onClickIssueTitle = (issueTitle, issueIndex, issueData) => {
  if (issueTitle.parent().find(".issue-answer").length > 0) {
    issueTitle.parent().html(issueTitle);
    return;
  }

  let answerText = "";
  if (typeof(issueData.answer) === "string") {
    answerText = `<p>${issueData.answer}</p>`;
  } else {
    answerText = issueData.answer.map(sentence => (`<p>${sentence}</p>`)).join('');
  }

  let htmlMedia = "";
  if (!!issueData.media && issueData.media.length > 0) {
    htmlMedia = issueData.media.map(src => {
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

  let htmlAnswer = `
    <div class='issue-answer' id="issue-answer-${issueIndex}">
      ${answerText}
      <div class="issue-media">${htmlMedia}</div>
    </div>
  `;
  issueTitle.after(htmlAnswer);
}

$(document).ready(async () => {
  $("#sub-header").load("sub-header.html");

  let root = $("#root");
  let pageTopic = root.attr("name");
  let data = (await $.getJSON(METADATA_PATH))[pageTopic];

  await insertIssueQuestions(root, data);

  root.on("click", ".issue-title", (e) => {
    let issueTitle = $(e.target);
    let issueIndex = parseInt(issueTitle.attr("id").slice("issue-title-".length));
    onClickIssueTitle(issueTitle, issueIndex, data[issueIndex])
  });
});
