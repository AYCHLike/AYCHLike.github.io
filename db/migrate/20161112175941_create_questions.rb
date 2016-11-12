class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :name, null: false
      t.string :label, null: false
      t.integer :questionnaire_id, null: false

      t.timestamps
    end
    add_index :questions, [:name, :questionnaire_id], unique: true
  end
end
