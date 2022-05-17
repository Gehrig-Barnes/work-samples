class Shift < ApplicationRecord
  belongs_to :user
  belongs_to :organisation

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
