# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :email, uniqueness:true
    validates :first_name, presence: true 
    validates :password, length:{minimum: 6, allow_nil: true}  
    attr_reader :password
    after_initialize :ensure_session_token, :ensure_photo
    has_one_attached :photo
    has_many :products,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "Product"
    has_many :cart_items,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "CartItem"
        
    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "Review"

    def self.find_by_credentials(email, password) 
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
    end

    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    private

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def ensure_photo
        self.photo.attached? || self.photo.attach(io: File.open("app/assets/images/default_user.png"),filename:"default_user.jpg")
    end

end
