class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :email, uniqueness:true
    validates :first_name, presence: true 
    validates :password, length:{minimum: 6, allow_nil: true}  
    attr_reader :password
    after_initialize :ensure_session_token, :ensure_image_url
 
    def self.find_by_credentials(email, password) 
        @user = User.find_by(email: email)
        @user && is_password?(password) ? @user : nil
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

    def ensure_image_url
        self.image_url ||= "default_user.png"
    end

end