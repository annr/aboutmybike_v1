class SignupsController < ApplicationController
  def new
  end

  def show
    @signup = Signup.find(params[:id])
  end

  def index
    @signups = Signup.all
  end

  def create
    @signup = Signup.new(signup_params)
 
    @signup.save
    render plain: "OK"
  end
 
  private
    def signup_params
      params.require(:signup).permit(:email)
    end

end
