Rails.application.routes.draw do
  resources :guesses
  resources :rounds
  resources :users
  resources :clues
  resources :categories
  end
