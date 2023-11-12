## Documentation Site for Chemistry Instructional Technology

### Hosting

Hosted on [cPanel](web.illinois.edu).

### Adding/Editing Q&As

Download `content/data.json` to your computer, edit it, and re-upload it along with pictures and/or videos to show.

```json
{
  "audio": [
    {
      "question": "Title of the problem for people to click on before revealing the answer.", 
      "answer": "Solution to the problem.", 
      "media": [
        "List of media file names such as \"photo.jpg\". Remember to upload those files to `content/`."
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

Home page `index.html` contains links to subject-specific pages for audio, video, internet, etc.

`content/` stores all media content to be seen in the documentation, including pictures, videos, etc.

`data.json` is the database storing all the troubleshooting Q&As of this website.

`scripts/renderer.js` reads the issues in `data.json` and renders them into the website.
