class SessionsController < ApplicationController

    skip_before_action :authorize, only: :login

    def login
            user = User.find_by(email: params[:email])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user
            else
                render json: { errors: ["Invalid email or password"] }, status: :unauthorized
            end
    end

    def logout
        session.delete :user_id
        head :no_content, status: :no_content
    end
    
end
