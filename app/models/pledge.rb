# == Schema Information
#
# Table name: pledges
#
#  id            :bigint           not null, primary key
#  pledge_id     :integer          not null
#  pledge_amount :float            not null
#  reward_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Pledge < ApplicationRecord
    validates :pledge_id, presence: true
    validates :pledge_amount, presence: true
    validates :reward_id, presence: true

    validates :created_at, presence: true
    validates :updated_at, presence: true

    belongs_to :pledge,
        foreign_key: :pledge_id,
        class_name: :User

    belongs_to :reward,
        foreign_key: :reward_id,
        class_name: :Reward
end
