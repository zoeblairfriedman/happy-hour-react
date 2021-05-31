class User < ApplicationRecord
    has_many :favorites
    has_many :bars, through: :favorites
    
    # has_secure_password
    validates_uniqueness_of :email
    validates :email, :name, presence: true
    # validates :password_digest, presence: true

end
