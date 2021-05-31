class UsersController < ApplicationController



    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            # do something else
            @errors = @bar.errors.full_messages
            render json: @errors
        end
    end


    private

    def user_params
        params.require(:user).permit(:name, :email, :password_digest)
    end

end
