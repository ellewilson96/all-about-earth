Rails.application.routes.draw do

  get '/api/clues', to: 'get_clues#clues'

	namespace :api do
      resources :categories do
        resources :clues
      end
      resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end
