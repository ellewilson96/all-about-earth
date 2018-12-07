Rails.application.routes.draw do
  resources :users
  resources :clues
  resources :categories
  scope '/api' do
  end

  end
