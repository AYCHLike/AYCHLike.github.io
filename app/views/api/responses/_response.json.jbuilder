json.extract! response, :body, :question_id
json.author_name response.author.username
json.created_at time_ago_in_words(response.created_at) + ' ago'
