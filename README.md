# Everplans Questionnaire Manager

Everplans Questionnaire Manager is a web application for submitting and answering questionnaires built with a Ruby on Rails back end serving JSON to a React/Redux front end. The admin user can create questionnaires and view end user's responses, and end users can respond to existing questionnaires.

### Setup Instructions
To run locally, make sure Postgres is running, cd into the root directory in your terminal, and run the following commands:
* `bundle install`
* `npm install`
* `webpack`
* `bundle exec rake db:reset` (this is a little odd, I left a note about it in `db/seeds`)
* `bundle exec rails s`

You should now be up and running! Navigate to [localhost:3000](http://localhost:3000) and have a look around! Feel free to create an end user account on the signup page, and you can start answering some questionnaires. If you'd like to log in as an admin, click the demo link on the login or signup page and you can take a look at the end users' answers.

### Technical Details
The questionnaires are fetched with all of the associated questions, responses, and authors of the responses eager loaded, and the response is formatted in a manner that makes it easy to extract the necessary data on each of the models as needed. If you want to take a look at an example of how a questionnaire is formatted by the back end, take a look at `views/api/questionnaires/_questionnaire.json.jbuilder`.

Creating a questionnaire is handled by a controlled component, `<AdminQuestionnaireForm/>`, which allows for dynamically adding question fields to the form (functional components with handlers to update the controlled component's state). Upon submit, the questionnaire and the questions are added to the database in one transaction.

For the admin user, the page for a given questionnaire provides a select field for displaying end users' responses, along with how long ago they responded.

For end users, unanswered questionnaires will include fields for submitting responses, and answered questionnaires will display their responses and how long ago they responded.

End users can create accounts from the signup page, and passwords are encrypted with BCrypt and stored in the database along with the username. Admin accounts can only be created by the application owners.
