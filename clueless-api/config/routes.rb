Rails.application.routes.draw do
  get 'scaffold/Category'
  resources :users
	namespace :api do
  		resources :clues
      resources :guesses
      resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end
