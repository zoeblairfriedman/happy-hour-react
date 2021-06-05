class Bar < ApplicationRecord
    has_many :favorites

    validates_uniqueness_of :place_id
    validates :name, presence: true

    def make_date_array
        dates = []
        self.attributes.each do |key, value|
          if value == true
            dates.push(key)
          end
        end 
        return dates
    end

end
