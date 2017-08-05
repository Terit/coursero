Rails.application.routes.draw do
  resources :courses
  resources :instructors, only: [:index, :show]

  root to: 'static#home'
end
