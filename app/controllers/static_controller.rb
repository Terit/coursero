class StaticController < ApplicationController
  def home
    render component: 'Home', props: { currentUser: current_user }
  end
end
