class InstructorsController < ApplicationController
  def show
    @instructor = User.find_by(slug: params[:id])
  end
end
