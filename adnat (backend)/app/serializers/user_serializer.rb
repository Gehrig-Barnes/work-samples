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
      Organisation.find_by_id(current_user.organisation_id).users.map{|user| user.shifts}.flatten!
    end
  end

end
