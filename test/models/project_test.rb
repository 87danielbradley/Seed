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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
