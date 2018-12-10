Rails.application.routes.draw do

  get '/api/v1/clues', to: 'get_clues#clues'
  get '/api/v1/categories', to: 'get_categories#categories'


	namespace :api do
    namespace :v1 do
      resources :categories
      resources :clues
      resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end
end
