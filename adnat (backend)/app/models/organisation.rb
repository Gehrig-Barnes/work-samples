class Organisation < ApplicationRecord
    has_many :users
    has_many :shifts, through: :users
    validates :name, presence: true
    validates :hourly_rate, numericality: {greater_than_or_equal_to: 1}
end
