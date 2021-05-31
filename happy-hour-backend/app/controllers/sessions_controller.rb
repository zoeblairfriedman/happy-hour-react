class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])
          session[:user_id] = @user.id
          render json: @user
        else
          @errors = @user.errors.full_messages
          render json: @errors
        end
      end

    def destroy
        session.clear
        render json: {message: "Sucessfully logged out"}
    end

end
