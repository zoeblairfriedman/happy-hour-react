class Api::FavoritesController < ApplicationController

    before_action :set_user

    def index
        @favorites = @user.favorites
        render json: @favorites
    end

    def create
        # might just be Favorite.new
        @favorite = @user.favorites.new(favorite_params)
        if @favorite.save
            render json: @favorite
        else
            @errors = @bar.errors.full_messages
            render json: @errors
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        render json: {message: "#{@favorite.bar.name} has been removed from your favorites"}
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end

    def favorite_params
        params.require(:favorite).permit(:user_id, :bar_id)
    end

end
