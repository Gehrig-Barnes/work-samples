class ShiftsController < ApplicationController
    require "date"

    def create
        Shift.create!(shift_params)
        render json: current_user, status: :ok 
    end

    private

    def shift_params
        params.permit(:user_id, :start, :finish, :break, :employee_name)
    end
end
