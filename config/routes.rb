Rails.application.routes.draw do
  resources :courses

  root to: 'static#home'
end
