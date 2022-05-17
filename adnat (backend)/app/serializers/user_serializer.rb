class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :orgs, :organisation_id, :all_shifts
  has_many :shifts
  belongs_to :organisation

  def orgs
    Organisation.all
  end

  def all_shifts
    if current_user.organisation_id == nil
      puts "no shifts"
    else
      current_user.organisation.shifts.map do|shift|
        shift.attributes.merge(hours_worked: shift.hours_worked, shift_cost: shift.hours_worked * Organisation.find_by_id(current_user.organisation_id).hourly_rate)
      end 
    end
  end

  ##create a shift serializer and use it above
end
