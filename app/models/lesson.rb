class Lesson < ApplicationRecord
  belongs_to :instructor, class_name: 'User', foreign_key: :user_id
  belongs_to :course
end
