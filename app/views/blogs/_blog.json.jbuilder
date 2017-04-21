json.extract! blog, :id, :writer, :content, :heading, :created_at, :updated_at
json.url blog_url(blog, format: :json)
