User.create!([
  {username: "admin", password_digest: "$2a$10$GqlvRCv8Uo74hjLXiy84R.gE7vBoSNfamY6vD4/sIK92RpjzQYPO.", admin: true, session_token: "6y4mtL1CIU1AGP_dqw0Cng"},
  {username: "taylorbherron", password_digest: "$2a$10$3q.LRXMh6UdhZqMY2enOL.gZoTWZCbUdsuWOTIerwqrSJaC2iC2hC", admin: false, session_token: "secjC9zUNkWAEaHCVA5kaw"},
  {username: "chucknorris", password_digest: "$2a$10$JTPs8E/zIh6fEKp7J/l1AOLRnBxzLTCUJRWrnIEyjwdM1zxarjwxC", admin: false, session_token: "lCegHT8X_GuBchHAQGus3Q"}
  ])
Questionnaire.create!([
  {title: "Favorite things", author_id: 1},
  {title: "About You", author_id: 1}
])
Question.create!([
  {name: "Color", label: "What is your favorite color?", questionnaire_id: 1},
  {name: "Food", label: "What is your favorite food?", questionnaire_id: 1},
  {name: "Musical Artist", label: "Who is your favorite musical artist?", questionnaire_id: 1},
  {name: "Birthplace", label: "Where were you born?", questionnaire_id: 2},
  {name: "Hobbies", label: "What are some of your hobbies?", questionnaire_id: 2},
  {name: "Bucket List", label: "What are some of your bucket list items?", questionnaire_id: 2}
])

Response.create!([
  {body: "Fort Worth, Texas, although I grew up in Missoula, Montana.", author_id: 2, question_id: 4},
  {body: "Composing, hiking, camping, reading, video games", author_id: 2, question_id: 5},
  {body: "Hike the entire Appalachian Trail, travel abroad on my own", author_id: 2, question_id: 6},
  {body: "Red", author_id: 2, question_id: 1},
  {body: "Tie between fried okra and my mother's lasagna", author_id: 2, question_id: 2},
  {body: "Stevie Wonder", author_id: 2, question_id: 3},
  {body: "Mount Olympus, probably", author_id: 3, question_id: 4},
  {body: "Beating up bad guys", author_id: 3, question_id: 5},
  {body: "Punch God right in the face and watch him bleed", author_id: 3, question_id: 6},
  {body: "Depends on the day, I'm very in touch with my emotions", author_id: 3, question_id: 1},
  {body: "I don't have to eat, so not applicable", author_id: 3, question_id: 2},
  {body: "Metallica", author_id: 3, question_id: 3}
])
