## Documentation Site for Chemistry Instructional Technology

Originally developed by [Owen He](mailto:haojiah2@illinois.edu) for the Chemistry Learning Center at University of Illinois at Urbana-Champaign.

### Hosting

Hosted on [cPanel](https://web.illinois.edu) with the built-in website hosting functionality in the cPanel directory `DEPLOYPATH=/home/chemlabtech/public_html/`.

### Deploying (Updating the Website with New Changes Made)

The cPanel directory `DEPLOYPATH` is linked to a remote GitHub repository [here](https://github.com/owenhhj/chemlabtech.git).

To add/edit content, make updates as explained below.

### Adding/Editing Content

Clone and branch the GitHub repo, edit `data.json` according to the format below, push the changes and submit a pull request to `main`.

After your changes are merged into `main`, go to cPanel's GitVersionControl page, click `Manage` --> `Pull or Deploy` --> `Update from Remote` --> `Deploy HEAD Commit`.

The updated code should have been deployed now.

_Note: For GitHub storage saving purposes, the media (images, videos, etc.) you want to show on this website should be manually uploaded to cPanel. Go to cPanel's FileManager and manually upload the files to `public_html/content/`._

```json
{
  "audio": [
    {
      "question": "Title of the issue to click on before revealing the answer.", 
      "answer": "Solution text. This field may also be an array of sentences to be rendered in paragraphs.", 
      "media": [
        "List of media file names such as `photo.jpg`. Remember to upload those files to `content/`."
      ]
    }
  ], 
  "video": [
    "list of Q&As regarding video, in the same format as above"
  ], 
  "internet": [
    "list of Q&As regarding internet, in the same format as above"
  ]
}
```

### Repository Structure

Home page `index.html` must be present in the root directory.

`content/` stores all media content to be seen in the documentation, including images, videos, etc.

`data.json` is the text database storing all the troubleshooting Q&As of this website.

`scripts/renderer.js` reads the issues in `data.json` and renders them into the website, also enabling the click-to-expand feature.
