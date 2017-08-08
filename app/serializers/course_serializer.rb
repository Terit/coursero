class CourseSerializer < ApplicationSerializer
  attributes :id, :title, :description, :link
  has_one :instructor, serializer: InstructorSerializer
  has_many :lessons

  def link
    course_path(object)
  end
end
