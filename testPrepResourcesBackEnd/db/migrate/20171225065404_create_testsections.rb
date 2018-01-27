class CreateTestsections < ActiveRecord::Migration[5.1]
  def change
    create_table :testsections do |t|
      t.string :name
      t.belongs_to :test, foreign_key: true

      t.timestamps
    end
  end
end
