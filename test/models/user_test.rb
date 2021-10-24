# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  create_at       :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#  location_id     :integer          not null
#  biography       :string
#  created_at      :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
