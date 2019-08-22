class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, only: [:id, :name], include: :scores    
    end 

    # def show 
    # @user = User.find(params[:id])
    # end 

    
end
