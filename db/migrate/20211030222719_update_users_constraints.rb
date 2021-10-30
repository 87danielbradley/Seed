class UpdateUsersConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:users, :create_at, true)
    change_column_null(:users, :updated_at, true)
    change_column_null(:users, :location_id, true)
    change_column_null(:users, :created_at, true)
  end
end
