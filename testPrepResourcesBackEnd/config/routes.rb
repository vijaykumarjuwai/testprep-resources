Rails.application.routes.draw do
  resources :testsections
  resources :testinstances
  resources :tests
  resources :questions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
