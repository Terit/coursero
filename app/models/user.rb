class User < ApplicationRecord
  has_many :courses
  has_many :lessons

  enum role: { student: 0, instructor: 1 }

  has_attached_file :avatar,
                    styles: { medium: '300x300>', thumb: '100x100>' },
                    default_url: '/images/:style/missing.png'
  validates_attachment_content_type :avatar, content_type: %r{\Aimage\/.*\z}

  before_save :create_slug

  def name
    [first_name, last_name].reject(&:blank?).join(' ')
  end

  def create_slug
    self.slug = [first_name, last_name].join('-')
  end
end
