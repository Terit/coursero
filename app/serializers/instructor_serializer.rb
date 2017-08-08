class InstructorSerializer < UserSerializer
  attributes :biography, :link
  has_many :courses

  def link
    instructor_path object.slug
  end
end
