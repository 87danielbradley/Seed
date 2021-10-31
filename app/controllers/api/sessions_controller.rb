class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Wrong email/password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render {}
        else
            render json: ["User not found"], status: 404
        end

    end

    

end