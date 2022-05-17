class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index 
        render json: current_user, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end

    def update
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end

    def join
        user = User.find(params[:id])
        user.update!(org_id_param)
        render json: user, status: :ok
    end

    def leave_org
        user = User.find(params[:id])
        user.update!(org_id_param)
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:name, :password, :password_confirmation, :email)
    end

    def org_id_param
        params.permit(:organisation_id)
    end

    

end
