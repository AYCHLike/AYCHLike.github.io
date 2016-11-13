json.extract! questionnaire, :id, :title
json.questions do
  questionnaire.questions.each do |question|
    json.set! question.id do
      json.extract! question, :name, :label
      json.responses do
        question.responses.each do |response|
          json.set! response.author.id do
            json.body response.body
            json.author_name response.author.username
            json.created_at time_ago_in_words(response.created_at) + ' ago'
          end
        end
      end
    end
  end
end

# Sample json response (lots of ids pointing to objects for fast and easy lookup and updating in the redux store)
# {
#   "id": 1,
#   "title": "testsurvey",
#   "questions": {
#     "1": {
#       "name": "Question 1",
#       "label": "Favorite food",
#       "responses": {
#         "1": {
#           "body": "Lasagna",
#           "author": "testuser",
#           "created_at": "about 17 hours ago"
#         },
#         "2": {
#           "body": "Pizza",
#           "author": "another",
#           "created_at": "about 17 hours ago"
#         }
#       }
#     },
#     "2": {
#       "name": "Question 2",
#       "label": "Favorite color",
#       "responses": {
#         "3": {
#           "body": "Red",
#           "author": "another",
#           "created_at": "about 17 hours ago"
#         },
#         "4": {
#           "body": "Blue",
#           "author": "testuser",
#           "created_at": "about 17 hours ago"
#         }
#       }
#     }
#   }
# }
