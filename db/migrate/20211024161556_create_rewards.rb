class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :pledge_amount, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.datetime :delivery_date, null: false
      t.integer :limit, null: false
      t.integer :project_id, null: false
      t.string :shipping_type, null: false

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
