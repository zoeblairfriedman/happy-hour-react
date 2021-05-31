class Favorite < ApplicationRecord
    belong_to :user
    belong_to :bar 
end
