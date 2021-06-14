class BarSerializer < ActiveModel::Serializer
    attributes :id, :name, :military_start, :military_end, :date_array, :formatted_verified, :formatted_start, :formatted_end, :details, :phone, :address, :website, :image, :place_id, :lat, :lng, :favorites
  
  def formatted_verified
    object.verified ? object.verified.strftime("%B %d, %Y") : nil
  end
  
  def formatted_start
    object.start ? object.start.strftime("%l:%M%P") : nil
  end
  
  def formatted_end
    object.end ? object.end.strftime("%l:%M%P") : nil
  end
  
  def military_start
    object.start ? object.start.strftime("%H:%M") : nil
  end
  
  def military_end
    object.end ? object.end.strftime("%H:%M") : nil
  end
  
  def date_array
    object.make_date_array
  end
  
  end