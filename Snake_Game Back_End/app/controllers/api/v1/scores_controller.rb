class Api::V1::ScoresController < ApplicationController
    def index
      @scores = Score.all
      render json: @scores, only:[:id], include: :user 
    end

    def create 
     @scores = Score.new(score_params)
     if @score.save
        render json: @score, only: [:user_id, :s], include: :user
     else

     end
    private
    def score_params
      params.require(:score).permit(:s, :user_id)
  end 
  def update
    @score
  end
 end
end  
    

