class UpdatePledge < ActiveRecord::Migration[5.2]
  def change
    remove_column :pledges, :pledge_id
    remove_column :users, :create_at

  end
end
