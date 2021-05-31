require 'httparty'
require 'pry'
require_relative ("../lib/bar")

class GoogleApiController < ApplicationController

    # this needs to not be here:
    API = "AIzaSyAaSwC5MoX0vLziJApwVjWZYHxmsdz077Y"

    def self.make_request(input)
        result = Geocoder.search(input)
        if result.length == 0 
         return nil
    end
        lat = result.first.coordinates[0].round(5)
        lon = result.first.coordinates[1].round(5)
        # might want to remove the keyword?
        close_bars_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lon}&radius=500&types=bar&keyword=happyhour&key=#{API}"
        bars = HTTParty.get(close_bars_url)["results"]
        if bars.length < 3
            far_bars_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lon}&radius=10000&types=bar&keyword=happyhour&key=#{API}"
            bars = HTTParty.get(far_bars_url)["results"]
        end
        self.create_bars(bars, input)
    end
 

    def self.create_bars(bars, input)
        bars.each do |bar|
            bar_hash = {
                name: bar["name"], 
                id: bar["place_id"],
                address: bar["vicinity"],
                price: Array.new(bar["price_level"].to_i, "$").join(""),
                neighborhood: input
            }
        # Bar.new(bar_hash) <--need a new method for this! 
        end
    end

  
    def self.load_reviews(bar)
       url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=#{bar.id}&fields=name,rating,review,formatted_phone_number&key=#{API}"
       details = HTTParty.get(url)
       bar.phone = details["result"]["formatted_phone_number"]
       bar.reviews = details["result"]["reviews"]
    #    Bar.happy_hour_reviews(bar) <-- will need a new method for this
    end

# From old Bar class

# attr_accessor :reviews, :phone

# @@all = []

# def initialize(bar_hash)
#     bar_hash.each do |key, value|
#         self.class.attr_accessor(key)
#         self.send("#{key}=", value)
#     end
#     @@all << self
# end

# def self.all
#     @@all
# end

# def self.happy_hour_reviews(bar)
#     review_array = []
#     bar.reviews.each do |review|
#         if review["text"].include?("happy hour")
#             review_array << review["text"]
#         end
#     end
#     review_array
# end

# def self.find_by_neighborhood(input)
#     Bar.all.select {|bar| bar.neighborhood == input}
# end

end
