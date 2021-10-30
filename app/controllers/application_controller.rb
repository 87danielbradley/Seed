class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    private
    # C E L L L
    def current_user
        # @current_user ||= User.find_by(session_token: session[:session_token])
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def ensure_logged_in
        unless current_user
            render json: {error: ['Not Logged In']}
        end
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        #reset user to nil?
    end
    



end
