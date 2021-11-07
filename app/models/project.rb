# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :text             not null
#  body        :text             not null
#  category_id :integer          not null
#  location_id :integer          not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  goal        :integer          not null
#  risks       :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Project < ApplicationRecord
    validates :author_id, presence: true
    validates :title, presence: true, length: {maximum: 50}
    validates :description, presence: true, length: {maximum: 300}
    validates :body, presence: true, length: {maximum: 1000}
    validates :category_id, presence: true
    validates :location_id, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :goal, presence: true
    validates :risks, presence: true, length: {maximum: 300}


    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    belongs_to :location,
        foreign_key: :location_id,
        class_name: :Location

    has_many :rewards,
        foreign_key: :project_id,
        class_name: :Reward

    has_many :faqs,
        foreign_key: :project_id,
        class_name: :Faq


    def self.in_category(category)
        self.where(category_id: category)
        
    end

    def pledged
        # Project.sum(rewards.pledge_amount)
        total = 0
        rewards.each do |reward|
            total += reward.pledged
        end
        return total
        
    end


end
