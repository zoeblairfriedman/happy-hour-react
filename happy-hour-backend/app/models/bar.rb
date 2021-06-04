class Bar < ApplicationRecord
    has_many :favorites

    validates_uniqueness_of :place_id
    validates :name, presence: true

# instance method converts it into whatever format 
# DateTime.parse(params["verified"])

end
