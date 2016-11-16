# So obviously it would be much preferred to assign every instance to a variable to pass in
# as an association in the params for the models that it's associated with, i.e.
# Questionnaire.create!(author: author_name_here) rather than using the author id, because
# running rake db:seed doesn't reset the ids and thus every subsequent seeding after the first would break.
# For the purposes of this demo, I populated the seeds by just using the interface to create everything
# and then dumped the seed data into this file, and the way seed_dump extracts the data doesn't jive with
# passing in the associated models. Hence why for this demo, we'll have to run rake db:reset any time we want
# to reseed.

User.create!([
  {username: "admin", password: "password", admin: true},
  {username: "taylorbherron", password: "password"}
])
Questionnaire.create!([
  {title: "Favorite things", author_id: 1},
  {title: "About You", author_id: 1},
  {title: "Music", author_id: 1},
  {title: "Interests", author_id: 1},
  {title: "Food", author_id: 1},
  {title: "Travel", author_id: 1}
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
  {name: "Worst", label: "What is the worst food you've ever tasted?", questionnaire_id: 5},
  {name: "Favorite Place Abroad", label: "What is your favorite place you've traveled to abroad?", questionnaire_id: 6},
  {name: "Favorite Place Domestic", label: "What is your favorite place you've traveled to domestically?", questionnaire_id: 6},
  {name: "Never Again", label: "Where are you never going to go back to again?", questionnaire_id: 6},
  {name: "Most Desired", label: "What is the one place that you most want to travel to. Why?", questionnaire_id: 6}
])
Response.create!([
  {body: "Fort Worth, Texas, although I grew up in Missoula, Montana.", author_id: 2, question_id: 4},
  {body: "Composing, hiking, camping, reading, video games", author_id: 2, question_id: 5},
  {body: "Hike the entire Appalachian Trail, travel abroad on my own", author_id: 2, question_id: 6},
  {body: "Red", author_id: 2, question_id: 1},
  {body: "Tie between fried okra and my mother's lasagna", author_id: 2, question_id: 2},
  {body: "Stevie Wonder", author_id: 2, question_id: 3},
  {body: "John Coltrane, early 1960s", author_id: 2, question_id: 7},
  {body: "Tie between Radiohead and Anderson .Paak", author_id: 2, question_id: 8},
  {body: "Stevie Wonder", author_id: 2, question_id: 9},
  {body: "If It's Magic by Stevie Wonder", author_id: 2, question_id: 10},
  {body: "I'm really fascinated by survivalism (not the \"the end is near, so we need to get ready\" type, just the type where you develop the means to survive out in the wilderness for extended periods of time), so I'd love to learn a bit about that.", author_id: 2, question_id: 11},
  {body: "Charlie Parker's 1943 Cherokee solo in multiple keys", author_id: 2, question_id: 12},
  {body: "I'm gonna need a couple beers before answering this question.", author_id: 2, question_id: 13},
  {body: "Tie between fried okra and lasagna", author_id: 2, question_id: 14},
  {body: "Either jambalaya or my grandmother's chicken enchiladas", author_id: 2, question_id: 15},
  {body: "Pho, great stuff", author_id: 2, question_id: 16},
  {body: "Probably the blended up cauliflower mixed with ketchup that I was told were actually mashed potatoes. Not cool.", author_id: 2, question_id: 17},
  {body: "Pinar del Rio, Cuba. Just gorgeous, and the people are incredibly nice.", author_id: 2, question_id: 18},
  {body: "Tie between the Oregon coast and Glacier National Park.", author_id: 2, question_id: 19},
  {body: "Lucas, Kansas. The story is too long to tell here, but man, I'm never going back there.", author_id: 2, question_id: 20},
  {body: "Tie between Iceland and Patagonia", author_id: 2, question_id: 21}
])
