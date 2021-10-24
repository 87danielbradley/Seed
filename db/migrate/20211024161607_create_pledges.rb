class CreatePledges < ActiveRecord::Migration[5.2]
  def change
    create_table :pledges do |t|
      t.integer :pledge_id, null: false
      t.float :pledge_amount, null: false
      t.integer :reward_id, null: false

      t.timestamps
    end
  end
end
