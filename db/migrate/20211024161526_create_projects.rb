class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      # t.integer :id, null: false
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.text :body, null: false
      t.integer :category_id, null: false
      t.integer :location_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :goal, null: false
      t.text :risks, null: false

      t.timestamps
    end
    add_index :projects, :author_id
    add_index :projects, :title, unique: true
  end
end
