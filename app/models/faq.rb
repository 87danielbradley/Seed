# == Schema Information
#
# Table name: faqs
#
#  id         :bigint           not null, primary key
#  project_id :integer          not null
#  question   :text             not null
#  answer     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Faq < ApplicationRecord
    validates :project_id, presence: true
    validates :question, presence: true
    validates :answer, presence: true

    validates :created_at, presence: true
    validates :updated_at, presence: true

    belongs_to :project,
        foreign_key: :project_id,
        class_name: :Project
end
