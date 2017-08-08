class CoursesController < ApplicationController
  def show
    course = ActiveModelSerializers::SerializableResource.new(Course.find(params[:id])).as_json
    render component: 'Courses/Course', props: course
  end

  def index
    courses = ActiveModelSerializers::SerializableResource.new(Course.all).as_json
    render component: 'Courses/List', props: { courses: courses }
  end
end
