class BarSerializer < ActiveModel::Serializer
  attributes :id, :name, :monday, :tuesday, :military_start, :military_end, :wednesday, :thursday, :friday, :saturday, :sunday, :start, :end, :date_array, :formatted_verified, :formatted_start, :formatted_end, :details, :phone, :address, :website, :image, :place_id, :lat, :lng, :favorites


def formatted_verified
  Bar.last.verified ? Bar.last.verified.strftime("%B %d, %Y") : nil
  # Bar.last.verified.strftime("%B %d, %Y")
end

def formatted_start
  Bar.last.start ? Bar.last.start.strftime("%l:%M%P") : nil
end

def formatted_end
  Bar.last.end ? Bar.last.end.strftime("%l:%M%P") : nil
end

def military_start
  Bar.last.start ? Bar.last.start.strftime("%H:%M") : nil
end

def military_end
  Bar.last.end ? Bar.last.end.strftime("%H:%M") : nil
end

def date_array
  Bar.last.make_date_array
end

end