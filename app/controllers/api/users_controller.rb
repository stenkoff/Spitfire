class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		@user = User.find(params[:id])
	end

	def edit
		@user = User.find(params[:id])
		render :edit
	end

	def update
		@user = User.find(params[:id])
		if @user.id == current_user.id && @user.update(user_params)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
			render :edit
		end
	end

	def destroy
		@user = User.find(params[:id])
		@user.delete
		redirect_to new_api_session_url
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
