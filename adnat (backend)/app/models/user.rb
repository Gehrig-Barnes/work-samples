class User < ApplicationRecord
  has_secure_password

  belongs_to :organisation
  has_many :shifts

  validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    def reset_password!(password)
        self.password = password
        save!
    end
    
end