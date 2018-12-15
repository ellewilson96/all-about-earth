class GetCategoriesController < ApplicationController
def categories
    @resp = Faraday.get('http://jservice.io/api/category?id='+ rand(1..1000).to_s)
    body = JSON.parse(@resp.body)
    if @resp.success?
      @category = body
        {id: body["id"],
        title: body["title"],
        clues: []
      }
      render json: @category
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
