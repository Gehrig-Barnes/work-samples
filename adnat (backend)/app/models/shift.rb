class Shift < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :start, presence: true
  validates :finish, presence: true
  validates :finish, greater_than: :start
  validates :break, presence: true
  validates :employee_name, presence: true
  

  def hours_worked
    hours = (finish - start) / 3600
    hours.round(2)
  end

  def shift_cost
    hours = (finish - start) / 3600
    cost = hours * Organisation.find_by_id(current_user.organisation_id).hourly_rate
    cost.round(2)
  end
end
