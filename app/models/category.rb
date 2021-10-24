# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates :name, presence: true
    validates :created_at, presence: true
    validates :updated_at, presence: true
    
    has_many :projects,
        foreign_key: :category_id,
        class_name: :Project


end
