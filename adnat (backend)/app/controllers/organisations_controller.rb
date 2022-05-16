class OrganisationsController < ApplicationController

    def update
        org = Organisation.find(params[:id])
        org.update!(org_params)
        render json: org, status: :ok
    end

    ##create a response that creates a user 
    def create
        new_org = Organisation.create!(org_params)
        current_user = User.find(session[:user_id])
        current_user.update!(organisation_id: new_org.id)
        render json: current_user, status: :ok
    end

    def destroy
        old_org = Organisation.find(params[:id])
        old_org.destroy
        head :no_content 
    end

    private

    def org_params
        params.permit(:name, :hourly_rate)
    end

    
end
