class OrganisationsController < ApplicationController

    def update
        org = Organisation.find(params[:id])
        org.update!(org_params)
        render json: org, status: :ok
    end

    private

    def org_params
        params.permit(:name, :hourly_rate)
    end
end
