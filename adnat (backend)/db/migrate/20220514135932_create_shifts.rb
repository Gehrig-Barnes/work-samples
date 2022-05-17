class CreateShifts < ActiveRecord::Migration[7.0]
  def change
    create_table :shifts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :start
      t.datetime :finish
      t.integer :break
      t.string :employee_name
      t.timestamps
    end
  end
end
