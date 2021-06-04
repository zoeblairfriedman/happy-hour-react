class BarsController < ApplicationController

    def index
        @bars = Bar.all
        render json: @bars
    end

    def show
        @bar = Bar.find(params[:id])
        render json: @bar
    end

    def create
        @bar = Bar.new(bar_params)
        if @bar.save
            render json: @bar
        else
            @errors = @bar.errors.full_messages
            render json: @errors
        end
    end

    def update
    end

    def destroy
        @bar = Bar.find(params[:id])
        @bar.destroy
        render json: {message: "#{@bar.name} has no happy hour!"}
    end

    private

    def bar_params
        params.require(:bar).permit(:name, :verified, :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :start, :end, :phone, :address, :lat, :lng, :website, :image, :place_id, :details)
    end

end
