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
require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
