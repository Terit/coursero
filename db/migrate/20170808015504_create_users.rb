class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :biography
      t.string :slug
      t.attachment :avatar
      t.integer :role, default: 0, null: false

      t.timestamps
    end
  end
end
