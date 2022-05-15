class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :orgs
  has_many :shifts
  belongs_to :organisation

  def orgs
    Organisation.all
  end
end
