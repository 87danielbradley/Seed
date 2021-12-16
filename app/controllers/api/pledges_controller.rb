class Api::PledgesController < ApplicationController
    before_action :ensure_logged_in, only: [:create]
    def index
        # @pledges = category ? Pledge.in_category(category) : Pledge.all
        puts(`The category is ${category}`)
        @pledges = Pledge.all
        

    end
    def show
        @pledge = Pledge.find(params[:id])
    end

    def create
        @pledge = Pledge.new(pledge_params)

        if @pledge.save!
            render :show
        else
            render json: @pledge.errors.full_messages, status: 401
        end

    end


    private
    def pledge_params
        params.require(:pledge).permit(:pledge_amount, :reward_id)
    end




end