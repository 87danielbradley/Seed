class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save!
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
            # render json: ["Why isn't this working"], status: 422
        end

    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :name)
    end



end