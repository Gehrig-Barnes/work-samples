class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.belongs_to :organisation, null: false, foreign_key: true
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
