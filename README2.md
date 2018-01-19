<b>forum-project</b>
My own forum project. 

Development starting from Frontend.
Main characteristics:
 - This project was implemented in 3 hours per day during 6 days.
 - It is responsive. So, it was designed to allow users in their smartphones have a good experience too.
 - It was incorporated Tags in order to group similar questions by subject.
 - It has an access control in order to allow comments from users. Only logged and registered users can give an answer and write a question.
 - It has a vote up mechanism, the best answer is shown first.
 - It was implemented comments to the answers, it stays in the second level.

Commands:
<p><b>creates a new angular 4 project</b></p>
<p>ng new forum-project</p>

<p><b>install bootstrap and copy it into the node_modules</b></p>
<p>npm install -s bootstrap</p>

<p><b>Configure the bootstrap by changing the file angular-cli.json</b></p>
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],

<p><b>Divided the project into smaller components</b></p>
<p>header, footer, menu lateral and forum area.</p>
