class CreateQuestionnaires < ActiveRecord::Migration[5.0]
  def change
    create_table :questionnaires do |t|
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :questionnaires, [:title, :author_id], unique: true
  end
end
