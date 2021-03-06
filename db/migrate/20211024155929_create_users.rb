class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # t.integer :id, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.datetime :create_at, null: false
      t.datetime :updated_at, null: false
      t.string :session_token, null: false
      t.integer :location_id, null: false
      t.string :biography

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
