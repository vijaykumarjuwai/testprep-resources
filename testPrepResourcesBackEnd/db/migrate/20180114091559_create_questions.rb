class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
    	t.integer :question_number
    	t.string :answer
    	t.belongs_to :testinstance, foreign_key: true
    	t.string :section

      t.timestamps
    end
  end
end
