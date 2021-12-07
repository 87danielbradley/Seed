class Api::RewardsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]
    def index
        # @rewards = category ? Reward.in_category(category) : Reward.all
        puts(`The category is ${category}`)
        @rewards = Reward.all
        

    end
    def show
        @reward = Reward.find(params[:id])
    end
  
    def update
        @reward = Reward.find(params[:id])
        if @reward.update(reward_params)
            render 'api/rewards/show'
        else
            render json: @reward.errors.full_messages, status: 401
        end
    end
    def destroy
        @reward = Reward.find(params[:id])
        if @reward.destroy
            render 'api/rewards/index'
        else
            render json: @reward.errors.full_messages, status: 401
        end
    end
    def create
        @reward = Reward.new(reward_params)

        if @reward.save!
            render :show
        else
            render json: @reward.errors.full_messages, status: 401
        end

    end


    private
    def reward_params
        params.require(:reward).permit(:pledge_amount, :title, :description, :delivery_date, :limit, :project_id, :shipping_type)
    end




end