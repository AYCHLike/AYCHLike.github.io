User.create!([
  {username: "admin", password_digest: "$2a$10$GqlvRCv8Uo74hjLXiy84R.gE7vBoSNfamY6vD4/sIK92RpjzQYPO.", admin: true, session_token: "0kL1YfgHmthhOL6nJJFlzA"},
  {username: "taylorbherron", password_digest: "$2a$10$3q.LRXMh6UdhZqMY2enOL.gZoTWZCbUdsuWOTIerwqrSJaC2iC2hC", admin: false, session_token: "4_4cGtRhuq_L7iSSeRdK8w"}
])
Questionnaire.create!([
  {title: "Favorite things", author_id: 1},
  {title: "About You", author_id: 1},
  {title: "Music", author_id: 1},
  {title: "Interests", author_id: 1},
  {title: "Food", author_id: 1}
])
Question.create!([
  {name: "Color", label: "What is your favorite color?", questionnaire_id: 1},
  {name: "Food", label: "What is your favorite food?", questionnaire_id: 1},
  {name: "Musical Artist", label: "Who is your favorite musical artist?", questionnaire_id: 1},
  {name: "Birthplace", label: "Where were you born?", questionnaire_id: 2},
  {name: "Hobbies", label: "What are some of your hobbies?", questionnaire_id: 2},
  {name: "Bucket List", label: "What are some of your bucket list items?", questionnaire_id: 2},
  {name: "Hypothetical Show", label: "If you could attend a show by any artist in history, whose show would it be?", questionnaire_id: 3},
  {name: "Favorite Recently", label: "Who is your favorite musical artist that's currently active?", questionnaire_id: 3},
  {name: "Favorite All Time", label: "Who is your favorite artist of all time?", questionnaire_id: 3},
  {name: "Funeral", label: "What song should be played at your funeral?", questionnaire_id: 3},
  {name: "Learning", label: "What is something that you want to learn?", questionnaire_id: 4},
  {name: "Recently Learned", label: "What is something interesting that you learned recently?", questionnaire_id: 4},
  {name: "Embarrassing", label: "What is an interest that you are embarrassed to admit you have?", questionnaire_id: 4},
  {name: "Favorite", label: "What is your favorite food?", questionnaire_id: 5},
  {name: "Cooking", label: "What is your favorite food to cook?", questionnaire_id: 5},
  {name: "Best Recently", label: "What's the best food you've tried recently for the first time?", questionnaire_id: 5},
  {name: "Worst", label: "What is the worst food you've ever tasted?", questionnaire_id: 5}
])
Response.create!([
  {body: "Fort Worth, Texas, although I grew up in Missoula, Montana.", author_id: 2, question_id: 4},
  {body: "Composing, hiking, camping, reading, video games", author_id: 2, question_id: 5},
  {body: "Hike the entire Appalachian Trail, travel abroad on my own", author_id: 2, question_id: 6},
  {body: "Red", author_id: 2, question_id: 1},
  {body: "Tie between fried okra and my mother's lasagna", author_id: 2, question_id: 2},
  {body: "Stevie Wonder", author_id: 2, question_id: 3}
])
