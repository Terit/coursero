class InstructorsController < ApplicationController
  def show
    @instructor = { id: 1, name: 'Jim Theriault', link: '/instructors/jim-theriault', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg' }
  end
end
