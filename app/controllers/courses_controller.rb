class CoursesController < ApplicationController
  def show
    @course = {
      id: 1,
      title: "Plan Reading",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!",
      link: '/courses/1',
      instructor: { id: 1, name: 'Jim Theriault', link: '/instructors/jim-theriault', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg', biography: 'Blah blah blah' },
      lessons: [
        { id: 1, title: 'Intro', length: 360000 },
        { id: 2, title: 'Lesson 1', length: 360000 },
        { id: 3, title: 'Lesson 2', length: 360000 },
        { id: 4, title: 'Lesson 3', length: 360000 }
      ]
    }

    render component: 'Courses/Course', props: @course
  end

  def index
    @courses = [
      {
        id: 1,
        title: "Plan Reading",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!",
        link: '/courses/1',
        instructor: { id: 1, name: 'Jim Theriault', link: '/instructors/jim-theriault', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg' }
      },
      {
        id: 2,
        title: "Estimating 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!",
        instructor: { id: 1, name: 'Jim Theriault', link: '/instructors/jim-theriault', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg' }
      },
      {
        id: 3,
        title: "Estimating 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!",
        instructor: { id: 1, name: 'Jim Theriault', link: '/instructors/jim-theriault', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg' }
      }
    ]

    render component: 'Courses/List', props: { courses: @courses }
  end
end
