class Api::V1::ScoresController < ApplicationController
    def index
      @scores = Score.all
      render json: @scores, only:[:id], include: :user
    end
    
end
