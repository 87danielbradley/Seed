# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  -removed- create_at       :datetime         not null
#  session_token   :string           not null
#  location_id     :integer          not null
#  biography       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    #FIGVAPER
    attr_reader :password
    
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :biography, length: {maximum: 300}
    validates :password, length: {minimum: 6}, allow_nil: true
    
    after_initialize :ensure_session_token

    # belongs_to :location,
    #     foreign_key: :location_id,
    #     class_name: :Location

    has_many :projects,
        foreign_key: :author_id,
        class_name: :Project

    has_many :pledges,
        foreign_key: :pledge_id,
        class_name: :Pledge

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
        pass_obj.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.base64(64)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
