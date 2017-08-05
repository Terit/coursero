source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

ruby '2.4.1'

gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.3'
gem 'react-rails'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

group :development, :test do
  gem 'pry-byebug', '~> 3.4.0'
  gem 'pry-rails', '~> 0.3.4'
  gem 'pry-stack_explorer', '~> 0.4.9'
end

group :development do
  gem 'better_errors', '~> 2.1'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'faker', '~> 1.6'
  gem 'rspec-rails', '~> 3.5.0'
  gem 'rails-controller-testing', '~> 1.0'
  gem 'rspec-json_expectations'
end