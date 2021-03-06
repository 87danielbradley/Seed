# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
    validates :name, presence: true

    has_many :users,
        foreign_key: :location_id,
        class_name: :User

    has_many :projects,
        foreign_key: :location_id,
        class_name: :Project
end
