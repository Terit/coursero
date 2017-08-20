Rails.application.routes.draw do
  devise_for :users,
             path: '/',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'signup' },
             controllers: { registrations: 'users/registrations', sessions: 'users/sessions' }

  devise_scope :user do
    get 'logout', to: 'devise/sessions#destroy'
  end

  resources :courses
  resources :instructors, only: [:index, :show]

  root to: 'static#home'
end
