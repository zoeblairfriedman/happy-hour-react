class Bar < ApplicationRecord
    has_many :favorites

    validates_uniqueness_of :place_id
    validates :name, presence: true
    validates :details, presence: true
    validates :start, presence: true
    validates :end, presence: true

    def make_date_array
        array = []
        self.attributes.each do |key, value|
          if value == true
            array.push(key)
          end
        end 
        return nil if array.nil?
        return array[0] if array.length == 1
        return array[0..-2].join(', ') + " and " + array[-1] if array.length > 1
    end



end
