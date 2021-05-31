class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :verified, :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :start, :end, :details, :phone, :address, :website, :image, :place_id, :lat, :lng, :favorites
end
