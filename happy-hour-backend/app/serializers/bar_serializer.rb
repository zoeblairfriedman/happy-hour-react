class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :formatted_verified, :formatted_start, :formatted_end, :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :details, :phone, :address, :website, :image, :place_id, :lat, :lng, :favorites


def formatted_verified
  Bar.last.verified.strftime("%B %d, %Y")
end

def formatted_start
  Bar.last.start.strftime("%l:%M%P")
end

def formatted_end
  Bar.last.end.strftime("%l:%M%P")
end

end