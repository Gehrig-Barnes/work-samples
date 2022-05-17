class Shift < ApplicationRecord
  belongs_to :user

  def hours_worked
    start - finish
  end
end
