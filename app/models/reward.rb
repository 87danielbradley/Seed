# == Schema Information
#
# Table name: rewards
#
#  id            :bigint           not null, primary key
#  pledge_amount :integer          not null
#  title         :string           not null
#  description   :string           not null
#  delivery_date :datetime         not null
#  limit         :integer          not null
#  project_id    :integer          not null
#  shipping_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Reward < ApplicationRecord
    validates :pledge_amount, presence: true
    validates :title, presence: true, length: {maximum: 50}
    validates :description, presence: true, length: {maximum: 300}
    validates :delivery_date, presence: true
    validates :limit, presence: true
    validates :project_id, presence: true
    validates :shipping_type, presence: true


    belongs_to :project,
        foreign_key: :project_id,
        class_name: :Project

    has_many :pledges,
        foreign_key: :reward_id,
        class_name: :Pledge
    
end
