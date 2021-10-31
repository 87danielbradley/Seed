class FixPledge < ActiveRecord::Migration[5.2]
  def change
    add_column :pledges, :pledge_id, :integer, null: false
  end
end
