class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :orgs, :organisation_id, :all_shifts
  has_many :shifts
  belongs_to :organisation

  def orgs
    Organisation.all
  end

  def all_shifts
    Organisation.find_by_id(current_user.organisation_id).users.map{|user| user.shifts}
  end

end
