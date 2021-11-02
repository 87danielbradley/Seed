class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]
    def index
        @projects = Project.all

    end
    def show
        @project = Project.find(params[:id])
    end
  
    def update
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 401
        end
    end
    def destroy
        @project = Project.find(params[:id])
        if @project.destroy
            render 'api/projects/index'
        else
            render json: @project.errors.full_messages, status: 401
        end
    end
    def create
        @project = Project.new(project_params)

        if @project.save!
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end

    end


    private
    def project_params
        params.require(:project).permit(:author_id, :title, :description, :body, :category_id, :location_id, :start_date, :end_date, :goal, :risks)
    end



end