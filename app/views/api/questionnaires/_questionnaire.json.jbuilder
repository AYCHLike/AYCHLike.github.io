json.extract! questionnaire, :id, :title
json.questions do
  questionnaire.questions.each do |question|
    json.set! question.id do
      json.extract! question, :name, :label
      json.responses do
        json.array! question.responses, partial: 'api/responses/response', as: :response
      end
    end
  end
end

# Sample json response (lots of ids pointing to objects for fast and easy lookup and updating in the redux store)
# {
#   "id": 1,
#   "title": "Favorite things",
#   "questions": {
#     "1": {
#       "name": "Color",
#       "label": "What is your favorite color?",
#       "responses": [
#         {
#           "body": "Red",
#           "question_id": 1,
#           "author_name": "taylorbherron",
#           "created_at": "11 minutes ago"
#         }
#       ]
#     },
#     "2": {
#       "name": "Food",
#       "label": "What is your favorite food?",
#       "responses": [
#         {
#           "body": "Tie between fried okra and my mother's lasagna",
#           "question_id": 2,
#           "author_name": "taylorbherron",
#           "created_at": "11 minutes ago"
#         }
#       ]
#     },
#     "3": {
#       "name": "Musical Artist",
#       "label": "Who is your favorite musical artist?",
#       "responses": [
#         {
#           "body": "Stevie Wonder",
#           "question_id": 3,
#           "author_name": "taylorbherron",
#           "created_at": "11 minutes ago"
#         }
#       ]
#     }
#   }
# }
