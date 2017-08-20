class InstructorsController < ApplicationController
  def show
    instructor = ActiveModelSerializers::SerializableResource.new(User.find_by(slug: params[:id])).as_json
    render component: 'Instructors/Instructor', props: instructor.merge(currentUser: current_user)
  end

  def index
    options = { each_serializer: InstructorSerializer }
    instructors = ActiveModelSerializers::SerializableResource.new(User.instructor, options).as_json
    render component: 'Instructors/List', props: { instructors: instructors, currentUser: current_user }
  end
end
