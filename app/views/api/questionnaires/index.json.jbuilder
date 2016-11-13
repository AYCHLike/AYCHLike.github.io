@questionnaires.each do |questionnaire|
  json.partial! 'api/questionnaires/questionnaire', questionnaire: questionnaire
end
